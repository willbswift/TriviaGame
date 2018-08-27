
//There will be four crystals displayed as buttons on the page.

  //load display
$(document).ready(function() {

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

}
);