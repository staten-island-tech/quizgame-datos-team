//giving each question a shortcut
function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var correct = 0;
  // for every correct question you get 1 more unit added to the value of "correct"
  if (question1 == "c") {
    correct++;
  }

  if (question2 == "a") {
    correct++;
  }

  if (question3 == "b") {
    correct++;
  }

  if (question4 == "c") {
    correct++;
  }

  if (question5 == "b") {
    correct++;
  }

  if (question6 == "3") {
    correct++;
  }

  if (question7 == "b") {
    correct++;
  }

  if (question8 == "b") {
    correct++;
  }

  if (question9 == "a") {
    correct++;
  }

  if (question10 == "b") {
    correct++;
  }

  var message = ["true russian", "medium true", "not russian at all"];
  var message = ["good job", "kinda good job", "bad job"];
  var images = ["img/happyface.png", "img/straightface.png", "img/sadface.png"];

  var range;

  //if amount of correct answers is less than 4 you get the bad prompt
  if (correct < 4) {
    range = 2;
  }
  //if amount of correct answers is greater than 3 and less than 8 you get the medium prompt
  if (correct > 3 && correct < 8) {
    range = 1;
  }
  //if amount of correct answers is greater than 7 you get the good prompt
  if (correct > 7) {
    range = 0;
  }
  //makes the previously invisble text now visible
  document.getElementById("after_submit").style.visibility = "visible";
  //depending on which range you get you get a different prompt displayed
  document.getElementById("message").innerHTML = message[range];
  //integrates the amount of correct answers into a sentence
  document.getElementById("number_correct").innerHTML =
    "You got " + correct + " correct.";
  // corrolates an image to the amount of questions you answers correctly
  document.getElementById("images").src = images[range];
}
