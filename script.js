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
      // Agrega casos para otros botones si es necesario
    }
  });
});

// Función para mostrar la tabla de rutina de adaptación
function mostrarRutinaAdaptacion() {
  ocultarTodasLasTablas();
  const tablaAdaptacion = document.getElementById("rutinaAdaptacionTabla");
  tablaAdaptacion.style.display = "block";
}

// Función para mostrar la tabla de rutina Full Body
function mostrarRutinaFB() {
  ocultarTodasLasTablas();
  const tablaFB = document.getElementById("rutinaFBTabla");
  tablaFB.style.display = "block";
}

// Función para mostrar la tabla de rutina Weider
function mostrarRutinaWeider() {
  ocultarTodasLasTablas();
  const tablaW = document.getElementById("rutinaWTabla");
  tablaW.style.display = "block";
}

// Función para mostrar la tabla de rutina Weider
function mostrarRutinaEM() {
  ocultarTodasLasTablas();
  const tablaW = document.getElementById("rutinaEMTabla");
  tablaW.style.display = "block";
}

// Función para mostrar la tabla de rutina Weider
function mostrarRutinaM() {
  ocultarTodasLasTablas();
  const tablaW = document.getElementById("rutinaMTabla");
  tablaW.style.display = "block";
}