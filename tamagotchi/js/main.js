function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function print(hambre, years) {
    return `
    ,d                                                                     
    88                                                                      
    MM88M ,adPPYYba, 88,dPYba,,adPYba,  ,adPPYYba,  ,adPPYb,d8  ,adPPYba,   
    88    ""     \`Y8 88P'   "88"    "8a ""     \`Y8 a8"    \`Y88 a8"     "8a  
    88    ,adPPPPP88 88      88      88 ,adPPPPP88 8b       88 8b       d8  
    88,   88,    ,88 88      88      88 88,    ,88 "8a,   ,d88 "8a,   ,a8"  
    "Y888 \`"8bbdP"Y8 88      88      88 \`"8bbdP"Y8  \`"YbbdP"Y8  \`"YbbdP"'   
                                                    aa,    ,88              
                                                     "Y8bbdP"               
                                    
                    88          88  
    ,d              88          ""      HAMBRE = ${hambre}
    88              88                  EDAD = ${years}
    MM88M ,adPPYba, 88,dPPYba,  88      Energia Vital = ${12}
    88   a8"     "" 88P'    "8a 88      Energia Vital = ${12}
    88   8b         88       88 88      Energia Vital = ${12}
    88,  "8a,   ,aa 88       88 88      Energia Vital = ${12}
    "Y888 \`"Ybbd8"' 88       88 88  
                                    `
}

const tamagotchi = {
    hambre: 100,
    comer: function() {
        this.hambre -= 10;
    },
}
function tamagotchiFun(input) {
    switch (input) {
        case 1:
            tamagotchi.comer()
            break;
        default:
            break;
    }
}
const tamagotchiHTML = document.getElementById("tamagotchi")
const tamagotchiData = document.getElementById("tamagotchiData")

async function main() {
    let y = 0;
    let x = 0
    let month = 0
    let year;
    while (month < 1000) {
        year = Math.floor(month / 12)
        y = Math.floor(year / 13)
        x = year % 13
        tamagotchiHTML.style.left = (-19 * x * 2) + "px"
        tamagotchiHTML.style.top = (-17 * y) + "px"
        let p = document.createElement("p")
        tamagotchiData.innerHTML = print(tamagotchi.hambre, year)
        await sleep(100)
        month ++
        if (year === 5) break;
    }
    tamagotchiData.innerHTML = "SU TAMAGOTCHI HA MUERTO"
}

main()