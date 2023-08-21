# **🪄🏗️Sistema de  Administración de Bodegas🏗️🪄**

![](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoBodegas/blob/main/imgs/proyecto2%23.png?raw=true)

**¡Bienvenidos al proyecto de Sistema de  Administración de Bodegas! En este proyecto, aprenderemos a crear y gestionar una base de datos utilizando MongoDB, así como construir una API robusta con endpoints para manipular los datos almacenados en dicha base de datos. Además, implementaremos la creación y verificación de usuarios mediante tokens JWT para garantizar la seguridad en el acceso a la API.**

[TOC]

## **⚙️🚀 Diagrama Proyecto ⚙️🚀**

![](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoBodegas/blob/main/imgs/BodegasMONGO.png?raw=true)

## 🧑‍💻🆙Estructura de la Base de Datos🆙🧑‍💻

### 🤸Colección Users🤸

Esta colección almacena información de usuarios.

  <details>
    <summary> <h3> Valores de la Colección Users </h3></summary> 
    - `_id`: Identificador único para el usuario. <br>
    - `nombre`: Nombre del usuario.<br>
    - `email`: Dirección de correo electrónico del usuario.<br>
    - `email_verified_at`: Fecha en que se verificó el correo electrónico.<br>
    - `estado`: Estado del usuario.<br>
    - `created_by`: ID del usuario que creó este usuario.<br>
    - `update_by`: ID del usuario que actualizó por última vez este usuario.<br>
    - `foto`: Foto del usuario.<br>
    - `password`: Contraseña del usuario.<br>
    - `created_at`: Fecha en que se creó el usuario.<br>
    - `updated_at`: Fecha en que se actualizó por última vez el usuario.<br>
    - `deleted_at`: Fecha en que se eliminó el usuario.<br>
 </details>

### 🧧Colección Productos🧧

Esta colección almacena información de productos.

<details> 
    <summary><h3>Valores de la Colección Productos</h3></summary>
    - `_id`: Identificador único para el producto. <br>
    - `nombre`: Nombre del producto.<br>
    - `descripcion`: Descripción del producto.<br>
    - `estado`: Estado del producto.<br>
    - `created_by`: ID del usuario que creó este producto.<br>
    - `update_by`: ID del usuario que actualizó por última vez este producto.<br>
    - `created_at`: Fecha en que se creó el producto.<br>
    - `updated_at`: Fecha en que se actualizó por última vez el producto.<br>
    - `deleted_at`: Fecha en que se eliminó el producto.<br>
</details>

### 🏗️Colección Inventarios🏗️

Esta colección almacena información de inventarios.

<details> 
    <summary><h3>Valores de la Colección Inventarios</h3></summary>
    - `_id`: Identificador único para el inventario. <br>
    - `id_bodega`: ID de la bodega asociada a este inventario.<br>
    - `id_producto`: ID del producto asociado a este inventario.<br>
    - `cantidad`: Cantidad del producto en el inventario.<br>
    - `created_by`: ID del usuario que creó este inventario.<br>
    - `update_by`: ID del usuario que actualizó por última vez este inventario.<br>
    - `created_at`: Fecha en que se creó el inventario.<br>
    - `updated_at`: Fecha en que se actualizó por última vez el inventario.<br>
    - `deleted_at`: Fecha en que se eliminó el inventario.<br>
</details>

### 🧳Colección Bodegas🧳

Esta colección almacena información de las bodegas.

<details> 
    <summary><h3>Valores de la Colección Bodegas</h3></summary>
    - `_id`: Identificador único para la bodega. <br>
    - `nombre`: Nombre de la bodega.<br>
    - `id_responsable`: ID de la persona responsable de la bodega.<br>
    - `estado`: Estado de la bodega.<br>
    - `created_by`: ID del usuario que creó esta bodega.<br>
    - `update_by`: ID del usuario que actualizó por última vez esta bodega.<br>
    - `created_at`: Fecha en que se creó la bodega.<br>
    - `updated_at`: Fecha en que se actualizó por última vez la bodega.<br>
    - `deleted_at`: Fecha en que se eliminó la bodega.<br>
</details>

### 🧾Colección Historiales🧾

Esta colección almacena registros históricos de movimientos entre bodegas.

<details> 
    <summary><h3>Valores de la Colección Historiales</h3></summary>
    - `_id`: Identificador único para el registro histórico. <br>
    - `cantidad`: Cantidad de productos movidos.<br>
    - `id_bodega_origen`: ID de la bodega de origen.<br>
    - `id_bodega_destino`: ID de la bodega de destino.<br>
    - `id_inventario`: ID del inventario asociado a este registro histórico.<br>
    - `created_by`: ID del usuario que creó este registro histórico.<br>
    - `update_by`: ID del usuario que actualizó por última vez este registro histórico.<br>
    - `created_at`: Fecha en que se creó el registro histórico.<br>
    - `updated_at`: Fecha en que se actualizó por última vez el registro histórico.<br>
    - `deleted_at`: Fecha en que se eliminó el registro histórico.<br>
</details>

### 🚧Colección Usuarios_Api🚧

Esta colección almacena información de usuarios de la API.

<details> 
    <summary><h3>Valores de la Colección Usuarios_Api</h3></summary>
    - `_id`: Identificador único para el usuario de la API. <br>
    - `nombre`: Nombre del usuario de la API.<br>
    - `email`: Dirección de correo electrónico del usuario de la API.<br>
    - `password`: Contraseña del usuario de la API.<br>
    - `codigo_Rol`: Código de rol asignado al usuario de la API.<br>
</details>

