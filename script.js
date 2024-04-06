// Función para ocultar todas las tablas de rutina
function ocultarTodasLasTablas() {
  const tablasRutina = document.querySelectorAll(".tabla-rutina");
  tablasRutina.forEach(tabla => {
    tabla.style.display = "none";
  });
}

const botones = document.querySelectorAll("button");

botones.forEach(boton => {
  boton.addEventListener("click", function() {
    // Remover la clase "seleccionado" de todos los botones
    botones.forEach(boton => {
      boton.classList.remove("seleccionado");
    });
    // Agregar la clase "seleccionado" al botón actual
    this.classList.add("seleccionado");

    // Ocultar todas las tablas de rutina
    ocultarTodasLasTablas();

    // Mostrar la tabla de rutina correspondiente al botón
    switch (this.id) {
      case "rutinaAdaptacion":
        mostrarRutinaAdaptacion();
        break;
      case "rutinaFullBody":
        mostrarRutinaFB();
        break;
      case "rutinaWeider":
        mostrarRutinaWeider();
        break;
      case "rutinaEmpujes":
        mostrarRutinaEM();
        break;
        case "rutinaMujeres":
          mostrarRutinaM();
          break;
        case "rutina":
          rutinas();
          break;
        case "contacto":
          contactos();
            break;
            case "inicio":
              inicio();
                break;
      // Agrega casos para otros botones si es necesario
    }
  });
});

// Función para mostrar la tabla de rutina de adaptación
function mostrarRutinaAdaptacion() {
  const tablaAdaptacion = document.getElementById("rutinaAdaptacionTabla");
  tablaAdaptacion.style.display = "block";
  tablaAdaptacion.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Función para mostrar la tabla de rutina Full Body
function mostrarRutinaFB() {
  const tablaFB = document.getElementById("rutinaFBTabla");
  tablaFB.style.display = "block";
  tablaFB.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Función para mostrar la tabla de rutina Weider
function mostrarRutinaWeider() {
  const tablaW = document.getElementById("rutinaWTabla");
  tablaW.style.display = "block";
  tablaW.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Función para mostrar la tabla de rutina Weider
function mostrarRutinaEM() {
  const tablaW = document.getElementById("rutinaEMTabla");
  tablaW.style.display = "block";
  tablaW.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Función para mostrar la tabla de rutina Weider
function mostrarRutinaM() {
  const tablaW = document.getElementById("rutinaMTabla");
  tablaW.style.display = "block";
  tablaW.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function inicio() {
  var contactos = document.getElementById('contactos');
  contactos.style.display = 'none';
  var botones = document.querySelector('.botones');
  botones.style.display = 'none';
  var inicio = document.getElementById('inicio');
  inicio.style.display = 'block';
}

function rutinas() {
  var inicio = document.getElementById("inicio");
  inicio.style.display = "none";
  var contactos = document.getElementById('contactos');
  contactos.style.display = 'none';
  var botones = document.querySelector('.botones');
  botones.style.display = 'block'; // Cambia el estilo para hacer visible los botones
}

function contactos() {
  var inicio = document.getElementById("inicio");
  inicio.style.display = "none";
  var botones = document.querySelector('.botones');
  botones.style.display = 'none';
  var contactos = document.getElementById('contactos');
  contactos.style.display = 'block'; // Cambia el estilo para hacer visible el div de contactos
}