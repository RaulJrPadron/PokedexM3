window.addEventListener('DOMContentLoaded', ()=>{
    crearhtml();
});

let container = document.getElementById("container")

let json = JSON.parse(poke_file)
let personajes = json.result

function search() {
  console.log(search_input.value)
  let personaje = search_personaje(search_input.value)
  event.preventDefault()
  containerTarget.innerHTML = `
    <div class="card mb-3 mx-auto mt-5 border border-warning" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${personaje.ThumbnailImage}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                    <p class="card-text">Tamaño: ${personaje.height}cm</p>
                    <p class="card-text">Habilidades: ${personaje.abilities}</p>
                    <p class="card-text">Debilidades: ${personaje.weakness}</p>
                    <p class="card-text">Tipo: ${personaje.type}</p>
                </div>
            </div>
        </div>
    </div>
  `
}
function search_personaje(personaje_name) {
  for(let i = 0; i<personajes.length; i++) {
    //console.log(personajes[i].name)
    
    if(personajes[i].name == personaje_name) {
      return personajes[i]
    }else{
        containerTarget.innerHTML = '<p style="background-color: #24292F" class=" text-white text-center fs-5 fw-bold">No se encontraron resultados.</p>'
    }
  }
}

const crearhtml = () => {
    const elementoPadre = document.getElementById('ElementoPadre');
    // console.log(personajes)
    personajes.forEach((personaje) => {

        let randomColor = generateRandomColor()
        const elementoHijo = document.createElement("div");
        elementoHijo.classList.add("col-lg-3", "mb-4", "rounded");
        elementoHijo.innerHTML = `<div data-personaje='${JSON.stringify(personaje)}' onclick="exampleOnclick(this)"><div style="background: ${randomColor}" class="rounded"><img class = "w-100 mb-4 rounded card-img" src="${personaje.ThumbnailImage}" data-id = "personaje-${personaje.name}">
        <div class="d-flex justify-content-center">
            <h5 class="card-title mb-4 text-white" data-id = "personaje-${personaje.name}">${personaje.name}</h5>
        </div></div></div>
        `;
        elementoPadre.appendChild(elementoHijo);
    });
};

function exampleOnclick(btn) {
    var name = btn.innerHTML;
    let personaje = JSON.parse(btn.dataset.personaje)
    // console.log(personaje)
  
    var exampleModal = getExampleModal();
    // console.log(name)
  
    // Init the modal if it hasn't been already.
    if (!exampleModal) { exampleModal = initExampleModal(); }
  
    var html =
        '<div class="modal-content" style="background: rgb(254, 193, 14)">'+
            '<div class="modal-header">'+
                '<h2 class="modal-title text-primary" id="exampleModalLabel">'+personaje.name+'</h2>'+
                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
            '</div>'+
            '<div class="modal-body">' +
                    '<div class="text-white"><h5 class="card-text text-black">Tamaño:</h5> '+personaje.height+'cm</div>'+ '</br>'+
                    '<div class="text-white"><h5 class="card-text text-black">Habilidades:</h5> '+personaje.abilities+'</div>'+ '</br>'+
                    '<div class="text-white"><h5 class="card-text text-black">Debilidades:</h5> '+personaje.weakness+'</div>'+ '</br>'+
                    '<div class="text-white"><h5 class="card-text text-black">Tipo:</h5> '+personaje.type+'</div>'+ 
                '<div>'+ '<img src="'+personaje.ThumbnailImage +'" class="position-absolute top-50 start-50" alt="...">' + '</div'+
            '</div>' +
        '</div>';
  
    setExampleModalContent(html);
    //console.log("Hola, si funciona")
    // Show the modal.
    jQuery(exampleModal).modal('show');
}
  
function getExampleModal() {
    return document.getElementById('exampleModal');
}
  
function setExampleModalContent(html) {
    getExampleModal().querySelector('.modal-content').innerHTML = html;
}
  
function initExampleModal() {
    var modal = document.createElement('div');
    modal.classList.add('modal', '-dialog');
    modal.setAttribute('id', 'exampleModal');
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'exampleModalLabel');
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML =
          '<div class="modal-dialog modal-dialog-centered" role="document">' +
            '<div class="modal-content border border-primary"></div>' +
          '</div>';
    document.body.appendChild(modal);
    return modal;
}

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    const rbgColor = `rgb(${r},${g},${b})`;
    return rbgColor;
};