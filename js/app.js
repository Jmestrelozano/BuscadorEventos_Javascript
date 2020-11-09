let form = document.getElementById("buscarBtn")
let API = new Api();

let UI = new Interfaz();
API.llamarApi()
let spinner = document.getElementById("contenedor-spinner")
form.addEventListener("click", mostrarLLamado);

function mostrarLLamado(e) {
    e.preventDefault();
    let buscadorEvento = document.getElementById("evento").value
    console.log(buscadorEvento)

    let eventos = document.getElementById("listado-categorias");
    let seleccionEvent = eventos.options[eventos.selectedIndex].value

    console.log(seleccionEvent)

    if (buscadorEvento !== "") {
        UI.eliminarTemplate();
        spinner.style.display = "block"
        setTimeout(function() {
            spinner.style.display = "none"
            API.llamarNombre(buscadorEvento, seleccionEvent)
        }, 3000)

    } else {
        UI.mensajeError("FALTA ALGUN CAMPOR POR ELIGIR O LLENAR");
    }
}