import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

export const validaremail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };

  // ..funcion para abrir la galeria de la app
  // expo install expo-image-picker
// 

  export const cargarImagenesxAspecto = async (array) => {
    let imgResponse = { status: false, imagen: "" };
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  
    if (status === "denied") {
      alert("Usted debe permitir el accesos para cargar las imagenes");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: array,
      });
  
      if (!result.cancelled) {
        imgResponse = { status: true, imagen: result.uri };
      }
    }
    return imgResponse;
  };

