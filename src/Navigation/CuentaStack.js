import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import ConfirmarNumero from '../Screen/Account/ConfirmarNumero'
// import RestaurarPassword from '../Screen/Account/RestaurarPassword'
import SendConfirmacion from '../Screen/Account/SendConfirmacion'

const Stack = createStackNavigator();


export default function CuentaStack() {
    return (
<NavigationContainer>

        <Stack.Navigator>


            <Stack.Screen component={SendConfirmacion}
                name="enviar-confirmacion" options={{
                    title: "Confirma tu numero",
                    headerStyle: { backgroundColor: "#128c7e" },
                    headerTintColor: 'white'
                }}
            />

            <Stack.Screen component={ConfirmarNumero}
                name="confirmar-movil" options={{
                    title: "Confirma Numero",
                    headerStyle: { backgroundColor: "#128c7e" },
                    headerTintColor: 'white'

                }}

            />






        </Stack.Navigator>


        </NavigationContainer>

    )
}
