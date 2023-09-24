import React from "react"
import Background from "../components/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../components/NavBar";
import { Text, View, StyleSheet, Image } from "react-native";
import GradientButtonS from "../components/GradientButtonS";
import BlackButton from "../components/BlackButton";
import styles from "../../assets/styles/styles";
import { StackNavigationProp } from "@react-navigation/stack";
import InviteCode from "../components/InviteCode";
import GradientButtonM from "../components/GradientButtonM";

type InviteCodeScreenProps = {
    navigation: StackNavigationProp<any>;
};

const InviteCodeScreen: React.FC<InviteCodeScreenProps> = ({ navigation }) => {
    return (
        <Background colors={[]} style={style.container}>
            <SafeAreaView style={style.main}>
                <NavBar onPress={() => navigation.navigate('Guests')}/>
                <Text style={style.text}>Gerar código de convite</Text>
                <View style={style.code}>
                    <InviteCode colors={[]}/>
                </View>
                <View style={style.smallButtons}>
                    <GradientButtonS onPress={() => navigation.navigate('Edit Event')} colors={[]} style={{ flexDirection: 'row'}}>
                        <Text style={[styles.gradientButtonSText, {width: '40%'}]}>
                            Copiar código
                            
                        </Text>
                        <Image  
                                style={styles.imageCode}
                                source={require('../../assets/icons/copy.png')}
                            />
                    </GradientButtonS>
                    <GradientButtonS onPress={() => navigation.navigate('Edit Event')} colors={[]} style={{ flexDirection: 'row'}}>
                        <Text style={[styles.gradientButtonSText, {width: '40%'}]}>
                            Enviar código
                            
                        </Text>
                        <Image  
                                style={styles.imageCode}
                                source={require('../../assets/icons/share.png')}
                            />
                    </GradientButtonS>
                </View>
                <View style={style.mediumButtons}>
                    <GradientButtonM colors={[]} onPress={[]}>
                        <Text style={styles.gradientButtonMText}>
                            Confirmar
                        </Text>
                    </GradientButtonM>
                    <BlackButton onPress={[]} colors={[]} style={styles.blackButton}>
                        <Text style={styles.blackButtonText}>Deletar Evento</Text>
                    </BlackButton>
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
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 40
    },
    code:{
        top: 100,
    },
    smallButtons: {
        top: 120,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    mediumButtons: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        top: 180,
    },
});
export default InviteCodeScreen;