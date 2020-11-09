class Api {

    llamarApi() {
            let url = `https://www.etnassoft.com/api/v1/get/?category=libros_programacion`
            let array = [];
            fetch(url, {
                    method: "GET",
                })
                .then(response => response.json())
                .then(function consumir(res) {
                    console.log(res)
                    let listado = document.getElementById("listado-categorias")
                    res.forEach(function ver(resultado) {
                        let categorias = resultado.categories

                        categorias.forEach(function mostrar(response) {
                            array.push(response)
                            let filtrar = {};
                            array = array.filter(o => filtrar[o.category_id] ? false : filtrar[o.category_id] = true);
                        })
                    });
                    array.forEach(function valor(mostrar) {
                        let opciones = document.createElement("option")
                        opciones.id = mostrar.category_id
                        opciones.appendChild(document.createTextNode(mostrar.name))
                        listado.appendChild(opciones)
                    })
                })
                .catch(error => console.log(error))
        }
        // https://www.etnassoft.com/api/v1/get/?book_author=Annika_Richterich&category=algoritmos
    llamarNombre(buscadorEvento, seleccionEvent) {
        let url = `https://www.etnassoft.com/api/v1/get/?book_author`
        if (buscadorEvento !== "") {
            url += `=${buscadorEvento}&`
        }
        if (seleccionEvent !== "") {
            url += `category=${seleccionEvent}`
        }

        fetch(url, {
                method: "GET",
            })
            .then(response => response.json())
            .then(function(res) {
                console.log(res)

                let htmlTemplate = "";

                res.forEach(function(respuesta) {
                    htmlTemplate += `
                    <div class="contenedor">
                    <img src="${respuesta.cover}">
                    <h2>${respuesta.title}</h2>
                <span>${respuesta.author}-${respuesta.language}</span>
                <p>${respuesta.content}</p>
                <h5>${respuesta.publisher}-${respuesta.publisher_date}</h5>
             
                </div>
                `
                    let resultado = document.getElementById("resultado-eventos")
                    resultado.appendChild = htmlTemplate
                    resultado.innerHTML = htmlTemplate
                    console.log(respuesta)
                })
            })
            .catch(error => console.log(error))
    }

}