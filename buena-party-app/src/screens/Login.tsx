import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import Images from '../components/Images';
import FormBox from '../components/FormBox';
import { SafeAreaView } from 'react-native-safe-area-context';
import GradientButtonM from '../components/GradientButtonM';
import styles from '../../assets/styles/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importe AsyncStorage

type LoginProps = {
  navigation: StackNavigationProp<any>;
};

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Verifique se há um token armazenado localmente ao carregar a tela de login
    checkAuthToken();
  }, []);

  const checkAuthToken = async () => {
    // Verifique se há um token no AsyncStorage
    const authToken = await AsyncStorage.getItem('authToken');
    if (authToken) {
      // Se houver um token, navegue para a tela Home diretamente
      navigation.navigate('HomeScreen');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3090/login', {
        email: email,
        senha: senha,
      });

      if (response.status === 200) {
        console.log(response.data);

        // Armazene o token no AsyncStorage após um login bem-sucedido
        await AsyncStorage.setItem('authToken', response.data.token);
        await AsyncStorage.setItem(`idUser`, response.data.id);
        await AsyncStorage.setItem(`nomeUser`, response.data.nome);

        navigation.navigate('HomeScreen');

      }
    } catch (error) {
      console.error('Erro ao realizar o login: ', error);
      setError('Erro ao fazer o login. Verifique suas credenciais.');
      setEmail('');
      setSenha('');
    }
  };

  return (
    <Background colors={[]} style={style.background}>
      <SafeAreaView style={style.container}>
        <View style={style.boxImage}>
          <TouchableOpacity onPress={() => navigation.navigate('FirstScreen')}>
            <Images
              style={style.back}
              iconSource={require('../../assets/icons/back.png')}
            />
          </TouchableOpacity>
          <Images
            style={style.LogoBranca}
            iconSource={require('../../assets/icons/LogoBranco.png')}
          />
        </View>

        <Text style={style.Login}>Login</Text>

        <View style={style.boxForm}>
          <FormBox
            colors={[]}
            placeholder='Email'
            iconSource={require('../../assets/icons/email.png')}
            onChange={(text) => {
              setEmail(text);
            }}
            value={email}
          ></FormBox>
          <FormBox
            colors={[]}
            placeholder='Senha'
            iconSource={require('../../assets/icons/password.png')}
            onChange={(text) => setSenha(text)}
            value={senha}
          ></FormBox>
          <View style={style.button}>
            <GradientButtonM colors={[]} onPress={handleLogin}>
              <Text style={styles.gradientButtonMText}>Entrar</Text>
            </GradientButtonM>
            {error ? <Text style={style.errorText}>{error}</Text> : null}
          </View>
        </View>
      </SafeAreaView>
    </Background>
  );
};

const style = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#070624',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    position: 'absolute',
  },
  boxImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  back: {
    marginLeft: 0,
    right: 100,
  },
  LogoBranca: {
    width: 100,
    height: 100,
    right: 26,
  },
  Login: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    top: 40,
  },
  boxForm: {
    width: '100%',
    top: '30%',
  },
  forgotPasswordText: {
    color: '#fff',
    textDecorationLine: 'underline',
    marginTop: 8,
    marginBottom: 60,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
  },

  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Login;