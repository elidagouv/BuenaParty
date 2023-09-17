import React from 'react'
import { StyleSheet, View, TouchableOpacity, ViewStyle } from 'react-native'
import Images from '../components/Images';
import styles from '../../assets/styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
interface NavBarProps {
    style?: ViewStyle;
}

const NavBar2: React.FC<NavBarProps> = ({ style }) => {
    return (
        <View style={[styles.boxImage2, style]}>
            <SafeAreaView>
                <TouchableOpacity>
                    <Images
                        style={styles.profile}
                        iconSource={require('../../assets/icons/profile.png')}
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

export default NavBar2;