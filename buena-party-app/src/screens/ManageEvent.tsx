import React from "react"
import Background from "../components/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../components/NavBar";
import { Text, View, StyleSheet } from "react-native";
import GradientButtonL from "../components/GradientButtonL";
import BlackButton from "../components/BlackButton";
import styles from "../../assets/styles/styles";
import { StackNavigationProp } from "@react-navigation/stack";

type ManageEventProps = {
    navigation: StackNavigationProp<any>;
};

const ManageEvent: React.FC<ManageEventProps> = ({ navigation }) => {
    return (
        <Background colors={[]} style={style.container}>
            <SafeAreaView style={style.main}>
                <NavBar onPress={() => navigation.navigate('Home Screen 2')}/>
                <Text style={style.text}>Gerenciar Evento</Text>
                <View style={style.buttons}>
                    <GradientButtonL onPress={() => navigation.navigate('Guests')} colors={[]} style={style.convidados}>
                        <Text style={styles.gradientButtonLText}>Convidados</Text>
                    </GradientButtonL>
                    <GradientButtonL onPress={() => navigation.navigate('Edit Event')} colors={[]}>
                        <Text style={styles.gradientButtonLText}>Editar Informações</Text>
                    </GradientButtonL>
                    <BlackButton onPress={[]} colors={[]} style={style.blackButton}>
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
    convidados:{
        marginBottom:30
    },
    buttons: {
        top: 130,
        alignItems:'center',
        
        
        
    },
    blackButton:{
        
        top:130
    },
});
export default ManageEvent;