### 🕵️Colección Roles_Api🕵️

Esta colección almacena información de roles de la API.

<details> 
    <summary><h3>Valores de la Colección Roles_Api</h3></summary>
    - `_id`: Código del rol.<br>
    - `rol`: Nombre del rol.<br>
    - `acceso`: Descripción del acceso del rol.<br>
</details>

### 🎫Colección Tokens_Api🎫

Esta colección almacena tokens de la API asociados a usuarios de la API.

<details> 
    <summary><h3>Valores de la Colección Tokens_Api</h3></summary>
    - `_id`: Identificador único para el token. <br>
    - `id_usuario_Api`: ID del usuario de la API asociado.<br>
    - `token`: Token de la API.<br>
</details>

## 🚨⚙️Requisitos⚙️🚨

Antes de ejecutar el código, asegúrate:

- tener instalada la base de datos MongoDB en tu sistema.
- Tener instalado La extensión de MongoDB de VScode o la terminal de MongoDB

## 💥⚙️**Pasos para usar la extensión de MongoDB en Visual Studio Code⚙️**💥

(presiona la flecha para desplegar la información)

  <details>
    <summary> <h3> Paso 1: ⚓Instalación de la extensión⚓ </h3></summary> 
   <h4>  1. Abre Visual Studio Code <br>
    2. Haz clic en el ícono de "Extensiones" en la barra lateral izquierda (o presiona `Ctrl+Shift+X` en Windows/Linux o `Cmd+Shift+X` en macOS). <br>
    3. En el campo de búsqueda, escribe "MongoDB" y selecciona la extensión "MongoDB for VSCode" creada por Microsoft. <br>
    4. Haz clic en "Instalar" para instalar la extensión. <br></h4>
 </details>

  <details>
    <summary> <h3> Paso 2: 🛫Conexión a la base de datos MongoDB🛫 </h3></summary> 
   <h4> 
       1. Abre un proyecto en Visual Studio Code o crea uno nuevo. <br>
       2. En la barra lateral izquierda, selecciona la sección "MONGODB". <br>
       3. Haz clic en el ícono "Add Connection" (Agregar conexión) en la parte superior de la sección. <br>
       4. Selecciona o ingresa la cadena de conexión de tu base de datos MongoDB. Puedes usar una conexión local (`mongodb://localhost:27017/nombre_base_datos`) o una conexión remota proporcionada por un proveedor de servicios de MongoDB. <br>
       5. Si es necesario, proporciona un nombre descriptivo para la conexión. <br>
       6. Haz click en "Connect" (Conectar). <br></h4>
 </details>

 <details>
    <summary> <h3> Paso 3: 🛰️Explorando y administrando la base de datos🛰️ </h3></summary> 
   <h4> 
       1. Una vez conectado, verás la estructura de la base de datos en la sección "MONGODB" de Visual Studio 
       Code.<br>
       2. Expande la conexión para ver las bases de datos disponibles.<br>
       3. Expande una base de datos para ver sus colecciones.<br>
       4. Expande una colección para ver los documentos almacenados en ella.<br>
       5. Puedes hacer clic derecho en una base de datos o colección para realizar acciones como crear, 
       eliminar y modificar documentos.<br>
       6. Utiliza las diferentes opciones disponibles en el menú contextual para administrar tu base de datos 
       MongoDB de manera eficiente.<br></h4>
 </details>

## **🍁🎉Instalación🎉**🍁

1. Clona este repositorio en tu máquina: `git clone https://github.com/JuanJoseDuranRinconCAMPUS2/MongoBodegas`

2. Accede al directorio del proyecto: `cd MongoBodegas`

3. Accede a la carpeta de backend: `cd backend`

4. Instala las dependencias: (ejecute el comando `npm i` para instalar las dependencias del proyecto)

     <details>
       <summary> <h3> 🏗️ Dependencias Usadas🏗️ </h3></summary> 
         - "class-transformer": "0.5.1" <br>
         - "class-validator": "0.14.0" <br>
         - "dotenv": "16.3.1" <br>
         - "express": "4.18.2" <br>
         - "express-rate-limit": "6.9.0" <br>
         - "jose": "4.14.4" <br>
         - "mongodb": "5.7.0" <br>
         - "nodemon": "3.0.1" <br>
         - "reflect-metadata": "0.1.13" <br>
         - "typescript": "5.1.6" <br>
    </details>

5. Accede al archivo de "bodegas.mongodb" que esta dentro de la carpeta *db* ubicada en la carpeta **backend**: `bodegas.mongodb`

6. inicia el archivo y monta la base de datos en tu servidor (ejecuta cada una de los comandos de mongo de manera Descendente).

7. Para facilitar las consultas ejecuta de manera Descendente el archivo "data.mongodb" que esta dentro de la carpeta **db** ubicada en la carpeta **backend**: `data.mongodb` en ella encontraras data para alimentar la base de datos (!Importante: En este archivo esta la data con los roles y usuarios por defecto, **si no los ejecutas no podrás usar la api**!)

8. Recuerda para ejecutar ambos archivos debes tener la extensión de mongo en tu Visual Studio y además haberte conectado

## **🏁🎆Configuración**🎆🏁

1. Cambia el nombre del archivo `.envexample` por  `.env`

2. Dentro del archivo `.env`, define las siguientes variables de entorno:

   - MY_CONFIG={"hostname": "127.19.8.7", "port":5010}
   - Atlas_User=""
   - Atlas_Password=""
   - Atlas_DB="db_Bodegas"
   - Jwt_Primate_Key="Nywx e tiqimr erxi e hiwtq gere hkviigx hiwx erh fiexmrkmrk hievm ehirxmsrk wmxiw xlmrk"

   Reemplaza `Atlas_User`, `Atlas_Password`, y con los datos de tu base de datos de Mongo.

