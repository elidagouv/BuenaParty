import React, { ReactNode, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
    View,
    TextInput,
    Image,
    TextStyle,
    ViewStyle
} from 'react-native';
import styles from '../../assets/styles/styles';


interface FormBoxProps {
    colors: string[];
    style?: {
        formBox?: ViewStyle;
        formBoxTextInput?: TextStyle;
        imageFormBox?: ViewStyle;
        formBoxBorder?: ViewStyle;
    };
    placeholder: string;
    children?: ReactNode;
    iconSource: { uri: string } | number;
}

const FormBox: React.FC<FormBoxProps> = ({ colors, style, placeholder, children, iconSource }) => {

    const [text, setText] = useState('');

    return (
        
        <LinearGradient 
            colors={["#A12577", "#42286C"]}
            style={[styles.formBoxBorder]}
        >
            {children}
            <View style={styles.formBox}>
                <Image  
                    style={styles.imageFormBox}
                    source={iconSource}
                />
                <TextInput 
                    style={styles.formBoxTextInput}
                    placeholder={placeholder}
                    onChangeText={(newText) => setText(newText)}
                />
            </View>
        </LinearGradient>
    );
};

export default FormBox;