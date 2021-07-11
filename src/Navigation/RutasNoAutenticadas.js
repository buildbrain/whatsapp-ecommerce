import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import{NavigationContainer}from "@react-navigation/native"

import Login from '../Screen/Account/Login'
import Register from '../Screen/Account/Register'
import RestaurarPassword from '../Screen/Account/RestaurarPassword'



const Stack = createStackNavigator();
 

export default function RutasNoAutenticadasStack() {
    return (
        
     <NavigationContainer>

<Stack.Navigator
initialRouteName="login"
screenOptions={{headerShown:false}}
>
<Stack.Screen component={Register} name="register"/>
<Stack.Screen component={Login} name="login"/>
<Stack.Screen component={RestaurarPassword} name="lostpassword"/>
</Stack.Navigator>



     </NavigationContainer>


    )
}
