import React, { useState } from 'react';
import Background from '../components/Background';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../components/Images';
import NavBar from '../components/NavBar';
import FormBox from '../components/FormBox';
import GradientButtonM from '../components/GradientButtonM';
import styles from '../../assets/styles/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

import axios from 'axios';
import { response } from 'express';

const urlAPI = 'http://localhost:3090';

type RegisterProps = {
  navigation: StackNavigationProp<any>;
};

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${urlAPI}/register/user`, {
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha
      });
  
      if (response.data) {
        console.log(response.data);

        navigation.navigate('HomeScreen'); // Use 'HomeScreen' em vez de 'Home Screen'

      }

    } catch (error) {
      console.error('Erro na requisição:', error);
      // Trate os erros de acordo com sua lógica
    }
  };

  return (
    <Background colors={[]} style={style.container}>
      <SafeAreaView style={style.main}>
        <NavBar onPress={() => navigation.navigate('FirstScreen')} />
        <Text style={style.text}>Bem Vindo à BUENAPARTY!</Text>
        <TouchableOpacity>
          <Images style={style.profile} iconSource={require('../../assets/icons/perfil.png')} />
        </TouchableOpacity>
        <View style={style.form}>
          <FormBox
            colors={[]}
            placeholder="Nome"
            iconSource={require('../../assets/icons/danca.png')}
            onChange={text => setNome(text)}
            value={nome}
          />
          <FormBox
            colors={[]}
            placeholder="Telefone"
            iconSource={require('../../assets/icons/phone.png')}
            onChange={text => setTelefone(text)}
            value={telefone}
          />
          <FormBox
            colors={[]}
            placeholder="Email"
            iconSource={require('../../assets/icons/email.png')}
            onChange={text => setEmail(text)}
            value={email}
          />
          <FormBox
            colors={[]}
            placeholder="Senha"
            iconSource={require('../../assets/icons/password.png')}
            onChange={text => setSenha(text)}
            value={senha}
          />
          <FormBox
            colors={[]}
            placeholder="Confirmar Senha"
            iconSource={require('../../assets/icons/password.png')}
            onChange={text => setConfirmarSenha(text)}
            value={confirmarSenha}
          />

          <View style={style.button}>
            <GradientButtonM onPress={handleSubmit} colors={[]}>
              <Text style={styles.gradientButtonMText}>Cadastrar</Text>
            </GradientButtonM>
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
  },
  profile: {
    width: 90,
    height: 90,
    left: 120,
  },
  container: {
    position: 'relative',
  },
  main: {
    position: 'absolute',
    top: 0,
  },
  form: {
    top: 10,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Register;
