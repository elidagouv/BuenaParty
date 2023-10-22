import React, { useState, useEffect } from 'react';
import Background from '../components/Background';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormBox from '../components/FormBox';
import GradientButtonM from '../components/GradientButtonM';
import styles from '../../assets/styles/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

type EditEventProps = {
  navigation: StackNavigationProp<any>;
};

const EditEvent: React.FC<EditEventProps> = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [local, setLocal] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    // Recuperar os detalhes do evento a ser editado (substitua o eventId pelo ID do evento correto)
    const eventId = 1; // Substitua pelo ID do evento que deseja editar

    axios
      .get(`http://localhost:3090/register/events/${eventId}`)
      .then((response) => {
        const eventData = response.data[0]; // Os detalhes do evento obtidos do servidor
        setNome(eventData.nome);
        setDescricao(eventData.descricao);
        setLocal(eventData.local);
        setData(eventData.data);
        setHora(eventData.hora);
        // Defina outros estados conforme necessário
      })
      .catch((error) => {
        console.error('Erro ao buscar detalhes do evento:', error);
      });
  }, []);

  const handleEdit = async () => {
    try {
      const eventId = 1; // Substitua pelo ID do evento que está editando

      // Enviar solicitação PUT para atualizar os detalhes do evento
      await axios.put(`http://localhost:3090/update/events/${eventId}`, {
        nome: nome,
        descricao: descricao,
        local: local,
        data: data,
        hora: hora,
        // Inclua outros campos conforme necessário
      });

      // Redirecionar para a tela de gerenciamento de evento ou outra tela após a edição bem-sucedida
      navigation.navigate('Manage Event');
    } catch (error) {
      console.error('Erro ao editar o evento:', error);
      setMensagem('Erro ao editar o evento. Verifique os campos preenchidos!');
    }
  };

  return (
    <Background colors={[]} style={style.container}>
      <SafeAreaView style={style.main}>
        <Text style={style.text}>Editar Evento</Text>
        <View style={style.form}>
          <FormBox
            colors={[]}
            placeholder="Nome"
            iconSource={require('../../assets/icons/party.png')}
            onChange={(text) => setNome(text)}
            value={nome}
          />
          <FormBox
            colors={[]}
            placeholder="Descrição"
            iconSource={require('../../assets/icons/aviso.png')}
            onChange={(text) => setDescricao(text)}
            value={descricao}
          />
          <FormBox
            colors={[]}
            placeholder="Local"
            iconSource={require('../../assets/icons/address.png')}
            onChange={(text) => setLocal(text)}
            value={local}
          />
          <FormBox
            colors={[]}
            placeholder="(YYYY-MM-DD)"
            iconSource={require('../../assets/icons/date.png')}
            onChange={(text) => setData(text)}
            value={data}
          />
          <FormBox
            colors={[]}
            placeholder="Horário"
            iconSource={require('../../assets/icons/hour.png')}
            onChange={(text) => setHora(text)}
            value={hora}
          />

          <View style={style.button}>
            <GradientButtonM onPress={handleEdit} colors={[]}>
              <Text style={styles.gradientButtonMText}>Confirmar</Text>
            </GradientButtonM>

            {mensagem ? <Text style={style.mensagem}>{mensagem}</Text> : null}
          </View>
        </View>
      </SafeAreaView>
    </Background>
  );
};

const style = StyleSheet.create({
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    position: 'relative',
  },
  main: {
    position: 'absolute',
    top: 0,
  },
  form: {
    top: 20,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
  mensagem: {
    color: 'green',
    marginTop: 10,
  },
});

export default EditEvent;
