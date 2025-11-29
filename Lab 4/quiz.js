const quizQuestions = [
  { question: "What does HTML stand for?", answer: "hypertext markup language" },
  { question: "What is the full form of CSS?", answer: "cascading style sheets" },
  { question: "Who is the world champion of 2024 F1 season", answer: "max verstappen" },
  { question: "Which programming language is primarily used for web development scripting?", answer: "javascript" },
  { question: "What does API stand for?", answer: "application programming interface" }
];

function runQuiz() {
  let score = 0;
  for (let i = 0; i < quizQuestions.length; i++) {
    const userAnswer = prompt(quizQuestions[i].question).toLowerCase().trim();
    if (userAnswer === quizQuestions[i].answer) {
      score++;
      alert("Correct!");
    } else {
      alert(`Wrong! The correct answer is ${quizQuestions[i].answer}`);
    }
  }
  alert(`Your final score: ${score}/${quizQuestions.length}`);
}

runQuiz();