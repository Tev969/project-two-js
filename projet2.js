const prompt = require("prompt-sync")();


let questOne = {
  Question: "Devinez la capital de la France ? \n",
  Reponses: ["Paris \n", "Berlin \n", "Stockolm \n", "Madrid \n"],
};
questOne.goodAnswer = questOne.Reponses[0];


let questTwo = {
  Question: "Pointure de Pascal ? \n",
  Reponses: ["38 \n", "44 \n", "40 \n", "43 \n"],
};
questTwo.goodAnswer = questTwo.Reponses[3];


let questThree = {
  Question: "Signe astro de Pascal ? \n",
  Reponses: ["Bélier \n", "Taureau \n", "Cancer \n", "Chameau \n"],
};
questThree.goodAnswer = questThree.Reponses[2];


let questFour = {
  Question: "Plat préferé de pascal  ?? \n",
  Reponses: ["Macdo \n", "Pâte à l'eau \n", "Raclette \n", "Tartiflette \n"],
};
questFour.goodAnswer = questFour.Reponses[3];

let questFive = {
     Question: "Embleme de Paris ?? \n",
     Reponses: ["Tour Eiffel \n", "Musée grevin \n", "Ratatouilles \n", "oignons \n"],
   };
   questFive.goodAnswer = questFive.Reponses[0];

let tab = [questOne, questTwo, questThree, questFour, questFive];
let score = 0;


for (let i = 0; i < tab.length; i++) {
  console.log(tab[i].Question);
  for (let j = 0; j < tab[i].Reponses.length; j++) {
    console.log(tab[i].Reponses[j]);
  }
  let choice = parseInt(prompt("Choisit une réponses (0 etant le premier choix) 0 , 1 , 2 , 3 --> "));
  choice = tab[i].Reponses[choice]
  if (choice === tab[i].goodAnswer) {
      console.log("Bravo");
      score = score + 1;
     }
     else {
          console.log("Incorrect !!");
     }
}
console.log("Pas mal !! Votre ton score sur 5..  --->" + score +"/5");








if (choice == 0) {
     let random = getRandom(0, 1);
     if (random === playerOne.atks[choice].precision) {
       console.log(
         "Le " +
           playerBot.name +
           " perd " +
           player.atks[choice].puissance +
           " PV \n"
       );
       playerBot.life = playerBot.life - playerBot.atks[choice].puissance;
       console.log("Il lui reste " + playerBot.life + " PV \n");
     }
   } 
   
   else { console.log( "Votre attaque n'a pas atteint la cible !! Il lui reste " +playerBot.life + "PV.."
     );
   }

