import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../assets/styles/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import NavBar2 from '../components/NavBar2';
import GradientButtonL from '../components/GradientButtonL';
import AsyncStorage from '@react-native-async-storage/async-storage';

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {

    const fetchUserName = async () => {
      try {
        const userStoredName = await AsyncStorage.getItem('nomeUser');
        if (userStoredName) {
          setUserName(userStoredName);
        }
      } catch (error) {
        console.error('Erro ao buscar o nome do usuário:', error);
      }

    };

    fetchUserName();
  }, []);

  return (
    <Background colors={[]}>
      <SafeAreaView style={style.main}>
        <NavBar2 style={style.main} onPress={() => navigation.navigate('My Account')} />
        <View>
          <View style={style.container}>
          <View>
            <Text style={style.text}>Usuário logado: {userName}</Text>
          </View>
            <Text style={style.text}>Você não está participando de nenhum evento? Crie ou entre em um evento.</Text>
          </View>
          <View style={style.buttonBox}>
            <GradientButtonL colors={[]} style={styles.gradientButtonL} onPress={() => navigation.navigate('Create Event')}>
              <Text style={styles.gradientButtonLText}>Criar Evento</Text>
            </GradientButtonL>
            <GradientButtonL colors={[]} style={styles.gradientButtonL} onPress={() => navigation.navigate('Home Screen 2')}>
              <Text style={styles.gradientButtonLText}>Ver eventos</Text>
            </GradientButtonL>
            <GradientButtonL colors={[]} style={styles.gradientButtonL} onPress={() => navigation.navigate('Edit Account')}>
              <Text style={styles.gradientButtonLText}>Editar Conta</Text>
            </GradientButtonL>
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
    fontSize: 34,
    fontWeight: 'bold',
  },
  container: {
    top: 250,
    width: '90%',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    position: 'absolute',
  },
  buttonBox: {
    top: 370,
  },
});

export default HomeScreen;