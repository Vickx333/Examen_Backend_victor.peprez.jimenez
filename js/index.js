// Obtener la referencia al cuerpo de la tabla
const usuariosTableBody = document.getElementById('usuariosTableBody');

// Función para cargar los usuarios desde la API
function cargarUsuarios() {
    fetch('./json/usuarios.json')
        .then(response => response.json())
        .then(usuarios => {
            console.log(usuarios)
            // Limpiar la tabla
            usuariosTableBody.innerHTML = '';

            // Iterar sobre los usuarios y agregar filas a la tabla
            usuarios.forEach(usuario => {
                const fila = `
        <tr>
          <td>${usuario.ID}</td>
          <td>${usuario.Name}</td>
          <td>${usuario.Email}</td>
          <td>${usuario.Address}</td>
          <td>${usuario.Phone}</td>
          <td>${usuario.DateOfBirth}</td>
          <td>${calcularEdad(usuario.DateOfBirth)}</td>
          <td>
            <button class="btn btn-primary btn-sm" onclick="editarUsuario(${usuario.id})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="eliminarUsuario(${usuario.id})">Eliminar</button>
          </td>
        </tr>
      `;
                usuariosTableBody.innerHTML += fila;
            });
        });
}

// Función para calcular la edad en base a la fecha de nacimiento
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    return edad;
}

// Función para editar un usuario
function editarUsuario(id) {

    //crear formulario emergente
    // de edicion o convertir a inputs los datos y ponerlos vacios con un pleaseholder con el valor anterior. 
    alert("formulario emergente o td a input?")
    let editMode = prompt(formEdit)
}

// Función para eliminar un usuario
function eliminarUsuario(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {



    }
}

// Cargar los usuarios al cargar la página
cargarUsuarios();