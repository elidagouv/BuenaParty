import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    /*BOTÕES GRADIENTE*/

    gradientButtonL: {
        height: 70,
        width: 320,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    gradientButtonLText: {
        fontFamily: 'strong',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    gradientButtonM: {
        height: 70,
        width: 220,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,

    },
    gradientButtonMText: {
        fontFamily: 'strong',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    gradientButtonS: {
        height: 60,
        width: 130,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    gradientButtonSText: {
        fontFamily: 'strong',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

    /*BOTÕES PRETOS*/

    blackButtonBorder: {
        height: 70,
        width: 220,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    blackButtonText: {
        padding: 18,
        textAlign: 'center',
        flex: 0,
        color: '#A12577',
        width: 215,
        height: 65,
        borderRadius: 13,
        backgroundColor: '#000000',
        fontFamily: 'strong',
        fontSize: 24,
        fontWeight: 'bold',
    },
    blackButton: {
        height: 70,
        width: 220,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    /*FORMS*/

    formBoxBorder: {
        height: 70,
        width: 320,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    formBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: 65,
        width: 315,
        borderRadius: 15,
        margin: 10,

    },

    formBoxTextInput: {
        color: '#D3D3D3',
        width: '75%',
        fontSize: 22,
        fontFamily: 'strong'
    },

    imageFormBox: {
        height: 30,
        width: 30,
        resizeMode: 'stretch',
        alignItems: 'center',
        margin: 15,
    },

    //NAV BAR

    boxImage: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative'

    },
    back: {
        right: 120,
        top:30
    },
    LogoBranca: {
        width: 90,
        height: 90,
        bottom:43 

    },

});

export default styles;