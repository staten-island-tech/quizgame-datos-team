const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
<<<<<<< HEAD
  {
<<<<<<< HEAD
<<<<<<< HEAD
    question: "What is the captial of Russia?",
    choice1: "Moscow",
    choice2: "Saint Petersburg",
    choice3: "Vladivostok",
    choice4: "Sochi",
    answer: 1,
=======
=======
>>>>>>> parent of dd43a90 (yo)
    question: "What is 2 + 2?",
    choice1: "2",
    choice2: "4",
    choice3: "21",
    choice4: "17",
    answer: 2,
<<<<<<< HEAD
>>>>>>> parent of dd43a90 (yo)
=======
>>>>>>> parent of dd43a90 (yo)
  },
  {
    question: "The tallest building in the world is located in which city?",
    choice1: "Dubai",
    choice2: "New York",
    choice3: "Shanghai",
    choice4: "None of the above",
    answer: 1,
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    question: "Where can you find Machu Picchu?",
    choice1: "Columbia",
    choice2: "Bolivia",
    choice3: "Peru",
    choice4: "Chile",
    answer: 3,
  },
  {
    question: "Which state has the most volcanos?",
    choice1: "California",
    choice2: "Washington",
    choice3: "Hawaii",
    choice4: "Alaska",
    answer: 4,
  },
  {
    question: "Which country is the smallest in size?",
    choice1: "Grenada",
    choice2: "Nauru",
    choice3: "Monaco",
    choice4: "Vatican City",
    answer: 3,
=======
=======
>>>>>>> parent of dd43a90 (yo)
    question:
      "What percent of American adults believe that chocolate milk comes from brown cows?",
    choice1: "20%",
    choice2: "18%",
    choice3: "7%",
    choice4: "33%",
    answer: 3,
  },
  {
    question:
      "Approximately what percent of U.S. power outages are caused by squirrels?",
    choice1: "10-20%",
    choice2: "5-10%",
    choice3: "15-20%",
    choice4: "30%-40%",
    answer: 1,
<<<<<<< HEAD
>>>>>>> parent of dd43a90 (yo)
=======
>>>>>>> parent of dd43a90 (yo)
  },
];

const SCORE_POINTS = 100;
<<<<<<< HEAD
<<<<<<< HEAD
const MAX_QUESTIONS = 5;
=======
const MAX_QUESTIONS = 4;
>>>>>>> parent of dd43a90 (yo)
=======
const MAX_QUESTIONS = 4;
>>>>>>> parent of dd43a90 (yo)
=======
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
    },
    {
        question:
            "The tallest building in the world is located in which city?",
        choice1: "Dubai",
        choice2: "New York",
        choice3: "Shanghai",
        choice4: "None of the above",
        answer: 1,
    },
    {
        question: "What percent of American adults believe that chocolate milk comes from brown cows?",
        choice1: "20%",
        choice2: "18%",
        choice3: "7%",
        choice4: "33%",
        answer: 3,
    },
    {
        question: "Approximately what percent of U.S. power outages are caused by squirrels?",
        choice1: "10-20%",
        choice2: "5-10%",
        choice3: "15-20%",
        choice4: "30%-40%",
        answer: 1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4
>>>>>>> parent of b6bec7b (yo)

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

<<<<<<< HEAD

    return window.location.assign("/end.html");
  }

  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);
<<<<<<< HEAD

  acceptingAnswers = true;
};

=======

  acceptingAnswers = true;
};

>>>>>>> parent of dd43a90 (yo)
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
<<<<<<< HEAD
=======

    return window.location.assign("/end.html");
  }
=======
        return window.location.assign('/end.html')
    }
>>>>>>> parent of b6bec7b (yo)

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

<<<<<<< HEAD
startGame();
=======
>>>>>>> parent of dd43a90 (yo)

const highScoresList = document.querySelector("#highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
const username = document.querySelector("#username");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };

  highScores.push(score);

  highScores.sort((a, b) => {
    return b.score - a.score;
  });

  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
};
<<<<<<< HEAD
>>>>>>> parent of dd43a90 (yo)
=======
>>>>>>> parent of dd43a90 (yo)
=======
startGame()
>>>>>>> parent of b6bec7b (yo)
