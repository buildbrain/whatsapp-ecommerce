import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
// import { Icon, Avatar, Input } from "react-native-elements"
// import { cargarImagenesxAspecto } from '../../Utils/Utils'
export default function Profile() {
    return (
        <View>
            {/* <StatusBar backgroundColor='#128c7e' /> */}
            {/* <CabeceraBG /> */}
            {/* <HeaderAvatar /> */}
            <Text> PErf</Text>

        </View>
    )
}

// function HeaderAvatar() {
//     const cambiarFoto = async () => {

//         const resultado = await cargarImagenesxAspecto([1,1])
//         console.log(resultado);
//     }

//     return (<View style={styles.AvatarLine}>
//         <Avatar
//             style={styles.avatar}
//             source={require("../../../assets/avatar.jpg")}
//             size="large"
//             rounded
//             showAccessory={true}
//             onAccessoryPress={cambiarFoto}
//         />
//     </View>
//     )
// }

// function CabeceraBG() {
//     return (
//         <View>

//             <View style={styles.bg}>
//                 <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
//                     Nombre
//                 </Text>

//             </View>
//         </View>
//     )
// }
// const styles = StyleSheet.create({

//     bg: {
//         width: '100%',
//         height: 200,
//         borderBottomLeftRadius: 200,
//         borderBottomRightRadius: 200,
//         backgroundColor: '#128c7e',
//         justifyContent: 'center',
//         alignItems: 'center',

//     }, AvatarLine: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         marginTop: -70,

//     }, avatar: {
//         width: 80,
//         height: 80
//     }
// })