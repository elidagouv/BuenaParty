import React, { useEffect } from 'react';
import Background from '../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../components/Images';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import GradientButtonL from '../components/GradientButtonL';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type FirstScreenProps = {
  navigation: StackNavigationProp<any>;
};

const FirstScreen: React.FC<FirstScreenProps> = ({ navigation }) => {
  useEffect(() => {
    // Verifique se há um token armazenado localmente ao carregar a tela FirstScreen
    checkAuthToken();
  }, []);

  const checkAuthToken = async () => {
    // Verifique se há um token no AsyncStorage
    const authToken = await AsyncStorage.getItem('authToken');
    if (authToken) {
      // Se houver um token, mostre o botão de logout
      // O botão de logout não terá efeito se o usuário não estiver logado
      setLogoutButtonVisible(true);
    }
  };

  const [logoutButtonVisible, setLogoutButtonVisible] = React.useState(false);

  const handleLogout = async () => {
    // Remova o token do AsyncStorage ao fazer logout
    await AsyncStorage.removeItem('authToken');
    setLogoutButtonVisible(false);
  };

  return (
    <Background colors={["#070624", "#000000", "#070624"]}>
      <SafeAreaView>
        <Logo style={styles.Logo} iconSource={require('../../assets/icons/LogoGradiente.png')} />
        <GradientButtonL colors={[]} onPress={() => navigation.navigate('Login')} >
          <Text style={styles.text}>Entrar</Text>
        </GradientButtonL>
        <GradientButtonL colors={[]} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.text}>Cadastrar</Text>
        </GradientButtonL>
        {logoutButtonVisible && (
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        )}
      </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  Logo: {
    width: 250,
    height: 250,
    marginBottom: 100,
    marginLeft: 40
  },
  logoutText: {
    color: 'blue', // Altere a cor do botão de logout como desejar
    textAlign: 'center',
    marginTop: 20, // Ajuste a margem como desejar
  },
});

export default FirstScreen;
