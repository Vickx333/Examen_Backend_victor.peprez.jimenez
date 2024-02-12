# Proyectos

## ALGORITMOS APP

- En el siguiente link se encuentra desplegada la aplicación con ReactJS:
[ALGORITMOS APP](https://vickx333.github.io/examen_algoritmos_victor.perez.jimenez/)

- Carpeta específica del código donde se implementó el contador de puntos con JavaScript. También he dejado un comentario en las variables donde podemos cambiar los puntajes por prueba y variar los puntajes.
[Código del Contador de Puntos](https://github.com/Vickx333/examen_algoritmos_victor.perez.jimenez/blob/master/src/components/Main.jsx)

## CONTADOR DE PALABRAS

- Para ejecutar el contador de palabras:
  1. Descarga la carpeta.
  2. Ejecuta el index.html en el navegador.
  3. Podrás ver el resultado en una línea de texto o el JSON en la consola.
[Contador de Palabras](https://github.com/Vickx333/ContadorDePalabras_Victor.p.j.z/tree/main)

## CRUD USUARIOS

- En el siguiente link se encuentra el CRUD de usuarios usando una base de datos no relacional, JSON y el framework Bootstrap para darle vista.
  1. [Examen Backend Victor.peprez.jimenez](https://github.com/Vickx333/Examen_Backend_victor.peprez.jimenez)
  2. Descarga la carpeta completa.
  3. Ejecuta el index.html en tu navegador.

### PATRONES DE DISEÑO

#### Problema 1: 
Un cliente requiere utilizar SendGrid para envíos de email, pero otro cliente requiere enviarlos por Mandrill. Se quiere evitar el uso de IF y realizar un diseño en donde podamos utilizar más servicios en caso de que un cliente requiera alguno en específico. ¿Qué patrón de diseño utilizarías y por qué?

- **Respuesta:** La mejor opción es el patrón Strategy.
  - **Paso 1:** Define una interfaz común para todos los servicios de envío de correos.
  - **Paso 2:** Implementa las clases concretas para cada servicio de envío de correo, definiendo clases concretas para SendGrid, Mandrill, así como para cualquier otro servicio de envío de correos.
  - **Paso 3:** Define una clase cliente que utiliza el servicio de envío de correo.
  - **Paso 4:** Implementación de las clases en la aplicación.

En JavaScript, sería de la siguiente manera:
```javascript
class EmailService {
  sendEmail(email) {
    throw new Error("error");
  }
}

class SendGridService extends EmailService {
  sendEmail(email) {
    console.log("Sending email using SendGrid:", email);
  }
}

class MandrillService extends EmailService {
  sendEmail(email) {
    console.log("Sending email using Mandrill:", email);
  }
}

class EmailClient {
  constructor(emailService) {
    this.emailService = emailService;
  }

  sendEmail(email) {
    this.emailService.sendEmail(email);
  }
}

const sendGridService = new SendGridService();
const mandrillService = new MandrillService();

const email = {
  to: "example@example.com",
  subject: "Hello",
  body: "This is a test email.",
};

const client1 = new EmailClient(sendGridService);
client1.sendEmail(email);

const client2 = new EmailClient(mandrillService);
client2.sendEmail(email);



