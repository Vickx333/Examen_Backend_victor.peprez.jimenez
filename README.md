# # # # pyoyectos 
# __ALGORITMOS APP__
- En el siguiente link se encuentra desplegada la aplicación con:
reactjs.
https://vickx333.github.io/examen_algoritmos_victor.perez.jimenez/

- Carpera espesifica del codigo donde se  implemento en contador de puntos con js. 
y dejé un comentario en las variables donde podemos cambiar los puntajes por prueva y variar los puntajes.

https://github.com/Vickx333/examen_algoritmos_victor.perez.jimenez/blob/master/src/components/Main.jsx.

# __CONTADOR DE PALABRAS.__

- Para ejecutar el contador de palabras:

- Descarga la carpeta.
Ejecuta el index.html en el navegador.
Podrás ver el resultado en una línea de texto o el JSON en la consola.

https://github.com/Vickx333/ContadorDePalabras_Victor.p.j.z/tree/main

# ####################### #

# __CRUD USUARIOS__
- en el siguiente link se encuentra el CRUD de usuarios usando una base de datos no relacional, JSON y el framework bootstrap para darle vista. 
como desplegar el la aplicacion.
1->  https://github.com/Vickx333/Examen_Backend_victor.peprez.jimenez
2->descarla la carpeta completa.
3-> ejecuta el index.html en tu navegador. 


# #####################

# # # # # # # PATRONES DE DISEÑO

### Problema 1: Un cliente requiere utilizar sendgrid para envíos de email, pero otro cliente requiere enviarlos por mandril. Se quiere evitar el uso de IF, y realizar un diseño en donde podamos utilizar más servicios en caso de que un cliente requiera alguno en específico ¿Qué patrón de diseño utilizarías y por qué?


- A: Strategy 
- B: Factory Method 
- C: Adapter



## la mejor opcion es el patron Stratergy.
- Paso 1:Define una interfaz común para todos servicios de envio de correos.

- Paso 2: implementar las clases concretas para cada servicio de enviode correo,
define clase concreta para sendGrid y para mandrill así como para cualquier otro servicio de envio de correos. 

- Paso 3: define una clase cliente que utiliza el servicio de envio de correo

- Paso 4:implementacion de las clases en aplicación.

 # usando javascript seria de la siguiente manera: 

- __Paso1:__
 class EmailService {
  sendEmail(email) {
    throw new Error("error");
  }
}
- __paso 2:__
___clase  sendGrid__
class SendGridService extends EmailService {
  sendEmail(email) {
    console.log("Sending email using SendGrid:", email);
    
  }
}
__clase mandrill__
class MandrillService extends EmailService {
  sendEmail(email) {
    console.log("Sending email using Mandrill:", email);
   
  }
}

- __paso 3:__ 
class EmailClient {
  constructor(emailService) {
    this.emailService = emailService;
  }

  sendEmail(email) {
    
    this.emailService.sendEmail(email);
  }
}

- __paso 4:__ 

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



# Problema 2: Explica en tus propias palabras la diferencia entre Factory Method y Abstract Factory. Y proporciona un caso de uso.*
El Abstract Factory (Fábrica Abstracta) es un patrón de diseño creacional que se utiliza para crear familias de objetos relacionados basados en una propiedad en común. Por ejemplo, si tenemos una jerarquía de clases que representan diferentes tipos de clientes, como Cliente1, Cliente2, etc., el Abstract Factory puede proporcionar una interfaz para crear objetos de cada tipo de cliente de manera coherente y compatible.

Por otro lado, el Factory Method (Método de Fábrica) es un patrón de diseño creacional que se utiliza para crear objetos de un tipo determinado. Por ejemplo, si tenemos clases separadas para clientes y vendedores, que son dos objetos distintos con diferentes comportamientos y propiedades, el Factory Method puede proporcionar un método separado para crear y devolver instancias de cada tipo de objeto (por ejemplo, crearCliente() y crearVendedor()).

El Abstract Factory se utiliza para crear familias de objetos relacionados basados en una propiedad en común, mientras que el Factory Method se utiliza para crear objetos de un tipo determinado, incluso si son objetos distintos con comportamientos diferentes, como clientes y vendedores en este caso.




