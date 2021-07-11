import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import EditProduct from '../Screen/MyShop/EditProduct'
import MyShop from '../Screen/MyShop/MyShop'


const Stack = createStackNavigator();


export default function MyShopStack() {
    return (

        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#128c7e" },
            headerTintColor: 'white'

        }}>


            <Stack.Screen component={MyShop}
                name="mitienda" options={{
                    title: "Mi Tienda"
                }}
            />


            <Stack.Screen component={EditProduct}
                name="editProduct" options={{
                    title: "Editar Producto"
                }}
            />




        </Stack.Navigator>



    )
}
