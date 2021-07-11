import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Tienda from '../Screen/Shop/Tienda'
import AddProduct from '../Screen/Shop/AddProduct'
import Contacto from '../Screen/Shop/Contacto'
import Detalle from '../Screen/Shop/Detalle'
import MensajeList from '../Screen/Shop/MensajeList'


const Stack = createStackNavigator();


export default function TiendaStack() {
    return (

        <Stack.Navigator>
            <Stack.Screen component={Tienda}
                name="tienda" options={{ headerShown: false }} />

            <Stack.Screen component={AddProduct}
                name="addProduct" options={{
                    title: "Agregar nuevo producto", headerStyle: {
                        backgroundColor: '#128c7e',
                        headerTintColor: 'white'
                    }

                }}
            />
            <Stack.Screen component={Contacto}
                name="contacto"
                options={{
                    title: "Mensajes", headerStyle: {
                        backgroundColor: '#128c7e',
                        headerTintColor: 'white'
                    }

                }}
            />
            <Stack.Screen component={Detalle}
                name="detalle" options={{ title: "", headerTransparent: true, headerTintColor: '#128c7e' }} />

            <Stack.Screen component={MensajeList}
                name="mensajeList"
                options={{
                    title: "Mensajes", headerStyle: {
                        backgroundColor: '#128c7e',
                        headerTintColor: 'white'
                    }
                }}
            />






        </Stack.Navigator>



    )
}
