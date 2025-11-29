const quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "What is 5 * 6?", answer: "30" },
  { question: "Who wrote Romeo and Juliet?", answer: "shakespeare" },
  { question: "What is the largest planet in our solar system?", answer: "jupiter" },
  { question: "What color is the sky on a clear day?", answer: "blue" }
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