/* VARIABLES */
let boton = document.querySelector("button");
let input = document.querySelector("input");
let img = document.querySelector("img");

/* EVENTOS */
boton.addEventListener("click", cargarCiudad)

/* FUNCION */
function cargarCiudad() {
    if(input.value) {

        let ciudad = input.value;

        document.querySelector(".container").style.visibility = "visible";

        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=0b8e1496b093554453f4085521beca90&units=metric&lang=es", function(data) {
            
            let codigo = data.weather[0]["icon"];

            document.querySelector("#ciudad").textContent = data.name;

            document.querySelector("#temperatura").innerHTML = data.main.temp + "<sup>°C</sup>"

            img.setAttribute("src", "http://openweathermap.org/img/w/" + codigo + ".png");

            document.querySelector("#descripcion").textContent = data.weather[0].description;

            input.value = null;
        }) 
            
            .fail(function () {
                alert("Hey, no hemos encontrado el lugar que buscas, fijate que todo este escrito correctamente")
            })

    } else  {
        alert("Ingresa una Ciudad")
    }
}