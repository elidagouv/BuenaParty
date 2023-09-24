import React from 'react'
import Background from '../components/Background';
import { Text, View, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../components/Images';
import NavBar from '../components/NavBar';
import GradientButtonM from '../components/GradientButtonM';
import styles from '../../assets/styles/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import GradientBox from '../components/GradientBox';
import InviteCode from '../components/InviteCode';

type EnterEventProps = {
    navigation: StackNavigationProp<any>;
};

const EnterEvent: React.FC<EnterEventProps> = ({ navigation }) => {
    return (
        <Background colors={[]} style={style.container}>
            <SafeAreaView style={style.main}>
                <NavBar onPress={() => navigation.navigate('Home Screen')}/>
               
                <Text style={style.text}>Entrar Evento</Text>
                <View style={style.boxContainer}>
                    <GradientBox colors={[]} iconSource={require('../../assets/icons/danca.png')}>
                        <Text style={styles.formBoxTextInput}>

                        </Text>
                    </GradientBox>
                    <GradientBox colors={[]} iconSource={require('../../assets/icons/phone.png')}>
                        <Text style={styles.formBoxTextInput}>
                            
                        </Text>
                    </GradientBox>
                    <GradientBox colors={[]} iconSource={require('../../assets/icons/email.png')}>
                        <Text style={styles.formBoxTextInput}>
                            
                        </Text>
                    </GradientBox>
                    <View style={style.code}>
                    <InviteCode colors={[]} />
                    </View>
                </View>
                    
                    <View style={style.button}>
                        <GradientButtonM onPress={() => navigation.navigate('Event Details')} colors={[]}>
                            <Text style={styles.gradientButtonMText}>Confirmar</Text>
                        </GradientButtonM>
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
        marginBottom:10
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
        margin: 30
    },
    boxContainer: {
        top: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    code: {
        margin: 30,
    }

});
export default EnterEvent;