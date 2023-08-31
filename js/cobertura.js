const contenedor = document.getElementById('contenedor');
let srcs = [];
fetch("../php/cobertura.php")
.then(response => response.json())
.then(data => {
  srcs = data;
  console.log(data);
})
.catch(err => {
  console.log(err)
})
.finally(() => {
  if(srcs < 1) {
    return;
  }
  srcs.forEach((mapa, index) => {
    const div = document.createElement('div');
    div.className = 'my-4 p-md-4 p-2';
    div.innerHTML = `<h3>ZONA ${index + 1}</h3>
    <div class='mt-3'><img src=${mapa} class="w-100" alt="imagen de cobertura de zona"></div>`
    contenedor.append(div);
  })
})