## **🪙⚜️Uso⚜️🪙**

1. Inicia el servidor:
2. `npm run dev`
3. Accede a `http://127.19.8.7:5010` para interactuar con la API.

## **🎫🔩Puerto de la Api**🔩🎫

## `http://127.19.8.7:5010`

## **💮🪙Rutas de la API🪙💮**

### **‼️Importante‼️**

Antes de entrar a la api a los métodos de la api, debes crear un usuario.

## ✨End Points de Manejo de  usuarios✨

## 🧑‍💻/CrearUsuario

**`POST /CrearUsuario`**: El EndPoint `/CrearUsuario` Se encarga de la creación de usuarios, en el cual podras crear usuarios que usaran la API en cuestion.

**Aclaraciones y Validaciones**

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    nombre: Cadena de caracteres (string) <br>
    email: Cadena de caracteres (string) <br>
    password: Cadena de caracteres (string)
    codigo_Rol: Cadena de caracteres expecificos (CsWscIpEhqmr1987|CsWscYrYwyvemws22501) <br>
</details>

-  El valor de "codigo_Rol": Debe ser CsWscIpEhqmr1987 o CsWscYrYwyvemws22501. Ya que estos son los codigos para asignar roles. "CsWscIpEhqmr1987 " es el codigo para el rol: "Admin" y "CsWscYrYwyvemws22501" es el codigo para el rol: "usuario"

**Ruta Especifica**

```html
http://127.19.8.3:5010/CrearUsuario
```

  <details>
    <summary> <h3> Data de entrada </h3></summary> 
  	```json
    {
      "nombre_Usuario": "pedro3",
      "correo_Usuario": "pedro3@gmail.com",
      "contraseña_Usuario": "123",
      "codeRol_Usuario": "CsWscIpEhqmr1987"
    }
    ```
 </details>

  <details>
    <summary> <h3> Data de Salida </h3></summary> 
  	```json
        {
          "status": 200,
          "message": "El usuario: 'pedro3', con el rol de: 'Admin', se ha creado correctamente"
        }
    ```
 </details>

Al ejecutar este endpoint se creara un usuario en la base de datos, recuerda tener presente tu usuario y contraseña para el manejo posterior de la api

## 🧑‍💻/IngresarUsuario

**`GET /IngresarUsuario`**: El EndPoint `/IngresarUsuario` Se encarga de suministrar la key especifica que solicita el usuario para un endpoint especifico. Es importante tener en cuenta que este endpoint solo funciona si ya hay usuarios creados con anterioridad.

**Aclaraciones y Validaciones**

  <details>
    <summary> <h3> Tipo De data </h3></summary>
  nombre_Usuario" : Cadena de caracteres (string)<br>
  contraseña_Usuario" : Cadena de caracteres (string)"<br>
  endPoint_Solicitado : Cadena de caracteres (string) (Debe ser un endpoint en la API)<br>
</details>

-  El valor de "endPoint_Solicitado": Debe ser el nombre de los endpoints de esta api:

**🧾Lista de Endpoint🧾**

```
[
    "ListarBodegas", 
    "PostBodegas",
    "PostProductoInventario",
    "PostInventario",
    "TransladoProductos",
    "GetProductosXTotal"
]
```

**Este sistema API proporciona acceso a diversos endpoints que permiten interactuar con los recursos del sistema. Para acceder a estos endpoints y garantizar la seguridad de la información, se utiliza un sistema de autenticación basado en tokens.**

## 🎯Autenticación y Acceso🎯

Al ejecutar el endpoint de autenticación, recibirás una clave de acceso (token) que te permitirá acceder a los diferentes endpoints del sistema. Es importante tener en cuenta lo siguiente:

- La clave de acceso es única para cada usuario y sesión.
- Cada token está asociado a un endpoint específico seleccionado por el usuario.
- Los métodos POST en los endpoints solo están disponibles para los usuarios con el rol de administrador.
- Cada token tiene una duración de media hora.

## Uso del Token

Para acceder a los endpoints protegidos, debes incluir el token de acceso en la cabecera (header) de tus solicitudes HTTP. Utiliza el parámetro "Authorization" y agrega el token.

El token te proporcionará acceso autorizado al endpoint que seleccionaste, permitiéndote realizar operaciones y obtener información relevante. Asegúrate de mantener tu token confidencial y no compartirlo con terceros.

**Ruta Especifica**

```html
http://127.19.8.3:5010/IngresarUsuario
```

  <details>
    <summary> <h3> Data de entrada </h3></summary> 
  	```json
    {
      "nombre_Usuario" : "FredCreations",
      "contraseña_Usuario" : "Monochrome1dcg3",
      "endPoint_Solicitado" : "TransladoProductos"
    }
    ```
 </details>

  <details>
    <summary> <h3> Data de Salida </h3></summary> 
  	```json
       {  
      "status": 201,
       "message": 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJGcmVkQ3JlYXRpb25zIiwicGFzc3dvcmQiOiJNb25vY2hyb21lMWRjZzMiLCJlbmRQb2ludCI6IlRyYW5zbGFkb1Byb2R1Y3RvcyIsInJvbCI6IkFkbWluIiwiaWF0IjoxNjkyNjMzMDk4LCJleHAiOjE2OTI2MzQ4OTh9.mAHmqnZRnxy8mfo1uV2CHstvjjUo_cM5ohTyg5EGBl0",
      "instructions": "En el header de la peticion pon el header 'Authorization' y luego pon esta llave como valor"
    	}
    ```
 </details>

