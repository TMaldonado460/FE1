function Heroe(name, description, profilePic, backgroundPic) {
    this.name = name;
    this.description = description;
    this.profilePic = profilePic;
    this.backgroundPic = backgroundPic;
}



let batman = new Heroe("BATMAN", "Bruce Wayne es el único personaje que se identifica como Batman y aparece en Batman, Detective.\nComics, Batman y Robin, y Batman: The Dark Knight. Dick Grayson vuelve al manto de Nightwing.",
"./img/liga-justicia-batman-kO4H--1024x512@abc 1 (2).png", "./img/849bfede3a5193c34ab8a00379e64fa2 1.png")



let namea = document.getElementsByClassName("name")
namea[0].innerHTML = batman.name;
let profile = document.getElementsByClassName("profilepic")
profile[0].innerHTML = "<img src=\"" + batman.profilePic + "\">"

let thing = document.getElementById("testo")


// <img src="./img/849bfede3a5193c34ab8a00379e64fa2 1.png" alt="">
// <img src="./img/liga-justicia-batman-kO4H--1024x512@abc 1.png" alt="">
// BATMAN
// Bruce Wayne es el único personaje que se identifica como Batman y aparece en Batman, Detective
// Comics, Batman y Robin, y Batman: The Dark Knight. Dick Grayson vuelve al manto de Nightwing.