const fetch = require('node-fetch');
const jsonHelper = require("./jsonHelper")

let msj = jsonHelper.leerJson("msj")
console.log(msj[0]);
var output = []
msj.forEach(msg => {
    var thing = 0;
    fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
        q: msg.msg,
        source: "en",
        target: "es",
        }),
        headers: { "Content-Type": "application/json" },
        })
    .then((res) => res.json())
    .then((json) => {
        thing = json.translatedText;
        output.push({mensajito: thing})
        if (output.length === msj.length) {
            jsonHelper.escribirJson("msgES", output)
        }
    })
})