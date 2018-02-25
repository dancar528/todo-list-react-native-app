# TODO List React Native App

** En que consiste el proyecto **

El proyecto consta de una pantalla la cual renderiza una lista de tareas a realizar (TODO's).

- Cada elemento de la lista cuenta con las siguientes funcionalidades:
  - Contiene un checkbox para marcar la tarea como realizada o pendiente
  - Contiene la descripción de la tarea con la opción de editar su contenido al dar clic en el elemento de la lista
  - Un botón de eliminación del elemento seleccionado en la lista

- Contiene un contenedor a modo de encabezado el cuál contiene un campo de texto y un botón para agregar nuevos elementos a la lista. Además de un contador de los todo's pendientes por realizar

- Finalmente el footer contiene:
  - Un filtro para visualizar los elementos por su estado: Pendiente, Completo o ver todos
  - Un boton para borrar de la lista los elementos que se encuentran completos


** Ejecutar el proyecto **

Para ejecutar la aplicación seguir los siguentes pasos, luego de descargar el proyecto:

```sh
$ cd todo-list-react-native-app/
$ npm install
$ npm start
```

la forma más sencilla de correr la aplicación es:

* Ir a la tienda de aplicaciones del dispositivo que se posea (Play Store (Android) ó App Store (IOS))
* Descargar e instalar Expo
* Con Expo, escanear el código QR que nos generó el comando npm start al ejecutar la aplicación en la consola


Otra opción de correr el proyecto es con los comandos:

El siguiente comando requiere tener instalado un emulador Android, el cual se puede instalar con Android Studio
```sh
$ cd todo-list-react-native-app/
$ npm install
$ npm run ios  
```
ó

El siguiente comando requiere tener instalado un emulador IOS, el cual se puede instalar con XCode
```sh
$ cd todo-list-react-native-app/
$ npm install
$ npm run android  
```


** Arquitectura del Proyecto **

* React-native
* Redux


** Como se realizó la aplicación **

Esta aplicación se migró de react, la cual ya tenía incorporado redux, los cambios realizados incluyeron reemplazar los componentes web por componentes de react-native. Los componentes de react-native utilizados son: View, Text, TouchableOpacity, TextInput, Button, Image, CheckBox, el cual es un componente de terceros y requiere instalar el paquete react-native-check-box, TouchableHighlight y ScrollView
