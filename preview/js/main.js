const main = document.getElementById("main");
var curr = 0;
var max = 0;

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
    if (curr !== max) {
        curr++;
        main.style.transform = `translateY(${-curr*100}vh)`;
    }
}
function before() {
    if (curr !== 0) {
        curr--;
        main.style.transform = `translateY(${-curr*100}vh)`;
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