import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Background from '../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../assets/styles/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import NavBar2 from '../components/NavBar2';
import GradientButtonS from '../components/GradientButtonS';
import EventBox from '../components/EventBox';
import GradientText from '../components/GradientText';

type HomeScreen2Props = {
  navigation: StackNavigationProp<any>;
};

const HomeScreen2: React.FC<HomeScreen2Props> = ({ navigation }) => {

  return (
    <Background colors={[]}>
        <SafeAreaView style={style.main}>
            <NavBar2 style={style.main} onPress={() => navigation.navigate('My Account')} />
            <View style={style.container}>
                <View style={style.buttonContainer}>
                <GradientButtonS colors={[]} onPress={() => navigation.navigate('Create Event')}>
                    <Text style={styles.gradientButtonSText}>Criar evento</Text>
                </GradientButtonS>
                <GradientButtonS colors={[]} onPress={() => navigation.navigate('Create Event')}>
                    <Text style={styles.gradientButtonSText}>Entrar em evento</Text>
                </GradientButtonS>
                </View>
                <View style={style.eventContainer}>
                    <Text style={style.text}>Meus Eventos</Text>
                    <View style={style.eventBox}>
                        <EventBox colors={[]} onPress={() => navigation.navigate('Manage Event')} iconSource={require('../../assets/icons/settings.png')}>
                            <GradientText style={styles.eventBoxText}>Fim de ano!</GradientText>
                        </EventBox>
                    </View>
                    <Text style={style.text}>Eventos convidados</Text>
                    <View style={style.eventBox}>
                        <EventBox colors={[]} onPress={() => navigation.navigate('Event Details')} iconSource={require('../../assets/icons/more.png')}>
                            <GradientText style={styles.eventBoxText}>Casamento de Ana!</GradientText>
                        </EventBox>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </Background>
  );
};

const style = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    eventContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 34,
        fontWeight: 'bold',
        padding: 10,
    },
    container: {
        top: 150,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        position: 'absolute',
    },
    eventBox: {
        padding: 20,
    }
    
});

export default HomeScreen2;
