const main = document.getElementById("main");
var curr = 0;
var max = 1;
var locked = false;
var time = 3000;

fetch("./alumnos.json")
.then(promise => promise.json())
.then(alumnos => {
    alumnos.sort((a,b) => (Math.random()-0.5)).forEach((alumno, id) => {
    if (alumno.nombre) {
        articulo = document.createElement("article");
        main.innerHTML += article(id, alumno.fotos, alumno.lugar, alumno.nombre, alumno.descripcion);
        max++;
    }
})
})
.then(__ => {
    document.querySelectorAll(".img").forEach(carrousel)
})

function carrousel(dotImg) {
    let arrayImg = dotImg.querySelectorAll("img")
    if (arrayImg.length > 1){
        let currImg = 0;
        arrayImg.forEach(imagen => {
            imagen.style.opacity = "0"
            imagen.animate([{opacity:"1"}, {opacity:"1", offset:1/arrayImg.length}, {opacity:"0", offset:1/arrayImg.length} , {opacity:"0"}], {duration:time*arrayImg.length, delay:currImg*time, iterations: Infinity})
            currImg++;
        })
}
}

function after() {
    if (curr !== max && !locked) {
        locked = true;
        curr++;
        main.style.transform = `translateY(${-curr*100}vh)`;
        locked = false;
    }
}
function before() {
    if (curr !== 0 && !locked) {
        locked = true;
        curr--;
        main.style.transform = `translateY(${-curr*100}vh)`;
        locked = false;
    }
}


function article(id, fotos, lugar, nombre, descripcion) {
    [color, color2] = generateClr()
    return `<article id="${id}">
    <div class="img" style="--bgn: ${color};--bgn2: ${color2}">
    `+
        fotos.reduce((acum, foto) => (acum + `<img src="${foto}" alt="imagen de ${lugar}" >`), "")
    +`
    </div>
    <div class="text">
        <h2>${lugar}</h2>
        <p>${descripcion}</p>
        <h3>${nombre}</h3>
    </div>
</article>`
}


function generateClr() {
    let hue = Math.floor(Math.random()*360)
    return [`hsl(${hue}, 50%, 50%)`, `hsl(${hue + 30}, 50%, 50%)`]
}


document.addEventListener('keydown',  logKey);
function logKey(e) {
    if (e.code === "ArrowDown") after()
    if (e.code === "ArrowUp") before()
}


document.addEventListener("wheel", mouseResponsive)
function mouseResponsive(mouseEvent) {

    if(mouseEvent.deltaY > 0) {
        after();
    } else if (mouseEvent.deltaY < 0) {
        before();
    }
}

