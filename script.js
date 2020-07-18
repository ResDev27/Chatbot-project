
//this bit its the greeting message from bot

let greetings = ["Hi there, what is your name?", "Oh hello, what should i call you?", "Hello you, what's your name?"];
const randomgreetings = greetings[Math.floor(Math.random() * greetings.length)];
document.getElementById("question").innerHTML = randomgreetings;


// declare counters
let muteCounter = 0;
let questionCounter = 0;

// Enter execution

document.addEventListener("keypress", exec)

function exec(event) {
   if (event.keyCode === 13) {
      // increment questionCounter
      questionCounter++;
      // this condition applies quen answering the greetings
      if(questionCounter === 1) {
         // get value from input
      let answer = document.getElementById('ans').value;
      let personalGreeting = [`Hello ${answer}, nice to meet you`, `Hey ${answer}, its a pleasure to meet you`, `Howdy ${answer}, i'm a beBot`];
      const randomPersonal = personalGreeting[Math.floor(Math.random() * personalGreeting.length)];
      document.getElementById("question").innerHTML = randomPersonal; // display input
         //  after 2 seconds askFeeling
      setTimeout(askFeeling, 2000);

      document.getElementById("ans").value = "";

      } else if (questionCounter > 1) { // after the first greeting question
         execution();
      }

      function askFeeling() {
         document.getElementById('question').innerHTML = 'Are you feeling OK?';
      }
   
   }

}

// Submit button execution

document.getElementById("submit").addEventListener("click", function() {
   questionCounter++;

      if(questionCounter === 1) {

      let answer = document.getElementById('ans').value;
      let personalGreeting = [`Hello ${answer}, nice to meet you`, `Hey ${answer}, its a pleasure to meet you`, `Howdy ${answer}, i'm a beBot`];
      const randomPersonal = personalGreeting[Math.floor(Math.random() * personalGreeting.length)];
      document.getElementById("question").innerHTML = randomPersonal;

      setTimeout(askFeeling, 1500);

      document.getElementById("ans").value = "";
      } else if (questionCounter > 1) {
         execution();
      }

      function askFeeling() {
         document.getElementById('question').innerHTML = 'Are you feeling Alright?';
      }
})

// main FUNCTION
function execution() {
   // getting answer from user 
   let answer = document.getElementById("ans").value;
   // Process the user's response 
   
   if (answer.toLowerCase().includes("yes")) {
      let positiveFeelings = ["Happy to hear that! See ya!", "Sounds Good, Greetings!", "Alright! Bye bye!"];
      const randompositiveFeelings = positiveFeelings[Math.floor(Math.random() * positiveFeelings.length)];
      document.getElementById("question").innerHTML = randompositiveFeelings;
   } else if (answer.toLowerCase().includes("no")) {
      let negativeFeelings = ["Sorry to hear that! Take good care of yourself!", "I hope you will be ok again soon... See you around!", "That's unfortunate... Take care!"];
      const randomnegativeFeelings = negativeFeelings[Math.floor(Math.random() * negativeFeelings.length)];
      document.getElementById("question").innerHTML = randomnegativeFeelings;
   } else {
      muteCounter++;
      console.log(muteCounter);
      let otherAnswer = ["Can you clearly answer to my question please ?", "It's either 'yes or no'!", "Am I a joke to you ???"];
      const randomotherAnswer = otherAnswer[Math.floor(Math.random() * otherAnswer.length)];
      document.getElementById("question").innerHTML = randomotherAnswer;
   }

   // if the answer is not yes or no 3 times, do this:
   if (muteCounter >= 3) {
      document.getElementById("question").innerHTML = "Fuck off!";
      document.getElementById("question").innerHTML = "Hum... You dont want to talk so I'm gonna go! Peace Dummy!";
      document.getElementById("ans").value = "";
      document.getElementById("ans").setAttribute("disabled", "disabled");
      document.getElementById("ans").setAttribute("placeholder", "You won! you are muted!");
      document.removeEventListener("keypress");
      document.getElementById("submit").disabled = true;
   }
   // clear the input field
   document.getElementById("ans").value = "";
}



