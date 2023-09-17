import React from 'react'
import { StyleSheet, View, TouchableOpacity, ViewStyle } from 'react-native'
import Images from '../components/Images';
import styles from '../../assets/styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
interface NavBarProps {
    style?: ViewStyle;
}

const NavBar: React.FC<NavBarProps> = ({ style }) => {
    return (
        <View style={[styles.boxImage, style]}>
            <SafeAreaView>
                <TouchableOpacity>
                    <Images
                        style={styles.back}
                        iconSource={require('../../assets/icons/back.png')}
                    />
                </TouchableOpacity>
                <Images
                    style={styles.LogoBranca}
                    iconSource={require('../../assets/icons/LogoBranco.png')}
                />
            </SafeAreaView>
        </View>

    )
}

export default NavBar;