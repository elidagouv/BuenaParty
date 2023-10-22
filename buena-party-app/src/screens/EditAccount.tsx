// No componente EditAccount

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../components/Images';
import NavBar from '../components/NavBar';
import FormBox from '../components/FormBox';
import GradientButtonM from '../components/GradientButtonM';
import styles from '../../assets/styles/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

type EditAccountProps = {
  navigation: StackNavigationProp<any>;
};

const EditAccount: React.FC<EditAccountProps> = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // UseEffect para buscar os dados do usuário e preencher os estados ao carregar a tela de edição
  useEffect(() => {
    // Faça uma solicitação GET para obter os dados do usuário com base no ID
    const userId = 1; // Substitua pelo ID do usuário que está editando
    axios.get(`http://localhost:3090/api/user/${userId}`)
      .then((response) => {
        const userData = response.data; // Os dados do usuário obtidos do servidor
        setNome(userData.nome);
        setTelefone(userData.telefone);
        setEmail(userData.email);
        // Defina outros estados conforme necessário
      })
      .catch((error) => {
        console.error('Erro ao buscar dados do usuário:', error);
      });
  }, []);

  const handleEdit = async () => {
    try {
      const userId = 1; // Substitua pelo ID do usuário que está editando

      // Faça uma solicitação PUT para atualizar os dados do usuário
      await axios.put(`http://localhost:3090/update/user/${userId}`, {
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senha,
        // Inclua outros campos conforme necessário
      });

      // Redirecione para a tela de perfil ou outra tela após a edição bem-sucedida
      navigation.navigate('My Account');
    } catch (error) {
      console.error('Erro ao editar usuário:', error);
    }
  };

  return (
    <Background colors={[]} style={style.container}>
      <SafeAreaView style={style.main}>
        <NavBar onPress={() => navigation.navigate('My Account')} />
        <Text style={style.text}>Editar Perfil</Text>
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
            <GradientButtonM onPress={handleEdit} colors={[]}>
              <Text style={styles.gradientButtonMText}>Confirmar</Text>
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
    top: 20,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default EditAccount;