## ✨End Points de Manejo de  la Base de Datos✨

## **💥Para usar todos estos endpoint debes haber creado tu usuario y solicitar el Token con los endpoints de arriba.**💥

## 🏗️/GetBodegas

**`GET /GetBodegas`**: El EndPoint `/GetBodegas` Se encarga de listar todas las bodegas ordenadas alfabéticamente

**Aclaraciones y Validaciones**

- Este endpoint no acepta data de entrada

**Ruta Especifica**

```html
http://127.19.8.3:5010/GetBodegas
```

  <details>
    <summary> <h3> Data de Salida </h3></summary> 
  	```json
       [
      {
        "_id": 50,
        "nombre": "A Bodega",
        "id_responsable": 11,
        "estado": 1,
        "created_by": null,
        "update_by": null,
        "created_at": "2023-05-25T01:02:57.000Z",
        "updated_at": "2023-05-25T01:02:57.000Z",
        "deleted_at": null
      },
      {
        "_id": 51,
        "nombre": "A Bodega Bien Bonita",
        "id_responsable": 22,
        "estado": 1,
        "created_by": 2,
        "update_by": null,
        "created_at": "2023-08-14T01:07:10.169Z",
        "updated_at": null,
        "deleted_at": null
      },
      {
        "_id": 41,
        "nombre": "Bodega 132",
        "id_responsable": 11,
        "estado": 1,
        "created_by": 11,
        "update_by": null,
        "created_at": "2022-07-01T20:29:51.000Z",
        "updated_at": "2022-07-01T20:29:51.000Z",
        "deleted_at": null
      },
      {
        "_id": 44,
        "nombre": "Bodega 59",
        "id_responsable": 11,
        "estado": 1,
        "created_by": 11,
        "update_by": null,
        "created_at": "2022-07-11T18:44:50.000Z",
        "updated_at": "2022-07-11T18:44:50.000Z",
        "deleted_at": null
      },
      {
        "_id": 48,
        "nombre": "Bodega Anderson Atuesta",
        "id_responsable": 11,
        "estado": 11,
        "created_by": null,
        "update_by": null,
        "created_at": "2022-07-21T19:57:05.000Z",
        "updated_at": "2022-07-21T19:57:05.000Z",
        "deleted_at": null
      },
      {
        "_id": 49,
        "nombre": "Bodega Anderson Atuesta555",
        "id_responsable": 11,
        "estado": 11,
        "created_by": null,
        "update_by": null,
        "created_at": "2022-07-21T21:27:13.000Z",
        "updated_at": "2022-07-21T21:27:13.000Z",
        "deleted_at": null
      },
      {
        "_id": 42,
        "nombre": "Bodega Developer 132",
        "id_responsable": 11,
        "estado": 1,
        "created_by": 11,
        "update_by": null,
        "created_at": "2022-07-01T20:30:24.000Z",
        "updated_at": "2022-07-01T20:30:24.000Z",
        "deleted_at": null
      },
      {
        "_id": 43,
        "nombre": "Bodega Developer 132",
        "id_responsable": 11,
        "estado": 1,
        "created_by": 11,
        "update_by": null,
        "created_at": "2022-07-11T18:37:11.000Z",
        "updated_at": "2022-07-11T18:37:11.000Z",
        "deleted_at": null
      },
      {
        "_id": 36,
        "nombre": "asdefg",
        "id_responsable": 11,
        "estado": 1,
        "created_by": 11,
        "update_by": null,
        "created_at": "2022-06-29T02:24:49.000Z",
        "updated_at": "2022-06-29T02:24:49.000Z",
        "deleted_at": null
      },
      {
        "_id": 52,
        "nombre": "bodega Aurrera",
        "id_responsable": 11,
        "estado": 1,
        "created_by": 9,
        "update_by": null,
        "created_at": "2023-08-15T12:32:20.495Z",
        "updated_at": null,
        "deleted_at": null
      },
      {
        "_id": 53,
        "nombre": "bodega Aurrera",
        "id_responsable": 11,
        "estado": 1,
        "created_by": 9,
        "update_by": null,
        "created_at": "2023-08-21T14:22:06.055Z",
        "updated_at": null,
        "deleted_at": null
      },
      {
        "_id": 37,
        "nombre": "bodega fg",
        "id_responsable": 11,
        "estado": 1,
        "created_by": 11,
        "update_by": null,
        "created_at": "2022-06-29T02:25:17.000Z",
        "updated_at": "2022-06-29T02:25:17.000Z",
        "deleted_at": null
      },
      {
        "_id": 38,
        "nombre": "bodega fg",
        "id_responsable": 11,
        "estado": 1,
        "created_by": 11,
        "update_by": null,
        "created_at": "2022-06-29T02:25:40.000Z",
        "updated_at": "2022-06-29T02:25:40.000Z",
        "deleted_at": null
      },
      {
        "_id": 39,
        "nombre": "bodega fg 2",
        "id_responsable": 11,
        "estado": 1,
        "created_by": 11,
        "update_by": null,
        "created_at": "2022-06-29T02:28:31.000Z",
        "updated_at": "2022-06-29T02:28:31.000Z",
        "deleted_at": null
      },
      {
        "_id": 40,
        "nombre": "bodega fg 2",
        "id_responsable": 11,
        "estado": 1,
        "created_by": 11,
        "update_by": null,
        "created_at": "2022-06-29T02:28:44.000Z",
        "updated_at": "2022-06-29T02:28:44.000Z",
        "deleted_at": null
      },
      {
        "_id": 11,
        "nombre": "bodega0",
        "id_responsable": 16,
        "estado": 1,
        "created_by": 16,
        "update_by": null,
        "created_at": "2022-06-02T15:33:48.000Z",
        "updated_at": null,
        "deleted_at": null
      },
      {
        "_id": 12,
        "nombre": "bodega1",
        "id_responsable": 18,
        "estado": 1,
        "created_by": 18,
        "update_by": null,
        "created_at": "2022-06-02T15:33:48.000Z",
        "updated_at": null,
        "deleted_at": null
      },
      {
        "_id": 13,
        "nombre": "bodega2",
        "id_responsable": 18,
        "estado": 1,
        "created_by": 18,
        "update_by": null,
        "created_at": "2022-06-02T15:33:48.000Z",
        "updated_at": null,
        "deleted_at": null
      },
      {
        "_id": 35,
        "nombre": "bodega35",
        "id_responsable": 11,
        "estado": 1,
        "created_by": null,
        "update_by": null,
        "created_at": "2022-06-24T22:30:37.000Z",
        "updated_at": "2022-06-24T22:30:37.000Z",
        "deleted_at": null
      },
      {
        "_id": 18,
        "nombre": "bodega7",
        "id_responsable": 17,
        "estado": 1,
        "created_by": 17,
        "update_by": null,
        "created_at": "2022-06-02T15:33:48.000Z",
        "updated_at": null,
        "deleted_at": null
      },
      {
        "_id": 19,
        "nombre": "bodega8",
        "id_responsable": 11,
        "estado": 1,
        "created_by": 11,
        "update_by": null,
        "created_at": "2022-06-02T15:33:48.000Z",
        "updated_at": null,
        "deleted_at": null
      },
      {
        "_id": 20,
        "nombre": "bodega9",
        "id_responsable": 18,
        "estado": 1,
        "created_by": 18,
        "update_by": null,
        "created_at": "2022-06-02T15:33:48.000Z",
        "updated_at": null,
        "deleted_at": null
      },
      {
        "_id": 29,
        "nombre": "bodegajuanpablo",
        "id_responsable": 19,
        "estado": 1,
        "created_by": null,
        "update_by": null,
        "created_at": "2022-06-03T00:41:51.000Z",
        "updated_at": "2022-06-03T00:41:51.000Z",
        "deleted_at": null
      },
      {
        "_id": 31,
        "nombre": "casamedrano",
        "id_responsable": 17,
        "estado": 1,
        "created_by": null,
        "update_by": null,
        "created_at": "2022-06-03T03:21:32.000Z",
        "updated_at": "2022-06-03T03:21:32.000Z",
        "deleted_at": null
      },
      {
        "_id": 32,
        "nombre": "centro",
        "id_responsable": 18,
        "estado": 1,
        "created_by": null,
        "update_by": null,
        "created_at": "2022-06-03T03:33:19.000Z",
        "updated_at": "2022-06-03T03:33:19.000Z",
        "deleted_at": null
      },
      {
        "_id": 27,
        "nombre": "fsfdf",
        "id_responsable": 13,
        "estado": 1,
        "created_by": null,
        "update_by": null,
        "created_at": "2022-06-02T21:48:00.000Z",
        "updated_at": "2022-06-02T21:48:00.000Z",
        "deleted_at": null
      },
      {
        "_id": 22,
        "nombre": "jsjsjss",
        "id_responsable": 13,
        "estado": 1,
        "created_by": null,
        "update_by": null,
        "created_at": "2022-06-02T21:30:47.000Z",
        "updated_at": "2022-06-02T21:30:47.000Z",
        "deleted_at": null
      },
      {
        "_id": 23,
        "nombre": "leeche",
        "id_responsable": 13,
        "estado": 1,
        "created_by": null,
        "update_by": null,
        "created_at": "2022-06-02T21:43:08.000Z",
        "updated_at": "2022-06-02T21:43:08.000Z",
        "deleted_at": null
      },
      {
        "_id": 30,
        "nombre": "micasa",
        "id_responsable": 18,
        "estado": 1,
        "created_by": null,
        "update_by": null,
        "created_at": "2022-06-03T01:31:09.000Z",
        "updated_at": "2022-06-03T01:31:09.000Z",
        "deleted_at": null
      },
      {
        "_id": 26,
        "nombre": "prueba",
        "id_responsable": 12,
        "estado": 1,
        "created_by": null,
        "update_by": null,
        "created_at": "2022-06-02T21:47:48.000Z",
        "updated_at": "2022-06-02T21:47:48.000Z",
        "deleted_at": null
      },
      {
        "_id": 28,
        "nombre": "prueba",
        "id_responsable": 12,
        "estado": 1,
        "created_by": null,
        "update_by": null,
        "created_at": "2022-06-03T00:10:32.000Z",
        "updated_at": "2022-06-03T00:10:32.000Z",
        "deleted_at": null
      },
      {
        "_id": 24,
        "nombre": "soto1",
        "id_responsable": 15,
        "estado": 1,
        "created_by": null,
        "update_by": null,
        "created_at": "2022-06-02T21:46:40.000Z",
        "updated_at": "2022-06-02T21:46:40.000Z",
        "deleted_at": null
      },
      {
        "_id": 25,
        "nombre": "soto2",
        "id_responsable": 15,
        "estado": 1,
        "created_by": null,
        "update_by": null,
        "created_at": "2022-06-02T21:47:29.000Z",
        "updated_at": "2022-06-02T21:47:29.000Z",
        "deleted_at": null
      }
    ]
    ```
 </details>

