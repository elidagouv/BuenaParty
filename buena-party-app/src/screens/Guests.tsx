import React, { useEffect, useState } from "react"
import Background from "../components/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../components/NavBar";
import { Text, View, StyleSheet } from "react-native";
import styles from "../../assets/styles/styles";
import { StackNavigationProp } from "@react-navigation/stack";
import GuestsBox from "../components/GuestsBox";
import GradientButtonL from "../components/GradientButtonL";

type GuestsProps = {
    navigation: StackNavigationProp<any>;
};
  
const Guests: React.FC<GuestsProps> = ({ navigation }) => {
    
    /*const [guestData, setGuestData] = useState<
    { key: string; name: string; email: string; telephone: string }[]
  >([]);*/

  const guestData = [
    {
      key: "guest1",
      name: "Julia Caroline",
      email: "julia@example.com",
      phone: "123-456-7890",
    },
    {
      key: "guest2",
      name: "John Doe",
      email: "john@example.com",
      phone: "987-654-3210",
    },
    
  ];

    return (
        <Background colors={[]} style={style.container}>
            <SafeAreaView style={style.main}>
                <NavBar onPress={() => navigation.navigate('Manage Event')} />
                <Text style={style.text}>Convidados</Text>
                <GradientButtonL colors={[]} onPress={() => navigation.navigate('Invite Code')} style={style.buttons}>
                    <Text style={styles.gradientButtonLText}>Gerar código de convite</Text>
                </GradientButtonL>
                <View style={style.boxContainer}>
                    {guestData.map((guest) => (
                        <GuestsBox
                            key={guest.key}
                            data={[guest]}
                        />
                    ))}
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
        top: 80,
        alignItems:'center',
    },

    boxContainer: {
        top: 100,
    }
});
export default Guests;