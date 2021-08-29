const main = document.getElementById("main");
var curr = 0;
var max = -1;
var locked = false;

fetch("./alumnos.json")
.then(promise => promise.json())
.then(alumnos => {
    alumnos.forEach((alumno, id) => {
    articulo = document.createElement("article");
    main.innerHTML += article(id, alumno.foto, alumno.lugar, alumno.nombre, alumno.descripcion);
    max++;
})
})


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


function article(id, foto, lugar, nombre, descripcion) {
    [color, color2] = generateClr()
return `<article id="${id}">
    <div class="img" style="--bgn: ${color};--bgn2: ${color2}">
        <img src="${foto}" alt="imagen de ${lugar}" >
    </div>
    <div class="text">
        <h2>${lugar}</h2>
        <p>${descripcion}</p>
        <h3>${nombre}</h3>
    </div>
</article>`
}

function generateClr() {
    let hue = Math.floor(Math.random()*225)
    let hue2 = hue + 30
    return [`hsl(${hue}, 50%, 50%)`, `hsl(${hue2}, 50%, 50%)`]
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