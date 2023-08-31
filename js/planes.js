fetch("../planes.json")
.then(response => response.json())
.then(data => {
  console.log(data);
  const contenedor = document.getElementById("contenedor");
  data.forEach(card => {
    contenedor.append(crearCards(card));

  })
})

function crearCards(card) {
  let objCard = document.createElement("div");
  objCard.className = "card m-4";
  objCard.style = "width:18rem";
  objCard.innerHTML = `<img src=${card.imagen} class="card-img-top" alt="imagen">
    <div class="card-body">
      <h5 class="card-title">${card.titulo}</h5>
      <span class="card-text">${card.servicio}</span>
    </div>
    <ul class="list-group list-group-flush" id="lista-grupo-planes">
      ${card["texto-lista"].map(item => `<li class="list-group-item">${item}</li>`).join('')}
    </ul>
    <div class="card-body precio">
      <h5 class="card-title">${card.precio}</h5>
    </div>`;
    // EN EL UL USO UN FOREACH PARA ARMAR EL LI EN TIEMPO DE EJECUCION,
    //USO EL MAP Q ME RETORNA LO Q YO HAGO DENTRO DEL MAP (el li con la variable de array u objeto q recorro).
    // EL JOIN ES PARA CORREGIR UN APOSTOFRE Q SE ME PONIA
    return objCard;
}
