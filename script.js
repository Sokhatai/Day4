function exo() {
    var text = document.getElementById("input").value;      /* On récupère le texte entré */
    let cards = text.split(/\d+:/g); 
    console.log(cards);
    cards.shift();
    let result = 0;
    let result2 = 0;
    for (let card of cards){                                    /* première partie de l'exo de la journée */
        let winningNumbers = card.split("|")[0].match(/\d+/g); /* On sépare les numéros gagnants et les autres, ensuite on les mets directement dans des tableaux */
        let numbers= card.split("|")[1].match(/\d+/g);
        let intersection = winningNumbers.filter(val => numbers.includes(val));     /* On compare les numéros communs (donc gagnant) */
        let worthCard = 0;

        if (intersection.length > 0){
        worthCard = 2**(intersection.length-1);

    }
    result = result + worthCard;

    for (let card of cards){                                    /* deuxième partie de l'exo de la journée */
        let winningNumbers = card.split("|")[0].match(/\d+/g); /* On sépare les numéros gagnants et les autres, ensuite on les mets directement dans des tableaux */
        let numbers= card.split("|")[1].match(/\d+/g);
        let intersection = winningNumbers.filter(val => numbers.includes(val));     /* On compare les numéros communs (donc gagnant) */
        for (let number of intersection.length){

        }
    }
    }
    
    
    
    
    let showResult = document.getElementById("result");
    showResult.innerHTML = "<p>Le résultat de la première partie de l'exo est " + result;/* On affiche le résultat obtenu */
}



const selection = document.getElementById("input");
selection.addEventListener("change", exo);


