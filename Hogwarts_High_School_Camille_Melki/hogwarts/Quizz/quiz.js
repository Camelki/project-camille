const question = document.getElementById("question");
const answerList = document.getElementById("answerList");
const nextButton = document.getElementById("nextButton");

let questions = [
  {
    question: "Who is the main character in the Harry Potter series?",
    answers: [
      "Ron Weasley",
      "Hermione Granger",
      "Albus Dumbledore",
      "Harry Potter"
    ],
    correctAnswer: "Harry Potter"
  },
  {
    question: "Who is the author of the Harry Potter books?",
  answers: [
      "J.K Rowling",
      "Stephen King",
      "George R.R Martin",
    ],
    correctAnswer: "J.K Rowling"
  },
  {
    question: "What is the name of the wizarding bank in Harry Potter series?",
    answers : [
    "Gringotts", 
    "Fortescue's",
     "Flourish & Blotts",
  ],
  correctAnswer: "Gringotts"
  }
  // Add more questions here
];

let currentQuestion = 0;

function showQuestion() {
  let currentAnswers = questions[currentQuestion].answers;

  question.innerText = questions[currentQuestion].question;

  answerList.innerHTML = "";

  for (let i = 0; i < currentAnswers.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `<input type="radio" name="answer" value="${currentAnswers[i]}"/> ${currentAnswers[i]}`;
    answerList.appendChild(li);
  }
}

nextButton.addEventListener ("click"), function() {
  let selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (!selectedAnswer) {
    alert("Please select an answer");
    return;
  }

  if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
    alert("Correct!");
  } else {
    alert("Incorrect");
  }

  currentQuestion++;

  if (currentQuestion === questions.length) {
    alert("Congratulations, you have completed the quiz!");
    return
  }}
