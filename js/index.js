let srcs = [];
fetch("./php/home.php")
.then(response => response.json())
.then(data => {
  srcs = data;
})
.catch(err => {
  console.log(err)
})
.finally( () => {
  const minimo = 3;
  let nuevoSrcs = [];
  if(srcs.length < minimo) {
    nuevoSrcs = agregarNoImage((minimo - srcs.length), srcs);
  } else {
    nuevoSrcs = [...srcs];
  }
  armarCaruesel(nuevoSrcs)
});



///////////////////////////////////////////////////

function agregarNoImage(can, arr) {
  for(let i = 0; i < can; i++) {
    arr.push("./noImage.png");
  }
  return arr;
}

function armarCaruesel(srcs) {
  const cabeceraCarrusel = document.querySelector('#carouselPrincipal .carousel-inner');
  srcs.forEach((item, i) => {
    let literal;
    if(i == 0) {
      literal = `<div class="carousel-item active" data-bs-interval="7000">
        <img src=${item} class="d-block w-100" alt="imagen 1">
      </div>`
    } else {
      literal = `<div class="carousel-item" data-bs-interval="5000">
        <img src=${item} class="d-block w-100" alt="imagen 2">
      </div>`
    }
    cabeceraCarrusel.innerHTML += literal;
  });

}
