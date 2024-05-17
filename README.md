# Clase Mongoose

## Descripción

Este proyecto es una API para gestionar publicaciones, comentarios y usuarios utilizando Node.js, Express y MongoDB con Mongoose. Incluye autenticación de usuarios, creación, actualización y eliminación de publicaciones y comentarios, así como la funcionalidad de dar "like" a publicaciones.

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

#### Usuarios

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

#### Publicaciones

- **Crear una publicación**
  - **POST** `/posts`
  - Cuerpo de la solicitud:
    ```json
    {
      "title": "Título de la publicación",
      "content": "Contenido de la publicación"
    }
    ```

- **Actualizar una publicación**
  - **PUT** `/posts/:_id`
  - Cuerpo de la solicitud:
    ```json
    {
      "title": "Nuevo título de la publicación",
      "content": "Nuevo contenido de la publicación"
    }
    ```

- **Eliminar una publicación**
  - **DELETE** `/posts/:_id`

- **Obtener todas las publicaciones**
  - **GET** `/posts`

- **Obtener una publicación por ID**
  - **GET** `/posts/:_id`

- **Dar like a una publicación**
  - **POST** `/posts/:_id/like`

- **Quitar like a una publicación**
  - **POST** `/posts/:_id/removeLike`

#### Comentarios

- **Crear un comentario**
  - **POST** `/comments`
  - Cuerpo de la solicitud:
    ```json
    {
      "postId": "ID_de_la_publicación",
      "body": "Contenido del comentario"
    }
    ```

- **Actualizar un comentario**
  - **PUT** `/comments/:_id`
  - Cuerpo de la solicitud:
    ```json
    {
      "body": "Nuevo contenido del comentario"
    }
    ```

- **Eliminar un comentario**
  - **DELETE** `/comments/:_id`

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

