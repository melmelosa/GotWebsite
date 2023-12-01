fetch("https://thronesapi.com/api/v2/Characters")
  //RESPUESTA OK
  .then((respuesta) => respuesta.json())
  //OBTENGO JSON
  .then((json) => {
    console.log(json);

    crearCabecera();
    crearGrid(json);
  });

function crearCabecera() {
  const contenedorCabecera = document.createElement("div");
  contenedorCabecera.setAttribute("id", "contenedorTitulo");

  const imagenTitulo = document.createElement("img");
  imagenTitulo.setAttribute(
    "src",
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Logo_Game_of_Thrones.png"
  );
  imagenTitulo.setAttribute("class", "img-fluid");
  contenedorCabecera.appendChild(imagenTitulo);
  document.body.appendChild(contenedorCabecera);
}
function crearGrid(personajes) {
  //creo el GRID en el contenedor principal
  const contenedorPrincipal = document.createElement("div");
  contenedorPrincipal.setAttribute("class", "container text-center");

  //const fila = crearFila(); ---> se sustituye por i==0 para crear la primera fila
  for (let i = 0; i < personajes.length; i++) {
    //si es la primera fila o la tercera
    if (i == 0 || i % 3 == 0) {
      fila = crearFila();
    }
    const card = crearCard(personajes[i]);
    fila.appendChild(card);
    contenedorPrincipal.appendChild(fila);
    document.body.appendChild(contenedorPrincipal);
  }
}
function crearFila() {
  const fila = document.createElement("div");
  fila.setAttribute("class", "row");
  return fila;
}

function crearCard(personaje) {
  const card = document.createElement("div");
  card.setAttribute("class", "col-4");
  // card.setAttribute("style", "width: 18rem; ");

  const internalDiv = document.createElement("div");
  internalDiv.setAttribute("class", "card mx-1 my-1")
  card.appendChild(internalDiv);
  
  //IMAGEN
  const img = addImagen(personaje);

  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  //NOMBRE
  const cardTextName = document.createElement("h5");
  cardTextName.setAttribute("class", "card-title");
  cardTextName.textContent = personaje.fullName;
  //FAMILIA
  const cardTextFamily = document.createElement("p");
  cardTextFamily.setAttribute("class", "card-text");
  cardTextFamily.textContent = personaje.family;
  //TITULO
  const cardTextTitle1 = document.createElement("p");
  cardTextTitle1.setAttribute("class", "card-text m-b-2");
  cardTextTitle1.textContent = "'" + personaje.title + "'";

  internalDiv.appendChild(img);
  internalDiv.appendChild(cardBody);
  cardBody.appendChild(cardTextName);
  cardBody.appendChild(cardTextFamily);
  cardBody.appendChild(cardTextTitle1);

  return card;
}

function addImagen(personaje) {
  const imagen = document.createElement("img");
  imagen.setAttribute("class", "card-img-top"); //clase bootstrap
  imagen.setAttribute("src", personaje.imageUrl); //imagen API
  imagen.setAttribute("alt", personaje.firstName);
  return imagen;
}
