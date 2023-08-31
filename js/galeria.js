const contenedor = document.getElementById('contenedor');
let srcs = [];
fetch("../php/galeria.php")
.then(response => response.json())
.then(data => {
  srcs = data;
  console.log(data);
  if(srcs.length > 0) {
    crearFotos(srcs);
  }
})
.catch(err => {
  console.log(err)
})


function crearFotos(fotos) {
  fotos.forEach( src => {
    const div = document.createElement("div");
    div.className = "contenedor-fotos my-3";
    const img = document.createElement("img");
    img.src = src;
    img.alt = 'imagen de galeria';
    contenedor.appendChild(div).appendChild(img);
  })
}
