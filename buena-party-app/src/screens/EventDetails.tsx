import React from 'react'
import Background from '../components/Background';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/NavBar';
import styles from '../../assets/styles/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import GradientButtonM from '../components/GradientButtonM';
import CountdownDark from '../components/CountdownDark';
import GradientBox from '../components/GradientBox';

type EventDetailsProps = {
    navigation: StackNavigationProp<any>;
};

const EventDetails: React.FC<EventDetailsProps> = ({ navigation }) => {
    return (
        <Background colors={[]} style={style.container}>
            <SafeAreaView style={style.main}>
                <NavBar onPress={() => navigation.navigate('Home Screen')}/>
                <View style={style.box}>
                    <Text style={style.text}>
                        Casamento de Ana
                    </Text>
                    <CountdownDark 
                        colors={[]}
                    />
                    <View style={style.detailsContainer}>
                        <GradientBox 
                            colors={[]}
                            iconSource={require('../../assets/icons/aviso.png')}
                        />
                        <GradientBox
                            colors={[]}
                            iconSource={require('../../assets/icons/address.png')}
                        />
                        <GradientBox
                            colors={[]}
                            iconSource={require('../../assets/icons/date.png')}
                        />
                        <GradientBox
                            colors={[]}
                            iconSource={require('../../assets/icons/hour.png')}
                        />
                    </View>
                    <GradientButtonM // botão para gerar qrcode
                        colors={[]} 
                        onPress={() => navigation.navigate('Event Info')}
                        style={style.button}
                    >
                        <Text style={styles.gradientButtonMText}>
                            QR Code
                        </Text>
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
        margin: 20,
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
        alignSelf: 'center',
        top: -60,
    },

    button: {
        marginBottom: 30,
    },
    box: {
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 15,
        width: 360,
    },
    detailsContainer: {
        marginTop: 30,
        marginBottom: 20,
    }

});
export default EventDetails;