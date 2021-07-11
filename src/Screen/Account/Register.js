import React,{useRef} from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'

import RegiterForm from '../../Componets/RegiterForm'
import Toast from 'react-native-easy-toast'


export default function Register() {
    const toastRef = useRef();

    return (

        <View style={styles.container}>
        <StatusBar backgroundColor="#128c73" />
        <Image
            style={styles.img}
            // source={{uri:'http:/hppge.cpom'}}
            source={require('../../../assets/logo.png')}

        />
        <Text style={
            styles.txtBaner
        }>Crear Cuenta
        </Text>
        <RegiterForm toastRef={toastRef}/>

        <Toast ref={toastRef} position='center' opacity={0.9} />
    </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#128c73'

    },
    img: {
        width: 106,
        height: 106,
        marginTop: 40,
        alignSelf: 'center'
    }
    , txtBaner: {
        // fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff',
        alignSelf: 'center'
    }
})
