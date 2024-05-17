# Red social mongoose

## Descripción

Este proyecto es una API para gestionar publicaciones, comentarios y usuarios utilizando Node.js, Express y MongoDB con Mongoose. Incluye autenticación de usuarios, creación, actualización y eliminación de publicaciones y comentarios, así como la funcionalidad de dar y quitar "like" a publicaciones.

## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- nodemailer

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu_usuario/clase-mongoose.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd clase-mongoose
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Crea un archivo `.env` en la raíz del proyecto y añade tus variables de entorno:

    ```plaintext
    MONGO_URI=your_mongo_uri
    JWT_SECRET=your_jwt_secret
    PORT=3000
    ```

5. Inicia la aplicación en modo de desarrollo:

    ```bash
    npm run dev
    ```

    O en modo de producción:

    ```bash
    npm start
    ```

## Uso

La API expone varios endpoints para gestionar usuarios, publicaciones y comentarios.

### Endpoints

#### Ejemplos Usuarios

- **Registrar un usuario**
  - **POST** `/users/register`
  - Cuerpo de la solicitud:
    ```json
    {
      "username": "tu_nombre",
      "email": "tu_email",
      "password": "tu_contraseña",
      "age": 25
    }
    ```

- **Iniciar sesión**
  - **POST** `/users/login`
  - Cuerpo de la solicitud:
    ```json
    {
      "email": "tu_email",
      "password": "tu_contraseña"
    }
    ```

- **Obtener información del usuario**
  - **GET** `/users/me`

- **Cerrar sesión**
  - **POST** `/users/logout`
 
#### Dcumentacion de postman

[Documentación de API en Postman](https://documenter.getpostman.com/view/34523192/2sA3JT2dfd)


## Middlewares

- **Autenticación**
  - Se utiliza el middleware `authentication` para verificar los tokens JWT y autenticar a los usuarios.

- **Autorización**
  - Se utilizan los middlewares `isAuthor` y `isAuthorComment` para verificar la autoría de las publicaciones y comentarios respectivamente.

- **Manejo de Errores**
  - Se utiliza el middleware `handleTypeError` para manejar errores de validación y otros errores comunes.

## Scripts

- **Iniciar en modo producción**
  ```bash
  npm start

## Iniciar en modo desarrollo
 ```bash
  npm run dev

## Contribuir
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request con tus mejoras y correcciones.

## Licencia
Este proyecto está licenciado bajo la Licencia ISC.

