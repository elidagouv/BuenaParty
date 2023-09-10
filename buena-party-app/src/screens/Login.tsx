import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import Images from '../components/Images';
import FormBox from '../components/FormBox';
import { SafeAreaView } from 'react-native-safe-area-context';
import GradientButtonM from '../components/GradientButtonM';
import styles from '../../assets/styles/styles';

const Login = () => {
  const handleForgotPassword = () => {};

  return (
    <Background colors={[]} style={style.background}>
      <SafeAreaView style={style.container}>
        <View style={style.boxImage}>
          <TouchableOpacity onPress={handleForgotPassword}>
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
          >

          </FormBox>
          <FormBox
            colors={[]}
            placeholder='Senha'
            iconSource={require('../../assets/icons/password.png')}
          >
            
          </FormBox>

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={style.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <View style={style.button}>
            <GradientButtonM colors={[]} onPress={[]}>
              <Text style={styles.gradientButtonMText}>Entrar</Text>
            </GradientButtonM>
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
});

export default Login;
