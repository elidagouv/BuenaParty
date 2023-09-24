import React from 'react'
import Background from '../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/NavBar';
import { StyleSheet, Text, View } from 'react-native';
import GradientButtonL from '../components/GradientButtonL';
import styles from '../../assets/styles/styles';
import GradientButtonM from '../components/GradientButtonM';
import BlackButton from '../components/BlackButton';
import { StackNavigationProp } from '@react-navigation/stack';

type MyAccountProps = {
    navigation: StackNavigationProp<any>;
};

const MyAccount: React.FC<MyAccountProps> = ({ navigation }) => {
    return (
        <Background colors={[]} style={style.container}>
            <SafeAreaView style={style.main}>
                <NavBar onPress={() => navigation.navigate('Home Screen')}/>
                <Text style={style.text}>Minha Conta</Text>
                <View style={style.boxButtons}>
                    <GradientButtonL onPress={() => navigation.navigate('Edit Account')} colors={[]}>
                        <Text style={styles.gradientButtonLText}>Editar conta</Text>
                    </GradientButtonL>
                    <GradientButtonM onPress={[]} colors={[]}>
                        <Text style={styles.gradientButtonMText}>Notificações</Text>
                    </GradientButtonM>
                    <View style={style.button}>
                        <GradientButtonM onPress={() => navigation.navigate('FirstScreen')} colors={[]}>
                            <Text style={styles.gradientButtonMText}>Sair</Text>
                        </GradientButtonM>
                        <BlackButton onPress={[]} colors={[]}>
                            <Text style={styles.blackButtonText}>Excluir Conta</Text>
                        </BlackButton>
                    </View>
                </View>

            </SafeAreaView>
        </Background>
    )
}
const style = StyleSheet.create({
    container: {
        position: 'relative'
    },
    main: {
        position: 'absolute',
        top: 0
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,

    },
    boxButtons:{
        top:'25%'
    },
    button: {
        alignItems: 'center',
        top: '30%'
    }

});
export default MyAccount;