## 🎯/GetProductosXTotal

**`GET /GetProductosXTotal`**: El EndPoint `/GetProductosXTotal` Se encarga de listar todas las bodegas ordenadas alfabéticamente

**Aclaraciones y Validaciones**

- Este endpoint no acepta data de entrada

**Ruta Especifica**

```html
http://127.19.8.3:5010/GetProductosXTotal
```

  <details>
    <summary> <h3> Data de Salida </h3></summary> 
  	```json
       [
  {
    "_id": 27,
    "Total": 156772,
    "producto": {
      "_id": 27,
      "nombre": "chocolisto",
      "descripcion": "jjjjjj",
      "estado": 1,
      "created_by": null,
      "update_by": null,
      "created_at": "2022-06-03T00:40:43.000Z",
      "updated_at": "2022-06-03T00:40:43.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 28,
    "Total": 96999,
    "producto": {
      "_id": 28,
      "nombre": "Leche",
      "descripcion": "deslactosada",
      "estado": 1,
      "created_by": null,
      "update_by": null,
      "created_at": "2022-06-03T00:49:21.000Z",
      "updated_at": "2022-06-03T00:49:21.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 30,
    "Total": 52222,
    "producto": {
      "_id": 30,
      "nombre": "cocacola",
      "descripcion": "coca cola",
      "estado": 1,
      "created_by": null,
      "update_by": null,
      "created_at": "2022-06-03T03:01:54.000Z",
      "updated_at": "2022-06-03T03:01:54.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 23,
    "Total": 45666,
    "producto": {
      "_id": 23,
      "nombre": "get chocolatinas",
      "descripcion": "chocolate",
      "estado": 1,
      "created_by": null,
      "update_by": null,
      "created_at": "2022-06-03T00:33:43.000Z",
      "updated_at": "2022-06-03T00:33:43.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 25,
    "Total": 45666,
    "producto": {
      "_id": 25,
      "nombre": "sadasdasd",
      "descripcion": "chocolate",
      "estado": 1,
      "created_by": null,
      "update_by": null,
      "created_at": "2022-06-03T00:37:56.000Z",
      "updated_at": "2022-06-03T00:37:56.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 24,
    "Total": 45666,
    "producto": {
      "_id": 24,
      "nombre": "lololol",
      "descripcion": "chocolate",
      "estado": 1,
      "created_by": null,
      "update_by": null,
      "created_at": "2022-06-03T00:36:44.000Z",
      "updated_at": "2022-06-03T00:36:44.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 18,
    "Total": 14887,
    "producto": {
      "_id": 18,
      "nombre": "producto7",
      "descripcion": "producto7",
      "estado": 1,
      "created_by": 11,
      "update_by": null,
      "created_at": null,
      "updated_at": null,
      "deleted_at": null
    }
  },
  {
    "_id": 20,
    "Total": 12179,
    "producto": {
      "_id": 20,
      "nombre": "producto9",
      "descripcion": "producto9",
      "estado": 1,
      "created_by": 19,
      "update_by": null,
      "created_at": null,
      "updated_at": null,
      "deleted_at": null
    }
  },
  {
    "_id": 34,
    "Total": 8700,
    "producto": {
      "_id": 34,
      "nombre": "asdasd",
      "descripcion": "dfdfssdf",
      "estado": 1,
      "created_by": null,
      "update_by": null,
      "created_at": "2022-06-03T03:48:25.000Z",
      "updated_at": "2022-06-03T03:48:25.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 29,
    "Total": 6000,
    "producto": {
      "_id": 29,
      "nombre": "yogurt",
      "descripcion": "frescaleche",
      "estado": 1,
      "created_by": null,
      "update_by": null,
      "created_at": "2022-06-03T01:44:09.000Z",
      "updated_at": "2022-06-03T01:44:09.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 26,
    "Total": 6000,
    "producto": {
      "_id": 26,
      "nombre": "milo",
      "descripcion": "500 kg",
      "estado": 1,
      "created_by": null,
      "update_by": null,
      "created_at": "2022-06-03T00:40:11.000Z",
      "updated_at": "2022-06-03T00:40:11.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 31,
    "Total": 5200,
    "producto": {
      "_id": 31,
      "nombre": "pepsi",
      "descripcion": "copia",
      "estado": 1,
      "created_by": null,
      "update_by": null,
      "created_at": "2022-06-03T03:19:58.000Z",
      "updated_at": "2022-06-03T03:19:58.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 33,
    "Total": 1500,
    "producto": {
      "_id": 33,
      "nombre": "gaseosa",
      "descripcion": "sadasd",
      "estado": 1,
      "created_by": null,
      "update_by": null,
      "created_at": "2022-06-03T03:44:25.000Z",
      "updated_at": "2022-06-03T03:44:25.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 58,
    "Total": 500,
    "producto": {
      "_id": 58,
      "nombre": "Producto Anderson Atuesta",
      "descripcion": "Esta es una prueba",
      "estado": 1,
      "created_by": 11,
      "update_by": null,
      "created_at": "2022-07-21T20:38:17.000Z",
      "updated_at": "2022-07-21T20:38:17.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 57,
    "Total": 500,
    "producto": {
      "_id": 57,
      "nombre": "Producto Anderson Atuesta",
      "descripcion": "Esta es una prueba",
      "estado": 1,
      "created_by": 11,
      "update_by": null,
      "created_at": "2022-07-21T20:34:37.000Z",
      "updated_at": "2022-07-21T20:34:37.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 59,
    "Total": 500,
    "producto": {
      "_id": 59,
      "nombre": "Producto Anderson Atuesta",
      "descripcion": "Esta es una prueba",
      "estado": 1,
      "created_by": 11,
      "update_by": null,
      "created_at": "2022-07-21T20:49:42.000Z",
      "updated_at": "2022-07-21T20:49:42.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 48,
    "Total": 200,
    "producto": {
      "_id": 48,
      "nombre": "whiskas",
      "descripcion": "comidad de gato",
      "estado": 1,
      "created_by": 13,
      "update_by": null,
      "created_at": "2022-07-11T19:32:45.000Z",
      "updated_at": "2022-07-11T19:32:45.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 32,
    "Total": 200,
    "producto": {
      "_id": 32,
      "nombre": "postobon",
      "descripcion": "manzana",
      "estado": 1,
      "created_by": null,
      "update_by": null,
      "created_at": "2022-06-03T03:33:46.000Z",
      "updated_at": "2022-06-03T03:33:46.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 12,
    "Total": 124,
    "producto": {
      "_id": 12,
      "nombre": "producto1",
      "descripcion": "producto1",
      "estado": 1,
      "created_by": 14,
      "update_by": null,
      "created_at": null,
      "updated_at": null,
      "deleted_at": null
    }
  },
  {
    "_id": 13,
    "Total": 113,
    "producto": {
      "_id": 13,
      "nombre": "producto2",
      "descripcion": "producto2",
      "estado": 1,
      "created_by": 13,
      "update_by": null,
      "created_at": null,
      "updated_at": null,
      "deleted_at": null
    }
  },
  {
    "_id": 54,
    "Total": 100,
    "producto": {
      "_id": 54,
      "nombre": "whiskas",
      "descripcion": "comidad de gato",
      "estado": 1,
      "created_by": 13,
      "update_by": null,
      "created_at": "2022-07-11T19:47:25.000Z",
      "updated_at": "2022-07-11T19:47:25.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 55,
    "Total": 100,
    "producto": {
      "_id": 55,
      "nombre": "dog food",
      "descripcion": "comida de perro",
      "estado": 1,
      "created_by": 13,
      "update_by": null,
      "created_at": "2022-07-11T20:55:42.000Z",
      "updated_at": "2022-07-11T20:55:42.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 11,
    "Total": 100,
    "producto": {
      "_id": 11,
      "nombre": "producto0",
      "descripcion": "producto0",
      "estado": 1,
      "created_by": 16,
      "update_by": null,
      "created_at": null,
      "updated_at": null,
      "deleted_at": null
    }
  },
  {
    "_id": 60,
    "Total": 74,
    "producto": {
      "_id": 60,
      "nombre": "Pringles",
      "descripcion": "papas fritas",
      "estado": 1,
      "created_by": null,
      "update_by": null,
      "created_at": "2023-05-25T03:52:26.000Z",
      "updated_at": "2023-05-25T03:52:26.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 36,
    "Total": 10,
    "producto": {
      "_id": 36,
      "nombre": "producto fg 1",
      "descripcion": "producto prueba fg",
      "estado": 1,
      "created_by": 11,
      "update_by": null,
      "created_at": "2022-06-29T03:27:10.000Z",
      "updated_at": "2022-06-29T03:27:10.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 37,
    "Total": 10,
    "producto": {
      "_id": 37,
      "nombre": "producto fg 1",
      "descripcion": "producto prueba fg",
      "estado": 1,
      "created_by": 11,
      "update_by": null,
      "created_at": "2022-06-29T03:44:36.000Z",
      "updated_at": "2022-06-29T03:44:36.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 35,
    "Total": 10,
    "producto": {
      "_id": 35,
      "nombre": "producto fg 1",
      "descripcion": "producto prueba fg",
      "estado": 1,
      "created_by": 11,
      "update_by": null,
      "created_at": "2022-06-29T03:22:05.000Z",
      "updated_at": "2022-06-29T03:22:05.000Z",
      "deleted_at": null
    }
  },
  {
    "_id": 14,
    "Total": 7,
    "producto": {
      "_id": 14,
      "nombre": "producto3",
      "descripcion": "producto3",
      "estado": 1,
      "created_by": 20,
      "update_by": null,
      "created_at": null,
      "updated_at": null,
      "deleted_at": null
    }
  },
  {
    "_id": 81,
    "Total": 1,
    "producto": {
      "_id": 81,
      "nombre": "coca cola",
      "descripcion": "una bien fria",
      "estado": 1,
      "created_by": 2,
      "update_by": null,
      "created_at": "2023-08-15T13:33:54.755Z",
      "updated_at": null,
      "deleted_at": null
    }
  },
  {
    "_id": 82,
    "Total": 1,
    "producto": {
      "_id": 82,
      "nombre": "coca cola",
      "descripcion": "una bien fria",
      "estado": 1,
      "created_by": 2,
      "update_by": null,
      "created_at": "2023-08-21T15:49:36.565Z",
      "updated_at": null,
      "deleted_at": null
    }
  },
  {
    "_id": 80,
    "Total": 1,
    "producto": {
      "_id": 80,
      "nombre": "coca cola",
      "descripcion": "una bien fria",
      "estado": 1,
      "created_by": 2,
      "update_by": null,
      "created_at": "2023-08-14T02:17:27.731Z",
      "updated_at": null,
      "deleted_at": null
    }
  }
]
    ```
 </details>

