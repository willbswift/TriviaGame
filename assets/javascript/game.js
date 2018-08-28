
//There will be four crystals displayed as buttons on the page.

  //load display
$(document).ready(function() {

  //establish variables
  let correctAnswers = 0;
  let wrongAnswers = 0;

  //establish questions as objects
let question0 = {
  question: "Who represented Humanity when they made first contact with the Vulcans?",
  aChoice: "Doctor Zefram Cochrane",
  bChoice: "Colonel Phillip Green",
  cChoice: "Doctor Henry Archer",
  dChoice: "Doctor Emory Erickson",
  correct: "aChoice"
}; 

let question1 = {
  question: "Which Human was key to arranging an alliance between the Vulcans and the Andorians?",
  aChoice: "Admiral Maxwell Forrest",
  bChoice: "Captain Jonathan Beckett Archer",
  cChoice: "Captain Jean-Luc Picard",
  dChoice: "Captain Erika Hernandez",
  correct: "bChoice"
}; 

let question2 = {
  question: "What year was the United Federation of Planets founded in?",
  aChoice: "2161 CE",
  bChoice: "2155 CE",
  cChoice: "2063 CE",
  dChoice: "2256 CE",
  correct: "aChoice"
}; 

let question3 = {
  question: "What battle started the first Federation-Klingon war?",
  aChoice: "Battle of Vulcanis",
  bChoice: "Battle of Organia",
  cChoice: "Battle of T'Kuvma",
  dChoice: "Battle of the Binary Stars",
  correct: "dChoice"
}; 

let allQuestions = [question0, question1, question2, question3];

//create loop to present each question and answers in turn

i=2;
  currentQuestion = allQuestions[i].question;
    console.log(currentQuestion);
  $("#question").html(currentQuestion);
  currentAChoice = allQuestions[i].aChoice;
    console.log(currentAChoice);
  $("#aChoice").html(currentAChoice);
  currentBChoice = allQuestions[i].bChoice;
    console.log(currentBChoice);
  $("#bChoice").html(currentBChoice);
  currentCChoice = allQuestions[i].cChoice;
    console.log(currentCChoice);
  $("#cChoice").html(currentCChoice);
  currentDChoice = allQuestions[i].dChoice;
    console.log(currentDChoice);
  $("#dChoice").html(currentDChoice);

  correctChoice = allQuestions[i].correct;
  console.log(correctChoice);

$('.answer').bind('click', function (evt) {
  if ($(this).val() == correctChoice) {
    console.log("Correct!");
    correctAnswers = correctAnswers +1;
    $(".status").text("Correct! A Starfleet Officer's first duty is to the truth!");
  }
  else {
    wrongAnswers = wrongAnswers +1;
    console.log("loser!");
    $(".status").text("Wong! Insufficient facts always invite danger.");
  }

  console.log(correctAnswers);
  console.log(wrongAnswers);

//make code so you can't answer more then once.
//"Time is the fire in which we burn."


})



//create a function to select each question and present it


/*
function nextQuestion () {
  let randomQuestion = Math.floor(Math.random() * (allQuestions.length));
  document.getElementById("question").innerHTML = alliance[randomQuestion];
}


*/

// create code to present Success pic or Failure pic and advance to next question
//create timer for each question
//create core to present 'out of time' if that event occurs



/*
    $(".sabrepic").hide();
    $(".sabrebroke").hide();
    $(".unbuilt").show();
    $("figure").show();

    //The random target number should be between 19 - 120.
  let targetMin = 19;
  let targetMax = 120;

    //Each crystal should have a random hidden value between 1 - 12.
  let crystalMin = 1;
  let crystalMax = 12;

  let targetNumber;
  let adeganNumber;
  let jedhaNumber;
  let ilumNumber;
  let ruusanNumber;
  let currentNumber = 0;
  let sabresBuilt = 0;
  let sabreTrys = 0;

  function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

    //The game restarts whenever the player wins or loses. (do not refresh the page as a means to restart the game.)
    // The target number and current number should both reset, but the total wins and loses should remain.
  function initializeGame() {
    $(".unbuilt").show();
    $(".sabrepic").hide();
    $(".sabrebroke").hide();
    $("figure").show();
    $(".status").html("");
    currentNumber = 0;
    targetNumber = "";
    adeganNumber = "";
    jedhaNumber = "";
    ilumNumber = "";
    ruusanNumber = "";
    $(".target, .current").empty();

      //generate random target number
    targetNumber = random(targetMin, targetMax);
    console.log(targetNumber);

      //The player will be shown the random target number at the start of the game.  
    $(".target").text(targetNumber);

      //generate random values for crystals. game will hide this amount until the player clicks a crystal.
    adeganNumber = random(crystalMin, crystalMax);
      console.log(adeganNumber);
    jedhaNumber = random(crystalMin, crystalMax);
      console.log(jedhaNumber);
    ilumNumber = random(crystalMin, crystalMax);
      console.log(ilumNumber);
    ruusanNumber = random(crystalMin, crystalMax);
      console.log(ruusanNumber);
  };

  initializeGame();

    //When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
  $('img').bind('click', function (evt) {

    if (currentNumber < targetNumber) {
      if($(this).attr('id') == 'adegan') {
        currentNumber = currentNumber + adeganNumber;
        console.log(currentNumber);
      }
      if($(this).attr('id') == 'jedha') {
        currentNumber = currentNumber + jedhaNumber;
        console.log(currentNumber);
      }
      if($(this).attr('id') == 'ilum') {
        currentNumber = currentNumber + ilumNumber;
        console.log(currentNumber);
      }
      if($(this).attr('id') == 'ruusan') {
        currentNumber = currentNumber + ruusanNumber;
        console.log(currentNumber);
      }

        //When they do click one, update the player's score counter.
      $(".current").text(currentNumber);

      //The player wins if their total score matches the random number from the beginning of the game.
    if (currentNumber === targetNumber) {
      console.log("You Win!")
      sabresBuilt = sabresBuilt +1;

    console.log("Built " + sabresBuilt);
    //**load a picture of a lit sabre???  
      $(".unbuilt").hide();
      $("figure").hide();
      $(".sabrepic").show();
      $(".status").html("You have constructed a new lightsabre!")
        .append("<br><em>Indeed you are powerful as the Emperor has foreseen.<em>")
        .append("<br>Hit any key to build your next lightsabre.");

        let audioElement = document.createElement("audio");
          audioElement.setAttribute("src", "assets/sound/sabreon.wav");
          audioElement.play();

    document.onkeyup = function(event) {
      initializeGame();
    }

  }

      //The player loses if their score goes above the random number.
    else if (currentNumber > targetNumber) {
      console.log("You Lose!")
      sabreTrys = sabreTrys +1;
      console.log("Failure" + sabreTrys);
      $(".unbuilt").hide();
      $("figure").hide();
      $(".sabrebroke").show();
      $(".status").html("The Lightsabre has exploded!")
        .append("<br><em>The greatest teacher, failure is.<em>")
        .append("<br>Hit any key to build another lightsabre.");

        //explosion sound FX
      let audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/sound/lasrhit4.mp3");
        audioElement.play();

        //load a picture of a broken sabre???  
      document.onkeyup = function(event) {
        initializeGame();
      }
    }

    //The app should show the number of games the player wins and loses.
    $(".sabres").text(sabresBuilt);
    $(".failures").text(sabreTrys);

  }
})

*/
}


);