import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon, Input, Button } from 'react-native-elements'
import { isEmpty, size } from "lodash";
import { useNavigation } from '@react-navigation/native'
import * as firebase from "firebase"
import { validaremail } from '../Utils/Utils';
import Loading from './Loading';

export default function RegisterForm(props) {
    const { toastRef } = props;
    const navigate = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);



    // validarsesion()
    // const [state, setstate] = useState({email:"",password:""})

    const crearCuenta = () => {
        if (isEmpty(email) || isEmpty(password) || isEmpty(passwordRepeat)) {
            toastRef.current.show("Debe llenar todos los campos");
        } else if (!validaremail(email)) {
            toastRef.current.show("El email no es valido");


        } else if (password !== passwordRepeat) {
            toastRef.current.show("La contraseña no conciden");
        }

        else if (size(password) < 6) {

            toastRef.current.show("La contraseña deben al menos 6 caracteres");

        }

        else {

            setLoading(true)
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((response) => {
                    toastRef.current.show("Se ha creado correctamente");
                    setLoading(false)

                }).catch((err) => {
                    setLoading(false)
                    toastRef.current.show("Ocurrio un error");

                })



        }
    }
        return (
            <View style={styles.container}>

                <View style={{
                    borderBottomColor: '#24d366',
                    width: 100,
                    borderBottomWidth: 2

                }}>
                </View>

                <Input placeholder="Correo"
                    containerStyle={styles.input}

                    rightIcon={{
                        type: "material-community",
                        name: 'at',
                        color: '#128c7e',
                        onpress: () => setShow(!show)
                    }}

                    leftIcon={{
                        type: "material-community",
                        name: 'account-circle-outline',
                        color: '#128c7e',

                    }}
                    onChangeText={(text) => {
                        setEmail(text);
                    }}
                    value={email}
                />

                <Input
                    placeholder="Contraseña"
                    containerStyle={styles.input}

                    rightIcon={{
                        type: "material-community",
                        name: show ? "eye-off-outline" : "eye-outline",

                        color: '#128c7e',
                        onPress: () => setShow(!show)
                    }}
                    leftIcon={{
                        type: "material-community",
                        name: 'security',
                        color: '#128c7e',
                    }}

                    onChangeText={(text) => {
                        setPassword(text);
                    }}
                    secureTextEntry={!show}
                    value={password}
                />

                <Input
                    placeholder="Repetir Contraseña"
                    containerStyle={styles.input}

                    rightIcon={{
                        type: "material-community",
                        name: show ? "eye-off-outline" : "eye-outline",

                        color: '#128c7e',
                        onPress: () => setShow(!show)
                    }}
                    leftIcon={{
                        type: "material-community",
                        name: 'security',
                        color: '#128c7e',
                    }}

                    onChangeText={(text) => {
                        setPasswordRepeat(text);
                    }}
                    secureTextEntry={!show}
                    value={passwordRepeat}
                />



                <Button
                    title="Registrar Cuenta"
                    containerStyle={styles.btnEntrar}
                    buttonStyle={{ backgroundColor: "#25d366" }}
                    onPress={() => crearCuenta()}
                />

                <Button
                    title="Iniciar Sesión"
                    containerStyle={styles.btnEntrar}
                    buttonStyle={{ backgroundColor: "#128c7e" }}
                onPress={() => navigate.goBack()}
                />

                <Loading isVisible={loading} text="Favor espere" />
            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f6f8',
        flex: 1,
        marginTop: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',
        paddingTop: 20,

    }, input: {
        margin: 20,
        height: 50,
        width: '90%',


    }, txtCrear: {
        marginTop: 20
    }, cuentat: {
        color: '#129c7e',
        // fontFamily: 'Roboto',
        fontSize: 15,

    },
    btnlogin: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    }, btnEntrar: {
        backgroundColor: '#25d366',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 5

    }
})
