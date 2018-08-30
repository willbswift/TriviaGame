
//load stuff
$(document).ready(function () {

  //establish questions as objects
  let question0 = {
    question: "Who represented Humanity when they made first contact with the Vulcans?",
    choice: ["Doctor Zefram Cochrane", "Colonel Phillip Green", "Doctor Henry Archer", "Doctor Emory Erickson"],
    correctButton: "aChoice",
    correct: "aChoice"
  };

  let question1 = {
    question: "Which Human was key to arranging an alliance between the Vulcans and the Andorians?",
    choice: ["Admiral Maxwell Forrest", "Captain Jonathan Beckett Archer", "Captain Jean-Luc Picard", "Captain Erika Hernandez"],
    correct: "bChoice"
  };

  let question2 = {
    question: "What year was the United Federation of Planets founded in?",
    choice: ["2161 CE", "2155 CE", "2063 CE", "2256 CE"],
    correct: "aChoice"
  };

  let question3 = {
    question: "What battle started the first Federation-Klingon war?",
    choice: ["Battle of Vulcanis", "Battle of Organia", "Battle of T'Kuvma", "Battle of the Binary Stars"],
    correct: "dChoice"
  };

  //** REST OF QUESTIONS GO HERE

  //establish variables
  let allQuestions = [question0, question1, question2, question3 /*update question list!*/];
  let currentQuestion;
  let questionAnswered = false;
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let timeOnTimer = 20;
  let i = -1;
  let percent;

  //  Variable that will hold our setInterval that runs the timer
  let intervalId;
  // prevents the timer from being sped up unnecessarily
  let clockRunning = false;

  //code to start master timer
  // Our timer object
  let timer = {
    time: timeOnTimer,
    // Use setInterval to start the count here and set the clock to running.
    start: function () {
      // Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(timer.count, 1000);
        clockRunning = true;
      }
    },
    stop: function () {
      // Use clearInterval to stop the count here and set the clock to not be running.
      clearInterval(intervalId);
      clockRunning = false;
    },
    count: function () {
      // increment time by 1, remember we cant use "this" here.
      timer.time--;
      // Get the current time, pass that into the stopwatch.timeConverter function,
      //       and save the result in a variable.
      let converted = timer.timeConverter(timer.time);
      console.log(converted);
      // Use the variable we just created to show the converted time in the "display" div.
      $("#timer").text(converted);
      if (timer.time === 0) {
        console.log(timer.time);
        timesUp();
      }
    },
    timeConverter: function (t) {
      let minutes = Math.floor(t / 60);
      let seconds = t - (minutes * 60);
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
      return minutes + ":" + seconds;
    }
  };

  function timesUp() {
    console.log('Hello');
    wrongAnswers = wrongAnswers + 1;
    chosen()
    $(".status").html("Time has expired");
    //code to present 'times up' pic
    $(".timesup").show();
    //code to prevent more questions being picked
    questionAnswered = true;

    if (questionAnswered === true && i < allQuestions.length - 1) {
      setTimeout(function () {
        //code to activate next question
        initializeQuestion();
      }, 5000);
    }
    if (questionAnswered === true && i >= allQuestions.length - 1) {
      gameOver();
    }
  }



  //game reset code
  function initializeGame() {
    //code to allow answers to be picked
    i = -1;
    correctAnswers = 0;
    wrongAnswers = 0;
    $(".question").show();
    $(".instructions").show();
    $(".score").hide();
    $(".timesup").hide();
    $(".status").hide();
    $(".failure").hide();
    $(".success").hide();
    if (!clockRunning) {
      intervalId = setInterval(timer.count, 1000);
      clockRunning = true;
    }
    if (questionAnswered === true) {
      questionAnswered = false;
    }
  };

  //question reset code
  function initializeQuestion() {
    //create a function to select each question and present it
    //create code to present each question and answers in turn
    i = i + 1;
    timer.time = timeOnTimer;
    console.log(i);
    $(".answer").show();
    $(".answer").prop('disabled', false);
    $(".timesup").hide();
    $(".status").hide();
    $(".failure").hide();
    $(".success").hide();
    $("#timer").text("00:30");
    if (!clockRunning) {
      intervalId = setInterval(timer.count, 1000);
      clockRunning = true;
    }
    $(timer.start);
    if (questionAnswered === true) {
      questionAnswered = false;
    }
    //code to allow answers to be picked
    currentQuestion = allQuestions[i].question;
    console.log(currentQuestion);
    $(".question").html(currentQuestion);
    currentAChoice = allQuestions[i].choice[0];
    console.log(currentAChoice);
    $("#aChoice").html(currentAChoice);
    currentBChoice = allQuestions[i].choice[1];
    console.log(currentBChoice);
    $("#bChoice").html(currentBChoice);
    currentCChoice = allQuestions[i].choice[2];
    console.log(currentCChoice);
    $("#cChoice").html(currentCChoice);
    currentDChoice = allQuestions[i].choice[3];
    console.log(currentDChoice);
    $("#dChoice").html(currentDChoice);
    correctChoice = allQuestions[i].correct;
    console.log(correctChoice);
  };

  function chosen() {
    //stops timer
    $(timer.stop);
    clockRunning = false;
    //code to prevent more questions being picked
    $(".answer").prop('disabled', true);
    //hide other answers
    $(".answer").hide();
    //show correct answer
    $("[value='" + correctChoice + "']").show();
    //show result info
    $(".status").show();
    //code to show score
    $(".score").show();
    console.log(correctAnswers);
    console.log(wrongAnswers);
    percent = correctAnswers * 100 / (correctAnswers + wrongAnswers);
    console.log(percent)
    $(".score1").html("Correct Answers: " + correctAnswers);
    $(".score2").html("Incorrect Answers: " + wrongAnswers);
    $(".score3").html("Percentage Correct: " + percent + "%");
  };

  function gameOver() {
    console.log("GAME OVER");
    setTimeout(function () {
      $(".instructions").hide();
      $(".question").hide();
      $(".answer").hide();
      $(".success").hide();
      $(".failure").hide();
      $(".current").hide();
      $(".status").html("Press any key to take the test again.");
      document.onkeyup = function (event) {
        initializeGame();
        initializeQuestion();
      }
    }, 5000);
  }

  //start game (over)
  initializeGame();
  initializeQuestion();

  $('.answer').bind('click', function (evt) {

    if ($(this).val() === correctChoice) {
      console.log("Correct!");
      correctAnswers = correctAnswers + 1;
      chosen();
      $(".status").html("Correct! A Starfleet Officer's first duty is to the truth!");
      $(".success").show();
      questionAnswered = true;
      console.log(questionAnswered);


    }
    else {
      wrongAnswers = wrongAnswers + 1;
      console.log("loser!");
      chosen();
      $(".status").html("Incorrect. See above for correct answer. Insufficient facts always invite danger.");
      //code for duration
      $(".failure").show();
      questionAnswered = true;
      console.log(questionAnswered);
    }

    if (questionAnswered === true && i < allQuestions.length - 1) {
      //code for duration
      setTimeout(function () {
        //code to activate next question
        initializeQuestion();
      }, 5000);
    }
    //code to reset game
    if (questionAnswered === true && i >= allQuestions.length - 1) {
      gameOver();
    }
  });
});








