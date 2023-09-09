import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from '../components/Background';
import GradientButtonL from '../components/GradientButtonL';
import styles from '../../assets/styles/styles';
import LoadFonts from '../../assets/fonts/LoadFonts';
import GradientButtonM from '../components/GradientButtonM';
import GradientButtonS from '../components/GradientButtonS';
import BlackButton from '../components/BlackButton';
import FormBox from '../components/FormBox';
import { MaterialIcons } from '@expo/vector-icons';

type TestCompProps = {
    navigation: StackNavigationProp<any>;
};

const TestComp: React.FC<TestCompProps> = ({ navigation }) => {
    
    useEffect (() => {
        LoadFonts();
    }, []);

    return (
        <Background
            colors={[]}
        >
            <SafeAreaView>
                <GradientButtonL
                    colors={[]}
                    onPress={[]}
                >
                    <Text style={styles.gradientButtonLText}>Login</Text>
                </GradientButtonL>
                <GradientButtonM
                    colors={[]}
                    onPress={[]}
                >
                    <Text style={styles.gradientButtonMText}>Edit Profile</Text>
                </GradientButtonM>
                <GradientButtonS
                    colors={[]}
                    onPress={[]}
                >
                    <Text style={styles.gradientButtonSText}>Create Party</Text>
                </GradientButtonS>
                <BlackButton
                    colors={[]}
                    onPress={[]}
                >
                    <Text style={styles.blackButtonText}>Delete Party</Text>
                </BlackButton>
                <FormBox
                    colors={[]}
                    placeholder="Contato"
                    iconSource={require('../../assets/icons/address.png')}
                >
                </FormBox>
            </SafeAreaView>
        </Background>
    );
};

/*const styles = StyleSheet.create({
    logo: {
        width: 250,
        height: 250,
        marginBottom: 50
    },
    container: {
        alignItems: 'center',
    },
    buttonContainer: {
        justifyContent: 'space-between'
    },
    buttonText: {
        fontFamily: 'strong',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
});*/

export default TestComp;