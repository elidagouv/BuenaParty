const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3090;

app.use(bodyParser.json())
app.use(cors());

// Conexão com o Banco de Dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'BUENA_PARTY',
});

db.connect((err) => {
  if (err) {
    console.error('Erro na conexão com o MySQL: ' + err.stack);
    return;
  }
  console.log('Conexão bem-sucedida ao MySQL como ID ' + db.threadId);
});

// Teste API
const testeAPI = app.post('/api/enviar-dados', (req, res) => {

  const { nome, telefone, email, senha, confirmarSenha } = req.body;

  if (nome && telefone && email && senha && confirmarSenha) {
    console.log('Dados recebidos no servidor:', { nome, telefone, email, senha, confirmarSenha });
    res.json({ message: nome, telefone, email, senha, confirmarSenha });
  } else {
    res.status(400).json({ error: 'Campos inválidos' });
  }
});

//EndPoint para selecionar todas as informações de todos os usuários
app.get('/api/dados', (req, res) => {
  const query = 'SELECT * FROM USUARIO';

  db.query(query, (err, result) => {
    if (err) {
      console.error('Erro na consulta SQL: ' + err.stack);
      res.status(500).json({ error: 'Erro no servidor' });
      return;
    }

    res.json(result);
  });
});

//Endpoint para aparecer o nome do usuario
app.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  const query = 'SELECT USUARIO.nome FROM USUARIO WHERE id = ?';

  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error('Erro na consulta SQL: ' + err.stack);
      res.status(500).json({ error: 'Erro no servidor' });
      return;
    }

    if (result.length === 0) {
      res.status(404).json({ error: 'Usuário não encontrado' });
    } else {
      res.json(result[0]);
    }
  });
});


// EndPoint de registro do usuário
app.post('/register/user', async (req, res) => {
  try {
    const { nome, email, telefone, senha } = req.body;

    // Validação do e-mail
    const existenteUser = await db.promise().query('SELECT * FROM USUARIO WHERE USUARIO.e_mail = ?', [email]);

    if (existenteUser[0].length > 0) {
      return res.status(400).json({ error: 'Este e-mail já está cadastrado!' });
    }

    //Registro do usuário
    await db.promise().query('INSERT INTO USUARIO (nome, senha, e_mail, telefone) VALUES (?, ?, ?, ?)', [
      nome,
      senha,
      email,
      telefone,
    ]);

    return res.status(200).json({ message: 'Usuário cadastrado com sucesso!', nome, senha, email, telefone });
  } catch (error) {
    console.error('Erro no usuário: ', error);
    return res.status(500).json({ error: 'Erro ao cadastrar o usuário!' });
  }
});

//EndPoint para registrar o evento baseado no usuário
app.get('/register/events/:userId', (req, res) => {
  const userId = req.params.userId;

  //Vai ter que criar esse usuario_id no banco na tabela evento para relacionar o user com o evento
  const query = 'SELECT * FROM EVENTO WHERE usuario_id = ?';

  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error('Erro na consulta SQL: ' + err.stack);
      res.status(500).json({ error: 'Erro no servidor' });
      return;
    }

    res.json(result);
  });
});

//EndPoint para editar um evento específico com base no usuário
app.put('/update/events/:eventId', async (req, res) => {
  const eventId = req.params.eventId;
  const { nome, data, hora, endereço } = req.body;

  try {
    // Verifica a autenticação do usuário para garantir que o usuário autenticado seja o mesmo que criou o evento
    const userId = req.user.id; // Substitua pelo método de obtenção do ID do usuário autenticado

    // Verifica se o usuário é o criador do evento
    const checkOwnershipQuery = 'SELECT 1 FROM evento WHERE id = ? AND criado_por = ?';
    const [ownershipResult] = await db.promise().query(checkOwnershipQuery, [eventId, userId]);

    if (ownershipResult.length === 0) {
      return res.status(401).json({ error: 'Você não tem permissão para editar este evento.' });
    }

    // Exemplo de consulta SQL para atualizar o evento
    const updateEventQuery = 'UPDATE evento SET nome = ?, data = ?, hora = ?, endereço = ? WHERE id = ?';
    await db.promise().query(updateEventQuery, [nome, data, hora, endereço, eventId]);

    res.status(200).json({ message: 'Evento atualizado com sucesso!' });
  } catch (error) {
    console.error('Erro ao atualizar o evento: ', error);
    res.status(500).json({ error: 'Erro ao atualizar o evento' });
  }
});


//Endpoint para logar
app.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    const [rows] = await db.promise().query('SELECT USUARIO.id, USUARIO.nome, USUARIO.senha FROM USUARIO WHERE USUARIO.e_mail = ?', [email]);

    if (rows.length === 0 || rows[0].senha !== senha) {
      return res.status(401).json({ error: 'Suas credenciais são inválidas' });
    }

    const token = 'logado-pai';
    const id = rows[0].id;
    const nome = rows[0].nome;

    return res.status(200).json({ id, nome, token });

  } catch (error) {
    console.error('Erro ao logar: ', error);
    return res.status(500).json({ error: 'Erro no lado do servidor' });
  }
});

//EndPoint para atualizar os dados do usuário
app.put('/update/user/:id', async (req, res) => {
  const userId = req.params.id;
  const { nome, email, telefone, senha } = req.body;

  try {
    // Exemplo de consulta SQL para atualizar o usuário
    await db.promise().query('UPDATE USUARIO SET nome = ?, email = ?, telefone = ?, senha = ? WHERE id = ?', [
      nome,
      email,
      telefone,
      senha,
      userId
    ]);

    res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (error) {
    console.error('Erro ao atualizar o usuário: ', error);
    res.status(500).json({ error: 'Erro ao atualizar o usuário' });
  }
});


//registra o evento
app.post('/registrar-evento/', (req, response) => {

  const { nome, data, hora, local, criado_por } = req.body;
  const dataVal = new Date(data);

  const sql = 'INSERT INTO EVENTO (criado_por, nome, data, hora, endereço) VALUES (?, ?, ?, ?, ?)';

  db.query(sql, [criado_por, nome, dataVal, hora, local], (err, res) => {

    if (err) {
      console.error('Erro ao inserir evento no banco de dados:', err);
      response.status(500).json({ error: 'Erro ao inserir evento no banco de dados' });
    } else {
      console.log('Evento inserido com sucesso!');
      console.log(criado_por)
      response.status(201);
      response.json({ message: 'Evento registrado com sucesso' });
    }

  });
});



// Servidor Express
app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});