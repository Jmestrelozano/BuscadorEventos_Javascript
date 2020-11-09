class Interfaz {

    mensajeError(mensaje) {
        let resultadoEvento = document.getElementById("resultado-eventos");

        let div = document.createElement("div")
        resultadoEvento.appendChild(div)
        div.classList.add("error")
        div.innerHTML = mensaje

        setTimeout(function() {
            document.querySelector(".error").remove();
        }, 3000)
    }

    eliminarTemplate() {
        let resultadoTemplate = document.getElementById("resultado");

        if (resultadoTemplate) {
            resultadoTemplate.remove();

        }
    }

}