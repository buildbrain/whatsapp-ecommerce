import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Profile from '../Screen/Profile/Profile'


const Stack = createStackNavigator();


export default function PerfilStack() {
    return (

        <Stack.Navigator>



            <Stack.Screen component={Profile}
                name="perfil" 
                options={{   headerShown:false  }}
            />



        </Stack.Navigator>



    )
}