## 🛂/PostBodegas

**`POST /PostBodegas`**: El EndPoint `/PostBodegas` Se encarga de crear una bodegas.

**Aclaraciones y Validaciones**

  <details>
    <summary> <h3> Tipo De data </h3></summary>
      identificacion_Bodega: Number<br>
      nombre_Bodega: Cadena de caracteres (string)<br>
      identificacion_Responsable: Number<br>
      estado_Bodega: Number<br>
      identificacion_Usuario: Number<br>
</details>

**Ruta Especifica**

```html
http://127.19.8.3:5010/PostBodegas
```

   <details>
    <summary> <h3> Data de entrada </h3></summary> 
  	```json
    {
        "identificacion_Bodega": 54,
        "nombre_Bodega": "bodega Aurrera",
        "identificacion_Responsable": 11,
        "estado_Bodega": 1,
        "identificacion_Usuario": 9
    }
    ```
 </details>

<details>
    <summary> <h3> Data de Salida </h3></summary> 
  	```json
       {status: 200, message: "Data enviada Correctamente"}
 	```
   </details>

## 🧾/PostProductoInventario

**`POST /PostProductoInventario`**: El EndPoint `/PostProductoInventario` Se encarga de insertar un producto y a su vez asigne una cantidad inicial del mismo en la tabla inventarios en una de las bodegas por default.

