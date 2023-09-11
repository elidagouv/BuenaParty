import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../assets/styles/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import NavBar2 from '../components/NavBar2';
import GradientButtonS from '../components/GradientButtonS';
import EventBox from '../components/EventBox';

type HomeScreen2Props = {
  navigation: StackNavigationProp<any>;
};

const HomeScreen2: React.FC<HomeScreen2Props> = ({ navigation }) => {

  return (
    <Background colors={[]}>
            <SafeAreaView style={style.main}>
                <NavBar2 style={style.main} onPress={() => navigation.navigate('My Account')} />
                <View>
                    <View style={style.container}>
                    <GradientButtonS colors={[]} onPress={() => navigation.navigate('Create Event')}>
                        <Text style={styles.gradientButtonSText}>Criar evento</Text>
                    </GradientButtonS>
                    <GradientButtonS colors={[]} onPress={() => navigation.navigate('Create Event')}>
                        <Text style={styles.gradientButtonSText}>Entrar em evento</Text>
                    </GradientButtonS>
                    </View>
                    <View style={style.eventBox}>
                        <EventBox colors={[]} />
                    </View>
                </View>
            </SafeAreaView>
        </Background>
  );
};

const style = StyleSheet.create({
    
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 34,
        fontWeight: 'bold'
    },
    container: {
        flexDirection: 'row',
        top: 180,
        width: '100%',
        justifyContent: 'space-evenly',
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        position: 'absolute',
    },
    eventBox: {
        margin: 0,
    }
    
});

export default HomeScreen2;
