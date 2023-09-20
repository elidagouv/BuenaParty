import React from 'react'
import Background from '../components/Background';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../components/Images';
import NavBar from '../components/NavBar';
import FormBox from '../components/FormBox';
import GradientButtonM from '../components/GradientButtonM';
import styles from '../../assets/styles/styles';


const CreateEvent = () => {
    return (
        <Background colors={[]} style={style.container}>
            <SafeAreaView style={style.main}>
                <NavBar style={style.navbar}/>
               
                <Text style={style.text}>Criar Evento</Text>
                <View style={style.form}>
                    <FormBox colors={[]} placeholder='Nome' iconSource={require('../../assets/icons/party.png')} />
                    <FormBox colors={[]} placeholder='Descrição' iconSource={require('../../assets/icons/aviso.png')} />
                    <FormBox colors={[]} placeholder='Local' iconSource={require('../../assets/icons/address.png')} />
                    <FormBox colors={[]} placeholder='Data' iconSource={require('../../assets/icons/date.png')} />
                    <FormBox colors={[]} placeholder='Horário' iconSource={require('../../assets/icons/hour.png')} />

                    <View style={style.button}>
                        <GradientButtonM onPress={[]} colors={[]}>
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
        fontWeight: 'bold',
        marginBottom: 10,
    },
    profile: {
        width: 90,
        height: 90,
        marginLeft: 'auto', // Alinha à direita para centrar na tela
        marginRight: 'auto', // Alinha à direita para centrar na tela
    },
    container: {
        flex: 1, // Usando flex para ocupar todo o espaço disponível
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center', // Centraliza horizontalmente
    },
    main: {
        flex: 1, // Usando flex para ocupar todo o espaço disponível
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center', // Centraliza horizontalmente
    },
    form: {
        marginTop: 20,
    },
    button: {
        alignItems: 'center',
        marginTop: 20,
    },
    navbar:{
        position:'absolute',
        top:0,
       
    }
    ,
});

export default CreateEvent;