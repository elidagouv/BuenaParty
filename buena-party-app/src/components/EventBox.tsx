import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  View,
  Image,
  ViewStyle,
  StyleSheet,
  Text
} from 'react-native';
import styles from '../../assets/styles/styles';
import GradientText from './GradientText';
import Images from './Images';

interface EventBoxProps {
  colors: string[];
  style?: ViewStyle;
  children?: ReactNode;
}

const EventBox: React.FC<EventBoxProps> = ({ colors, style, children }) => {
  return (
    <LinearGradient
        colors={["#A12577", "#42286C"]}
        style={styles.eventBoxBorder}
    >
        <View style={styles.eventBox}>
            <View style={styles.eventBoxTitle}>
                <GradientText style={styles.eventBoxText}>
                    Fim de ano!
                </GradientText>
                <Images
                    style={styles.iconEvent}   
                    iconSource={require('../../assets/icons/settings.png')} 
                />
            </View>
            
        </View>
    </LinearGradient>
  );
};

export default EventBox;
