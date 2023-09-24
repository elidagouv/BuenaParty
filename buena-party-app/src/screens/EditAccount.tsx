import React from 'react'
import Background from '../components/Background';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../components/Images';
import NavBar from '../components/NavBar';
import FormBox from '../components/FormBox';
import GradientButtonM from '../components/GradientButtonM';
import styles from '../../assets/styles/styles';
import { StackNavigationProp } from '@react-navigation/stack';

type EditAccountProps = {
    navigation: StackNavigationProp<any>;
};

const EditAccount: React.FC<EditAccountProps> = ({ navigation }) => {
    return (
        <Background colors={[]} style={style.container}>
            <SafeAreaView style={style.main}>
                <NavBar onPress={() => navigation.navigate('My Account')} />
               
                <TouchableOpacity>
                    <Images style={style.profile} iconSource={require('../../assets/icons/perfil.png')} />
                </TouchableOpacity>
                <View style={style.form}>
                    <FormBox colors={[]} placeholder='Nome' iconSource={require('../../assets/icons/danca.png')} />
                    <FormBox colors={[]} placeholder='Telefone' iconSource={require('../../assets/icons/phone.png')} />
                    <FormBox colors={[]} placeholder='Email' iconSource={require('../../assets/icons/email.png')} />
                    <FormBox colors={[]} placeholder='Senha' iconSource={require('../../assets/icons/password.png')} />
                    <FormBox colors={[]} placeholder='Confirmar Senha' iconSource={require('../../assets/icons/password.png')} />

                    <View style={style.button}>
                        <GradientButtonM onPress={() => navigation.navigate('My Account')} colors={[]}>
                            <Text style={styles.gradientButtonMText}>Confirmar</Text>
                        </GradientButtonM>
                    </View>
                </View>

            </SafeAreaView>
        </Background>
    )
}
const style = StyleSheet.create({
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    },
    profile: {
        width: 90,
        height: 90,
        left: 120
    },
    container: {
        position: 'relative',
    },
    main: {
        position: 'absolute',
        top: 0,
    },
    form: {
        top: 20
    },
    button: {
        alignItems: 'center',
        marginTop: 20,
    }

});
export default EditAccount;