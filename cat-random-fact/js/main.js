const fact = 
    fetch("https://catfact.ninja/fact")
    .then(res => res.json())
    .then((json) => {
        const textoDelGatoEnIngles = json.fact;
        console.log(textoDelGatoEnIngles + "\n");
        fetch("https://libretranslate.de/translate", {
            method: "POST",
            body: JSON.stringify({
            q: textoDelGatoEnIngles,
            source: "en",
            target: "es",
            }),
            headers: { "Content-Type": "application/json" },
            })
        .then((res) => res.json())
        .then((json) => {
            p = document.createElement("h2")
            p.innerHTML = json.translatedText
            document.getElementById("cat").appendChild(p)
        });
        }); 

const img =
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(json => json[0].url)
    .then(img => {
        image = document.createElement("img")
        image.src = img
        div = document.createElement("div")
        div.appendChild(image)
        document.getElementById("cat").appendChild(div)})