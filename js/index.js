window.mostrar = (datos)=> {
  const contenido = document.querySelector(".contenido");
  let ul = document.createElement("ul");
  for(let i=0; i < datos.length; i++) {
    let personaje = datos[i];
    let li = document.createElement("li");
    let spanNombre = document.createElement("span");
    let spanEstado = document.createElement("span");
    let img = document.createElement("img");
    spanNombre.innerText = personaje.name;
    spanEstado.innerText = personaje.status;
    img.src = personaje.image;
    li.appendChild(spanNombre);
    li.appendChild(spanEstado);
    li.appendChild(img);
    ul.appendChild(li);
  };
  contenido.appendChild(ul);
};

window.addEventListener("DOMContentLoaded", async ()=> {
  let resultado = await axios.get("https://rickandmortyapi.com/api/character/");
  window.mostrar(resultado.data.results);
});