**Aclaraciones y Validaciones**

  <details>
    <summary> <h3> Tipo De data </h3></summary>
      identificacion_Producto: Number<br>
      nombre_Producto: Cadena de caracteres (string)<br>
      descripcion_Producto: Cadena de caracteres (string)<br>
      estado_Producto: Number<br>
      identificacion_Usuario: Number<br>
</details>

**Ruta Especifica**

```html
http://127.19.8.3:5010/PostProductoInventario
```

   <details>
    <summary> <h3> Data de entrada </h3></summary> 
  	```json
       {
            "identificacion_Producto": 82,
            "nombre_Producto": "coca cola",
            "descripcion_Producto": "una bien fria",
            "estado_Producto": 1,
            "identificacion_Usuario": 2
    	}
    ```
 </details>

<details>
    <summary> <h3> Data de Salida </h3></summary> 
  	```json
       {status: 200, message: "Data enviada Correctamente"}
 	```
   </details>

##  📽️/TransladoProductos

**`POST /TransladoProductos`**: El EndPoint `/TransladoProductos` Se encarga de  insertar registros en la tabla de inventarios

**Aclaraciones y Validaciones**

  <details>
    <summary> <h3> Tipo De data </h3></summary>
      identificacion_Inventario: Number<br>
      identificacion_Bodega: Number<br>
      identificacion_Producto: Number<br>
      cantidad_Producto: Number<br>
      identificacion_Usuario: Number<br>
