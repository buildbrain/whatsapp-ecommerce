import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,LogBox } from 'react-native';
import RutasAutenticadas from './src/Navigation/RutasAutenticadas'
import RutasNoAutenticadas from './src/Navigation/RutasNoAutenticadas'
import SwitchNavigator from './src/Navigation/SwitchNavigator';
import { validarsesion } from './src/Utils/Acciones';
import Loading from './src/Componets/Loading';
import {encode,decode}from "base-64"

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

LogBox.ignoreLogs([
  "Animated",
  "Setting a timer",
  // "Avatar.onAccessoryPress",
  // "Avatar.showAccessory",
]);
export default function App() {
  const [user, setUser] = useState(false)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true);
    validarsesion(setUser)
    setLoading(false);
  }, [])

  if(loading){
    return<Loading  isVisible={loading} text="cargando..."/>
  }

  return user?  <SwitchNavigator />:<RutasNoAutenticadas/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
