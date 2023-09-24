import React from 'react'
import Background from '../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../components/Images';
import { StyleSheet, Text, View } from 'react-native';
import GradientButtonL from '../components/GradientButtonL';
import { StackNavigationProp } from '@react-navigation/stack';

type FirstScreenProps = {
    navigation: StackNavigationProp<any>;
};

const FirstScreen: React.FC<FirstScreenProps> = ({ navigation }) => {

    return (


        <Background colors={["#070624", "#000000", "#070624"]}>
            <SafeAreaView>
                <Logo style={styles.Logo} iconSource={require('../../assets/icons/LogoGradiente.png')}/>
                <GradientButtonL colors={[]} onPress={() => navigation.navigate('Login')} >
                    <Text style={styles.text}>Entrar</Text>
                </GradientButtonL>
                <GradientButtonL colors={[]} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.text}>Cadastrar</Text>
                </GradientButtonL>
            </SafeAreaView>

        </Background>



    )
}
const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    Logo:{
        width:250,
        height:250,
        marginBottom:100,
        marginLeft:40
    }
})
export default FirstScreen;