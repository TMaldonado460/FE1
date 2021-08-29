fetch("https://cors-anywhere.herokuapp.com/https://api.mangadex.org/manga")
.then(response => response.json())
.then(json => json.results)
.then(results => {
    h1 = document.createElement("h1")
    h1.innerHTML = (results[0].data.attributes.title.en)
    p = document.createElement("p")
    p.innerHTML = (results[0].data.attributes.description.en)
    main.appendChild(h1)
    main.appendChild(p)
    cover = results[0].relationships.find(x => x.type = "cover_art")
    console.log(cover);
    fetch(`https://cors-anywhere.herokuapp.com/https://api.mangadex.org/cover/${cover.id}` )
    .then(response => response.json())
    .then(json => console.log(json))
    img = document.createElement("img")
    img.src = `https://uploads.mangadex.org/covers/${results[0].data.id}/${cover.id}`
    main.appendChild(img)
})
.then(data => data)
.then(cover => {
    
    
})

document.getElementsByTagName
const main = document.getElementById("main")


