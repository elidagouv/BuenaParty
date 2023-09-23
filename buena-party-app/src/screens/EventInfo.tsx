import React from 'react'
import Background from '../components/Background';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/NavBar';
import styles from '../../assets/styles/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import EventBoxDark from '../components/EventBoxDark';
import GradientButtonL from '../components/GradientButtonL';

type EventInfoProps = {
    navigation: StackNavigationProp<any>;
};

const EventInfo: React.FC<EventInfoProps> = ({ navigation }) => {
    return (
        <Background colors={[]} style={style.container}>
            <SafeAreaView style={style.main}>
                <NavBar onPress={() => navigation.navigate('Home Screen')}/>
                <View style={style.box}>
                    <Text style={style.text}>
                        Casamento de Ana
                    </Text>
                    <EventBoxDark 
                        colors={[]} 
                        iconSource={require('../../assets/icons/more.png')} 
                        onPress={() => navigation.navigate('Event Details')}
                    />
                    <View style={style.qrCodeBox}>

                    </View>
                    <GradientButtonL 
                        colors={[]} 
                        onPress={() => navigation.navigate('Home Screen 2')}
                        style={style.button}
                    >
                        <Text style={styles.gradientButtonLText}>
                            Acessar o feed
                        </Text>
                    </GradientButtonL>
                    <Text style={style.bottomText}>O acesso ao feed só será liberado após entrada confirmada no evento.</Text>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: -50,
        position: 'absolute',
    },
    form: {
        top: 20
    },
    button: {
        top: 290,
    },
    box: {
        alignItems: 'center'
    },
    bottomText: {
        top: 290,
        fontSize: 18,
        color: "#FFFFFF",
        width: 320,
        textAlign: 'center'
    },
    qrCodeBox: {

    }

});
export default EventInfo;