import React, { useState } from 'react'
import Background from '../components/Background';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/NavBar';
import styles from '../../assets/styles/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import EventBoxDark from '../components/EventBoxDark';
import GradientButtonL from '../components/GradientButtonL';
import QRCode from 'react-native-qrcode-svg'; // biblioteca do qrcode
import { TextInput, Button } from 'react-native';

type EventInfoProps = {
    navigation: StackNavigationProp<any>;
    userId: string;
};

const EventInfo: React.FC<EventInfoProps> = ({ navigation, userId }) => {
    // Função para gerar o conteúdo do QR code com base no ID do usuário
    const generateQRContent = (userId: string) => {
        return `User ID: ${userId}`;
    };

    // Estado para armazenar o conteúdo do QR code
    const [qrContent, setQrContent] = useState(generateQRContent(userId));

    // Função para atualizar o conteúdo do QR code quando necessário
    const updateQRContent = () => {
    // Chame esta função para atualizar o conteúdo do QR code, se necessário
        setQrContent(generateQRContent(userId));
    };
      
    const [qrValue, setQrValue] = useState("");

    const generateQRCode = () => {
        // Defina o conteúdo do QR code como desejado, por exemplo, a rota 'Event Info'
        setQrValue('Event Info');
      };

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
                        <View style={style.containerQr}>
                            <QRCode
                            value={qrValue ? qrValue : 'NA'}
                            size={250}
                            color="black"
                            backgroundColor="white"
                            logoSize={30}
                            logoMargin={2}
                            logoBorderRadius={15}
                            logoBackgroundColor="yellow"
                            />
                        </View>
                        <View style={style.containerqr}>
                            <View style={{margin:5}}>
                            
                            </View>
                        </View>
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
    qrCodeBox: { // estilo qrcode
        
    },
    containerQr: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerqr: {
        flex: 1,
        justifyContent: 'center',
    }
    
});
export default EventInfo;