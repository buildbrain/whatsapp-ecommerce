import { firebaseapp } from "./firebase";

import * as firebase from "firebase"
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import "firebase/firestore";

const db = firebase.firestore(firebaseapp);




Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const validarsesion = (setvalidarsesion) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setvalidarsesion(true);
    } else {
      setvalidarsesion(false);
    }
  });
};

export const cerrarsesion = () => {
  firebase.auth().signOut()
}

export const validarPhone = (setphoneauth) => {
  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user.phoneNumber) {
  //     setphoneauth(true)
  //   }

  // })

  db.collection("Usuarios")
    .doc(ObtenerUsuario().uid)
    .onSnapshot((snapshot) => {
      setphoneauth(snapshot.exists);
    });

}

export const enviarconfirmacionphone = async (numero, recapcha) => {
  let verificationid = "";
  await firebase
    .auth()
    .currentUser.reauthenticateWithPhoneNumber(numero, recapcha.current)
    .then((response) => {
      verificationid = response.verificationId;
    })
    .catch((err) => console.log(err));

  return verificationid;
}

export const confirmarcodigo = async (verificationid, codigo) => {
  let resultado = false
  const credenciales = firebase.auth.PhoneAuthProvider.credential(

    verificationid, codigo
  );
  await firebase
    .auth()
    .currentUser.linkWithCredential(credenciales)
    .then((response) => (resultado = true))
    .catch((err) => {
      console.log(err);
    });

  return resultado;


}
export const obtenerToken = async () => {
  let token = ""
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;

  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  return token
};
export const ObtenerUsuario = () => {
  return firebase.auth().currentUser;
};


export const addRegistroEspecifico = async (coleccion, doc, data) => {

  const resultado = { error: "", statusreponse: false };

  await db
  .collection(coleccion)
  .doc(doc)
  .set(data, { merge: true })
  .then((response) => {
    resultado.statusreponse = true;

  })
  .catch((err) => {
    resultado.error = err;
    console.log(err);
  });

return resultado;
}