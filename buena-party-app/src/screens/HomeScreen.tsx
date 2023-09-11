import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../assets/styles/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import NavBar2 from '../components/NavBar2';
import GradientButtonL from '../components/GradientButtonL';

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  return (
    <Background colors={[]}>
            <SafeAreaView style={style.main}>
                <NavBar2 style={style.main} onPress={() => navigation.navigate('My Account')} />
                <View>
                    <View style={style.container}>
                    <Text style={style.text}>Você não está participando de nenhum evento? Crie ou entre em um evento.</Text>
                    </View>
                    <View style={style.buttonBox}>
                        <GradientButtonL colors={[]} style={styles.gradientButtonL} onPress={() => navigation.navigate('Create Event')}>
                            <Text style={styles.gradientButtonLText}>Criar Evento</Text>
                        </GradientButtonL>
                        <GradientButtonL colors={[]} style={styles.gradientButtonL} onPress={() => navigation.navigate('Home Screen 2')}>
                            <Text style={styles.gradientButtonLText}>Entrar em evento</Text>
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
        fontWeight: 'bold'
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
    }
    
});

export default HomeScreen;
