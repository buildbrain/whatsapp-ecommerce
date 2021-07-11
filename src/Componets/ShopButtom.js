import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native';

export default function ShopButtom() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container}
            onPress={() => { navigation.navigate("mitienda") }}
        >
            <Icon name="store" color="#fff" size={25} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#25d366',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 30,
        top: -20,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: 'white',
        padding: 10
    }
})
