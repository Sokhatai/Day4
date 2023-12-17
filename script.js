function exo() {
    var text = document.getElementById("input").value;      /* On récupère le texte entré */
    let cards = text.split(/\d+:/g); 
    console.log(cards);
    cards.shift();
    let result = 0;

    for (let card of cards){
        let winningNumbers = card.split("|")[0].match(/\d+/g); /* On sépare les numéros gagnants et les autres, ensuite on les mets directement dans des tableaux */
        let numbers= card.split("|")[1].match(/\d+/g);
        let intersection = winningNumbers.filter(val => numbers.includes(val));
        let worthCard = 0;

        if (intersection.length > 0){
        worthCard = 2**(intersection.length-1);

    }
    result = result + worthCard;
    }
    
    
    
    
    let showResult = document.getElementById("result");
    showResult.innerHTML = "<p>Le résultat de la première partie de l'exo est " + result;/* On affiche le résultat obtenu */
}



const selection = document.getElementById("input");
selection.addEventListener("change", exo);



/*         let gameId = game.split(":")[0];               
let grabCubes = game.split(":")[1];                   
let cubesByPart = grabCubes.split(";");
for (let cubes of cubesByPart){
    console.log(cubes);
}*/