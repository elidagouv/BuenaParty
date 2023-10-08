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

//rota para aparecer o nome do usuario
app.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  const query = 'SELECT * FROM USUARIO WHERE id = ?';

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



// Rota de registro de um usuário
app.post('/register/user', async (req, res) => {
  try {
    const { nome, email, telefone, senha } = req.body;

    // Validação do e-mail
    const existenteUser = await db.promise().query('SELECT * FROM USUARIO WHERE USUARIO.e_mail = ?', [email]);

    if (existenteUser[0].length > 0) {
      return res.status(400).json({ error: 'Este e-mail já está cadastrado!' });
    }

    // Registro do usuário
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


app.post('/login', async (req, res) => {

  try {
    const { email, senha } = req.body;

    const verificaUser = await db.promise().query('SELECT USUARIO.e_mail, USUARIO.senha FROM USUARIO WHERE USUARIO.e_mail = ?', [email]);

    if (verificaUser[0].length === 0 || verificaUser[0][0].senha !== senha) {
      return res.status(401).json({ error: 'Suas credenciais são inválidas' })
    }

    const token = 'logado-pai'

    return res.status(200).json({ token })

  } catch (error) {
    console.error('Erro ao logar: ', error);
    return res.status(500).json({ error: 'Erro no lado do servidor!' })
  }

})

app.post('/registrar-evento', (req, response) => {
  const { nome, data, hora, local } = req.body;
  const dataVal = new Date(data);

  const sql = 'INSERT INTO EVENTO (nome, data, hora, endereço) VALUES (?, ?, ?, ?)';

  db.query(sql, [nome, dataVal, hora, local], (err, res) => {
    if (err) {
      console.error('Erro ao inserir evento no banco de dados:', err);
      response.status(500).json({ error: 'Erro ao inserir evento no banco de dados' });
    } else {
      console.log('Evento inserido com sucesso!');
      response.status(201);
      response.json({ message: 'Evento registrado com sucesso' });
    }
  });
});


// Servidor Express
app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});