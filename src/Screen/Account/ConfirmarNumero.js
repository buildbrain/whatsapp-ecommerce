import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Image,Alert } from 'react-native'
import CodeInput from "react-native-code-input";
import Loading from '../../Componets/Loading';
import { useNavigation } from '@react-navigation/native'
import { confirmarcodigo, obtenerToken, ObtenerUsuario, addRegistroEspecifico } from '../../Utils/Acciones';
import "firebase/firestore"
import firebase from 'firebase';
import { firebaseapp } from '../../Utils/firebase';


const db = firebase.firestore(firebaseapp)


export default function ConfirmarNumero(props) {

    const { route } = props
    const { verificationId } = route.params

    const [loading, setloading] = useState(false)

    const confirmarCodigoSMS = async (code) => {
        setloading(true);

        const resultado = await confirmarcodigo(verificationId, code)
        // console.log(await obtenerToken());
        if(resultado){

            const token =await obtenerToken()

            const {
                uid,
                displayName,
                photoURL,
                email,
                phoneNumber,
              } = ObtenerUsuario();
    
              const registro = await addRegistroEspecifico("Usuarios", uid, {
                token,
                displayName,
                photoURL,
                email,
                phoneNumber,
                fechacreacion: new Date(),
              });
              setloading(false);

        }else{
            Alert.alert("Error", "Favor válidar el código introducido", [
                {
                  style: "default",
                  text: "Entendido",
                },
              ]);
              setloading(false);
            }

        

        
    }
    return (
        <View style={styles.container}>

            <Image
                style={styles.img}
                // source={{uri:'http:/hppge.cpom'}}
                source={require('../../../assets/logo.png')}

            />
            <Text style={styles.title}>Confirmar numero</Text>
            <Text style={styles.title2}>Favor revisa tu sms e introdusca los codigos de confirmacaion</Text>

            <CodeInput
                activeColor="#fff"
                inactiveColor="#fff"
                autoFocus={true}
                inputPosition="center"
                size={50}
                codeLength={6}
                containerStyle={{ marginTop: 30 }}
                codeInputStyle={{ borderWidth: 1.5 }}
                onFulfill={(code) => {
                    confirmarCodigoSMS(code);
                }}
            // secureTextEntry
            />
            <Loading isVisible={loading} text="Favor espere" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        , backgroundColor: '#128c7e',
        paddingHorizontal: 20,

    }, img: {
        width: 106, height: 106,
        alignSelf: 'center', marginTop: 20
    }, title: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white'
    },
    title2: {
        fontSize: 12,
        marginTop: 20, marginBottom: 1,
        textAlign: 'center',
        color: 'white'
    }
})