</details>

**Ruta Especifica**

```html
http://127.19.8.3:5010/TransladoProductos
```

   <details>
    <summary> <h3> Data de entrada </h3></summary> 
  	```json
       	{
            "identificacion_Historial": 38,
            "identificacion_bodegaOrigen": 12,
            "identificacion_bodegaFinal": 11,
            "identificacion_Producto": 20,
            "cantidad_Producto" : 10,
            "identificacion_Usuario": 2
        }
    ```
 </details>

<details>
    <summary> <h3> Data de Salida </h3></summary> 
  	```json
       {status: 200, message: "Cantidad del inventario Actualizado Correctamente"}
 	```
   </details>

  📽️/PostInventario

**`POST /PostInventario`**: El EndPoint `/PostInventario` Se encarga de  insertar registros en la tabla de inventarios

**Aclaraciones y Validaciones**

  <details>
    <summary> <h3> Tipo De data </h3></summary>
      identificacion_Historial : Number<br>
      identificacion_bodegaOrigen : Number<br>
      identificacion_bodegaFinal : Number<br>
      identificacion_Producto : Number<br>
      cantidad_Producto : Number<br>
      identificacion_Usuario": Number<br>
</details>

**Ruta Especifica**

```html
http://127.19.8.3:5010/PostInventario
```

   <details>
    <summary> <h3> Data de entrada </h3></summary> 
  	```json
       	{
        "identificacion_Inventario": 80,
        "identificacion_Bodega": 11,
        "identificacion_Producto": 20,
        "cantidad_Producto": 100,
        "identificacion_Usuario": 2
		}
    ```
 </details>

<details>
    <summary> <h3> Data de Salida </h3></summary> 
  	```json
       {status: 200, message: "Translado completado Correctamente"}
 	```
   </details>

## **🪄⚗️Archivo thunder⚗️🪄**

Aqui encontraras el archivo con las colecciones de thunder usadas para ejecutar los endpoints de manera mas facil de este proyecto

[Preciona Aqui Para Ir Directamente Al Archivo](https://github.com/JuanJoseDuranRinconCAMPUS2/bodegasNodeExpress/blob/main/backend/Thunder/thunder-collection_BodegasMongoDB.json)

## **🚀🎇 Importacion Archivo thunder🎇🚀**

- Descarga el archivo thunder-collection_BodegasMongoDB.json en el link de arriba
- Abre Thunder, ve a Collections y abre el menu

- Haz Click donde dice "Import"

- Selecciona el archivo thunder-collection_BodegasMongoDB.json

- Y listo!!. Ya tendras todas las carpetas que contituyen los endPoints del proyecto.

## **🌌Contribución🌌**

Si deseas contribuir a este proyecto, siéntete libre de abrir una solicitud de extracción (pull request) o informar cualquier problema que encuentres.

## **😶‍🌫️Licencias😶‍🌫️**

Este proyecto está licenciado bajo la [Licencia MIT](https://github.com/JuanJoseDuranRinconCAMPUS2/bodegasNodeExpress/blob/main/LICENSE).

¡Gracias por visitar mi proyecto!

