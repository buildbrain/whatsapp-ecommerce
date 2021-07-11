import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Swing } from 'react-native-animated-spinkit'
import { Overlay } from 'react-native-elements'
export default function Loading(props) {

    const { isVisible, text } = props
    return (
        <Overlay isVisible={isVisible} overlayStyle={styles.overlay}>
        <View style={styles.view}>
          <Swing size={100} color="#128C7E" />
          {text && <Text style={styles.text}>{text}</Text>}
        </View>
        </Overlay>


    )
}
const styles = StyleSheet.create({
    overlay: {
        backgroundColor: "rgba(255,255,255, 1)",
        borderWidth: 1,
        borderColor: "#128C7E",
        borderRadius: 20,
        width: "90%",
        height: Dimensions.get("window").height / 2,
    },
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#128C7E",
        marginTop: 20,
        fontWeight: "bold",
        fontSize: 24,
        textTransform: "uppercase",
        textAlign: "center",
    },
})