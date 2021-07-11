import React, { useState, useRef } from 'react'
import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import CountryPicker from 'react-native-country-picker-modal'
import { useNavigation } from '@react-navigation/native'
import { isEmpty } from "lodash";
import {
    enviarconfirmacionphone,
    // registerForPushNotificationsAsync,
} from "../../Utils/Acciones";

import FirebaseRecapcha from '../../Utils/FirebaseRecapcha'
import { Alert } from 'react-native'

export default function SendConfirmacion() {


    const [conuntry, setconuntry] = useState("HN")
    const [callingCode, setcallingCode] = useState("504")
    const [phone, setphone] = useState("");
    const recaptchaVerifier = useRef();
    const inputphone = useRef();

    const navigation = useNavigation();

 
    const enviarconfirmacion = async () => {
        if (!isEmpty(phone)) {
          const numero = `+${callingCode}${phone}`;
          const verificationId = await enviarconfirmacionphone(
            numero,
            recaptchaVerifier
          );
          if (!isEmpty(verificationId)) {
            navigation.navigate("confirmar-movil", { verificationId });
        } else {
            Alert.alert(
              "Verificación",
              "Favor introduzca un número de teléfono válido",
              [
                {
                  style: "cancel",
                  text: "Entendido",
                  onPress: () => {
                            inputphone.current.clear();
                            inputphone.current.focus();

                        }
                    }]
                )

            }
        }
    }


    return (

        <View style={styles.container}>

            <Image
                style={styles.imglogo}
                source={require("../../../assets/logo.png")}
            />
            <View style={styles.panel}>


                <View
                    style={{
                        borderBottomColor: '#25d366',
                        borderBottomWidth: 2,
                        width: 100
                    }}
                />
                <View style={styles.panelInterno}>
                    <Icon
                        name="whatsapp"
                        type="material-community"
                        size={100}
                        color="#25D366"
                    />
                    <Text style={styles.title}>Ingresa numero de Whatsapp</Text>

                    <View style={styles.viewTelefon}>
                        <CountryPicker
                            withFlag
                            withCallingCode
                            withFilter
                            withCallingCodeButton

                            countryCode={conuntry}
                            onSelect={(Country) => {
                                setconuntry(Country);
                                setcallingCode(...Country.callingCode)
                            }}
                        />
                        <Text style={{ color: '#fff' }}> | </Text>
                        <TextInput
                            placeholder="Numero de Telefono"
                            style={styles.input}
                            onChangeText={(text) => setphone(text)}
                            value={phone}
                            ref={inputphone}

                        />
                    </View>

                    <Button
                        title="Confirmar Número"
                        buttonStyle={{ backgroundColor: "#25d366", marginHorizontal: 20 }}
                        containerStyle={{ marginVertical: 20 }}

                        onPress={() => {
                            enviarconfirmacion()
                        }}
                    />
                </View>

            </View>

            <FirebaseRecapcha referencia={recaptchaVerifier} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#128c7e',

    }, imglogo: {
        width: 106,
        height: 106,
        alignSelf: 'center'
        , marginVertical: 40
    }, panel: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        paddingTop: 20,
        borderTopRightRadius: 50,
        alignItems: 'center'
    }, panelInterno: {
        flex: 1,
        justifyContent: "space-around",
        marginHorizontal: 20
    }, title: {
        fontSize: 16,
        textAlign: 'center',
        color: '#25d366',
        fontWeight: 'bold'
    }, viewTelefon: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        height: 50,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        backgroundColor: "rgba(37,211,106,0.6)",

    }, input: {
        width: '80%',
        height: 50
        , marginLeft: 5
    }
})