var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scorbord_div = document.querySelector(".score-bord");
var result_h5 = document.querySelector(".result>h5");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissor_div = document.getElementById("s");
var choices_div = document.getElementsByClassName("choices");





function getComputerChoice() {
    var choices = ["r", "p", "s"];
    var nbRandom = Math.floor(Math.random() * 3);
    return choices[nbRandom];

}

function convertToWord(letter) {
    if (letter === 'r') return 'rock';

    if (letter === 'p') return 'paper';

    return 'scissor';
}


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_h5.innerHTML = convertToWord(userChoice) + '(user)' + " beat " + convertToWord(computerChoice) +  " user win";

}

function lose(userChoice, computerChoice) {

    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_h5.innerHTML = convertToWord(computerChoice) + '(computer)' + " beat " + convertToWord(userChoice) + " user lost";


}

function draw(userChoice, computerChoice) {
    result_h5.innerHTML = convertToWord(computerChoice) + " vs " + convertToWord(userChoice) + " draw ";

}

function game(userChoice) {
    var computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        draw(userChoice, computerChoice);
    } else if (userChoice === "r") {
        if (computerChoice === "p") {
            win(userChoice, computerChoice);

        } else {
            lose(userChoice, computerChoice);

        }
    } else if (userChoice === "p") {
        if (computerChoice === "r") {
            win(userChoice, computerChoice);

        } else {
            lose(userChoice, computerChoice);

        }
    } else {
        if (computerChoice === "r") {
            if (userChoice === "s")
                lose(userChoice, computerChoice);

        } else {
            win(userChoice, computerChoice);

        }
    }
    if (userScore === 3) {
        userScore = 0;
        result_h5.innerHTML = convertToWord(userChoice) + '(user)' + " beat " + convertToWord(computerChoice) + " user win";
        display();
        

    } else if (userScore === computerScore) {
        result_h5.innerHTML = convertToWord(computerChoice) + " vs " + convertToWord(userChoice) + " draw ";


    } else if(computerScore === 3) {

        computerScore = 0;
        result_h5.innerHTML = convertToWord(computerChoice) + '(computer)' + " beat " + convertToWord(userChoice) + " user lost";
        
        display();
    }
    
  

}



function display(){ 
    document.getElementsByClassName("choices")[0].style.display = "none";
}



function reload() {
    location.reload();
}


function main() {

    rock_div.addEventListener('click', function () {
        game('r');
    });

    scissor_div.addEventListener('click', function () {
        game('s');
    });
    paper_div.addEventListener('click', function () {
        game('p');
    });

}

main();





// exercice of the  seventh weak    




/*//exercice 3 : nobre pair

function even(number) {
    let reminder = number % 2;
    if (reminder == 0) {
        console.log("true");
    } else if (reminder == Math.round()) {
        console.log(Math.round());
    } else {
        console.log("false");
    }
}
 
even(0);


//Exercice 4 : Vous avez dit factorielle ?


function factorial(number)
{

  if (number === 0)
 {
    return 1;
 }else if(number !== isInteger()){
     return "error";
 }
  return x * factorial(number-1);
        
}
console.log(factorial(4));


//.Exercice 5 : Les tirets ça compte !


 function myReplace(str){
    if (str == "-") return "_"
    return "errur";
  }
myReplace("-");

//Exercice 6 : Entrainez-vous avec les tableaux

var listeCourse = ["tomate", "l'eau", "café", "huile", "la banane", "du hté"];
function listeCourse(){
   
}
 console.log("je voudrais acheter " + listeCourse[4]); 




//Exercice 7 : Le tableau d'un homme


var personne = ["jhone", "nicola", 28, "02/08/1990"];
      personne.push("il habite à lille");
      console.log(personne[4]);

   
    var personne = ["jhone", "nicola", 28, "02/08/1990", "l habite à lille"];   
    personne.forEach(function (personne) {

    console.log(personne);

});

var personne = ["jhone", "nicola", 28, "02/08/1990", "l habite à lille"];

for(var i = 0; i < personne.length; i++){
    console.log(personne[i]);
}


//Exercice 8 : Le max d'un tableau



var array = [20, 50, 200, 100, 60, 10];
    function max(arr){
var max = arr.reduce(function(a, b){
return Math.max(a, b)});
return (max);
}console.log(max(array));

//function for string

var str = ["they", "have", "to", "go", "right", "now"];
str.sort(function (a, b) { return b.length - a.length })[0];




/* while (userScore < 3 && computerScore < 3){
    var userChoice = prompt("Choisissez pierre, feuille, ou sciseaux").toLocaleLowerCase();
    if(userChoice !== "pierre" && userChoice !== "feuille" && userChoice !== "sciseaux"){
      console.log ("rentrez une valeur correcte");
    } else {


    var nbRandom = Math.floor(Math.random()*3);
    if(nbRandom === 0){
      computerChoice = "pierre";
    }else if(nbRandom === 1){
      computerChoice = "feuille";
    }else{
      computerChoice = "sciseaux";
    }

    if (userChoice === computerChoice){
      console.log("Egalité");
    }
    else if (userChoice === "pierre"){
      if (computerChoice === "feuille"){
        console.log("computerScore 1 point");
        computerScore++;
      } else {
        console.log("userScore 1 point");
        userScore++;
      }
    }
    else if (userChoice === "feuille"){
      if (computerChoice ==="pierre"){
        console.log("userScore 1 point");
        userScore++;
      } else {
        console.log("computerScore 1 point");
        computerScore++;
      }
    } else {
      if (computerChoice ==="pierre") {
        console.log("computerScore 1 point");
        computerScore++;
      } else {
        console.log("userScore 1 point");
        userScore++;
      }
    }
  }
 
 
 
  if (userScore === 3 || computerScore === 3){
        break;
}else{
  break;
}
 
     
}*/
