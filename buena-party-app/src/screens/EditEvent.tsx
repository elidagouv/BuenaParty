import React from 'react';
import Background from '../components/Background';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../components/Images';
import NavBar from '../components/NavBar';
import FormBox from '../components/FormBox';
import GradientButtonM from '../components/GradientButtonM';

const EditEvent = () => {
    return (
        <Background colors={[]} style={style.container}>
            <SafeAreaView style={style.main}>
                <ScrollView>
                    <NavBar />
                    <Text style={style.text}>Editar Evento</Text>
                    <View style={style.form}>
                        <FormBox colors={[]} placeholder='Nome' iconSource={require('../../assets/icons/party.png')} />
                        <FormBox colors={[]} placeholder='Descrição' iconSource={require('../../assets/icons/aviso.png')} />
                        <FormBox colors={[]} placeholder='Local' iconSource={require('../../assets/icons/address.png')} />
                        <FormBox colors={[]} placeholder='Data' iconSource={require('../../assets/icons/date.png')} />
                        <FormBox colors={[]} placeholder='Horário' iconSource={require('../../assets/icons/hour.png')} />

                        <View style={style.button}>
                            <GradientButtonM onPress={[]} colors={[]}>
                                <Text style={style.buttonText}>Confirmar</Text>
                            </GradientButtonM>
                        </View>
                    </View>
                </ScrollView>
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
    container: {
        flex: 1,
    },
    main: {
        flex: 1,
    },
    form: {
        paddingHorizontal: 20, // Espaçamento horizontal
        paddingVertical: 10, // Espaçamento vertical
    },
    button: {
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EditEvent;
