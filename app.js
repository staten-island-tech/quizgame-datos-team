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

  if (question1 == "a") {
    correct++;
  }

  if (question2 == "a") {
    correct++;
  }

  if (question3 == "a") {
    correct++;
  }

  if (question4 == "a") {
    correct++;
  }

  if (question5 == "a") {
    correct++;
  }

  if (question6 == "a") {
    correct++;
  }

  if (question7 == "a") {
    correct++;
  }

  if (question8 == "a") {
    correct++;
  }

  if (question9 == "a") {
    correct++;
  }

  if (question10 == "a") {
    correct++;
  }

  var message = ["good prompt", "medium prompt", "bad prompt"];

  var range;

  if (correct < 4) {
    range = 2;
  }

  if (correct > 3 && correct < 8) {
    range = 1;
  }

  if (correct > 7) {
    range = 0;
  }

  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("message").innerHTML = message[range];
  document.getElementById("number_correct").innerHTML =
    "You got " + correct + " correct.";
}
