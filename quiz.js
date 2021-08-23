//creates a quiz
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const quizQuestions = [
{question:"Manasha Fernando is currently completing a PhD in:", answers:{        
a: "Game theory",
b: "Human-computer interaction",
c: "Interactive programming languages",
d: "Implementation Science"}, correctAnswer:"d"},
{question: "Manasha Fernando works at:", answers:{
 a:"University of Queensland",
 b:"Queensland University of Technology",
 c:"University of Technology in Sydney",
 d:"All of the above" }, correctAnswer:"b"},
  {question:"Manasha's research skills include:", answers:{
  a:"Leadership",
  b:"Teamwork",
  c:"Programming languages",
  d:"None of the above"}, correctAnswer:"d"},
  {question:"Manasha is super passionate about:", answers:{
      a:"Hospital systems",
      b:"Implementation Science",
      c:"CDSS",
      d:"All of the above"}, correctAnswer:"d"}];

function buildQuiz() {const output = [];
    for(i=0; i<quizQuestions.length; i++){  const answers = [];
        for(letter in quizQuestions[i].answers){

            answers.push(
            
                '<label>'
            
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            
                + letter + ': '
            
                + quizQuestions[i].answers[letter]
            
                + '</label>'
            
                );
            
                output.push(

                    '<div class="question">' + quizQuestions[i].question + '</div>'
                  
                    + '<div class="answers">' + answers.join('') + '</div>'
                  
                    );}      quizContainer.innerHTML = output.join('');}}

function showResults() {   
    
    var answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers

var numCorrect = 0;
for(i=0; i<quizQuestions.length; i++){    
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    // if answer is correct

if(userAnswer===quizQuestions[i].correctAnswer){

    // add to the number of correct answers
  
    numCorrect++;
  
            
  
    // color the answers green
  
    answerContainers[i].style.color = 'lightgreen';
  
    }
  
    // if answer is wrong or blank
  
      else{
  
      // color the answers red
  
          answerContainers[i].style.color = 'red';
  
      } 

}
if (numCorrect === 0) { 

    resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";

  }

  if (numCorrect === 1) { 

      resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";

    }

    if (numCorrect === 2) { 

      resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";

    }

    if (numCorrect === 3) { 

      resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Manasha pretty well!";

    }

    if (numCorrect === 4) { 

      resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Manasha so well!";

    }
}

//load quiz
buildQuiz();
submitButton.onclick = function() {

    showResults();
 
  }