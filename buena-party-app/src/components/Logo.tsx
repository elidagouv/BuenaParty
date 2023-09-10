import {View, Image,ImageStyle,StyleSheet} from 'react-native';
import React from 'react';




interface LogoProps {
   style?:ImageStyle;
}

const Logo: React.FC<LogoProps> = ({style}) => {
    return (
        <Image style={[style]} source={require('../../assets/icons/LogoGradiente.png')}/>
    );
};
const styles = StyleSheet.create({ 
    
})

export default Logo;