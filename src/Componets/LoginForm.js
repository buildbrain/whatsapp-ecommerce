import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon, Input, Button, Divider } from 'react-native-elements'
import { isEmpty } from "lodash";
import { validarsesion,cerrarsesion } from '../Utils/Acciones';
import { useNavigation } from '@react-navigation/native'
import * as firebase from "firebase";

import { validaremail } from '../Utils/Utils';
import Loading from '../Componets/Loading'

export default function LoginForm(props) {
    const { toastRef } = props;
    const navigate = useNavigation();
    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    // const [state, setstate] = useState({email:"",password:""})

    const iniciarsesion = () => {
        if (isEmpty(email) || isEmpty(password)) {
            toastRef.current.show("Debe ingresar los valores de email y password");
          } else if (!validaremail(email)) {
            toastRef.current.show("Ingrese un correo válido");
          }
        else {
            setLoading(true);
      
            firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then((response) => {
                setLoading(false);
                toastRef.current.show("Ha iniciado sesión exitosamente");
                // console.log(firebase.auth().currentUser);
              })
              .catch((errr) => {
                setloading(false);
                toastRef.current.show(
                  "Ha ocurrido un error al intentar iniciar sesión"
                );
              });
          }
    }
    // cerrarsesion()
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
                    onPress: () => alert('hola')
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
                secureTextEntry={show}
                value={password}
            />



            <Button
                title="ENTRAR"
                containerStyle={styles.btnEntrar}
                buttonStyle={{ backgroundColor: "#25d366" }}
                onPress={() => iniciarsesion()}
            />
            <Text style={styles.txtCrear}>¿No tienes cuenta? <Text style={styles.cuentat} onPress={() => navigate.navigate("register")}>Crear Cuenta </Text> </Text>

            <Divider
                style={{ backgroundColor: '#128c7e', height: 1, width: '90%', marginTop: 20 }}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20, color: '#128c7e' }}>o</Text>
            <View style={styles.btnlogin}>
                <TouchableOpacity style={styles.btnsocial}>
                    <Icon
                        size={24}
                        type="material-community"
                        name="google"
                        color="white"
                        backgroundColor="trasparent"

                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsocial}>
                    <Icon
                        size={24}
                        type="material-community"
                        name="facebook"
                        color="white"
                        backgroundColor="trasparent"

                    />
                </TouchableOpacity>
            </View>

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
    }, btnsocial: {
        backgroundColor: '#25d366',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 5

    }
})
