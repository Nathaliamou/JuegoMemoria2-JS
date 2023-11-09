// Variables globales
const d = document;
let imgN1 = [
  { nombre: "DEJAD", url: "imagenes/DEJAD.JPG" },
  { nombre: "DESCANSA", url: "imagenes/DESCANSA.JPG" },
  { nombre: "PASTOR", url: "imagenes/PASTOR.JPG" },
  { nombre: "TE-AMO", url: "imagenes/TE_AMO.JPG" },
  { nombre: "JOSEYJESUS", url: "imagenes/JOSEYJESUS.jpg" },
  { nombre: "OVEJAPERDIDA", url: "imagenes/OVEJAPERDIDA.jpg" },
  { nombre: "DEJAD", url: "imagenes/DEJAD.JPG" },
  { nombre: "DESCANSA", url: "imagenes/DESCANSA.JPG" },
  { nombre: "PASTOR", url: "imagenes/PASTOR.JPG" },
  { nombre: "TE-AMO", url: "imagenes/TE_AMO.JPG" },
  { nombre: "JOSEYJESUS", url: "imagenes/JOSEYJESUS.jpg" },
  { nombre: "OVEJAPERDIDA", url: "imagenes/OVEJAPERDIDA.jpg" },
];

let tablero = d.querySelector(".tablero");
let imagenNombre = []; // Guardar nombres de imagen
let imagenID = []; // Guardar posiciones de imagen

agregarImaganes();

// Función para agregar las imágenes al tablero
function agregarImaganes() {
  // Recorrer con un forEach las imágenes del array.
  imgN1.forEach((imagen, i) => {
    let div = d.createElement("div"); // Crear la etiqueta div
    div.className = "col-3"; // Agregar la clase col-3 al div
    let img = d.createElement("img"); // Crear la etiqueta img
    img.className = "img-fluid altura-img"; // Agregar la clase img-fluid a la img
    img.id = i; // Enumerar las imágenes por medio de un id
    img.src = "imagenes/OCULTAR.JPG"; // Agregar la ubicación de la imagen
    img.addEventListener("click", mostrarImg); // Agregar evento click a la imagen
    div.appendChild(img); // Agregar la imagen al div
    tablero.appendChild(div); // Agregar los div al tablero
  });
}

// Función para mostrar las imágenes ocultas
function mostrarImg() {
  // Obtener posición de la imagen
  let imgID = this.getAttribute("id");

  this.src = imgN1[imgID].url; // Modificar la URL de la imagen

  imagenNombre.push(imgN1[imgID].nombre); // Guardar los nombres de la imagen

  imagenID.push(imgID); // Guardar la posición de la imagen

  if (imagenNombre.length === 2) {
    setTimeout(compararImg, 200);
  }
}

// Función para comparar imágenes
function compararImg() {
  let imagenesTablero = d.querySelectorAll(".tablero div img");

  if (imagenNombre[0] === imagenNombre[1]) {
    alert("¡Felicitaciones! Adivinaste una imagen.");
    imagenesTablero[imagenID[0]].src = "imagenes/ok.JPG";
    imagenesTablero[imagenID[1]].src = "imagenes/ok.JPG";
  } else {
    alert("Fallaste, las imágenes son diferentes.");
    imagenesTablero[imagenID[0]].src = "imagenes/OCULTAR.JPG";
    imagenesTablero[imagenID[1]].src = "imagenes/OCULTAR.JPG";
  }
  imagenNombre = [];
  imagenID = [];
}
