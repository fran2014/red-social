/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por 
el usuario existen en la base de datos
3. Si el usuario y contrasenia son correctos, el sistema debe mostrar un mensaje de 
bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de e
rror y no mostrar ningun timeline.

*/

// Asegura que el DOM este completamente cargado antes de ejecutar el codigo.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const inputUsername = document.getElementById("inputUsername");
  const inputPassword = document.getElementById("inputPassword");
  const buttonSend = document.getElementById("button-send");

  // Verifica que los elementos existan para evitar errores
  if (!form || !inputUsername || !inputPassword || !buttonSend) {
    console.error("Uno o mas elementos del DOM no se encontraron");
    return;
  }

  /* const usernameInp = inputUsername.value;
const passwordInp = inputPassword.value;
 */

  // Funcion que verifica si es usuario existe
  function usuarioExistente() {
    for (i = 0; i < usersDatabase.length; i++) {
      if (
        inputUsername.value === usersDatabase[i]?.username &&
        inputPassword.value === usersDatabase[i]?.password
      )
        return i; // Devuelve el indice del Ususario encontrado
    }
    return -1; // Devuelve -1 si no se encuentra el usuario
  }

  // Funcion para manejar el login
  function login() {
    const userIndex = usuarioExistente();
    if (userIndex !== -1) {
      //en userDatabase, se le da como parametro el [userIndex], porque en el almacena el indice que esta
      // retornando la funcion usuarioExistente()
      alert(`Bienvenido/a a tu cuenta ${usersDatabase[userIndex].username}`);
    } else if (inputUsername.value === "" && inputPassword.value === "") {
      alert("Ingrese los datos");
    } else {
      alert("Usuario o contrasenia incorrecto");
    }
  }
  // Evento para la Boton de enviar
  buttonSend.addEventListener("click", () => {
    login();
  });

  //Evento para la tecla Enter en el formulario
  form.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      login();
    }
  });
});

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
  { username: "123", password: "123" },
  { username: "admin", password: "admin" },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta mas el cafe que el te",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];
