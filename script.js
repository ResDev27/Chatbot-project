
//this bit its the greeting message from bot
let greetings = ["Yo!", "What's Up !", "How you doin'!"];
const randomgreetings = greetings[Math.floor(Math.random() * greetings.length)];
document.getElementById("question").innerHTML = randomgreetings;

// this bit it's the question from bot "required yes or no answer" 
setTimeout(function(){ 
   document.getElementById("question").innerHTML = "Are you feeling alright ?"; 
}, 2000);

let counter = 0;

// Enter execution

document.addEventListener("keypress", function(event){
if (event.keyCode === 13) {
execution();
}
})
// Submit button execution
document.getElementById("submit").addEventListener("click", execution)

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
      counter++;
      console.log(counter);
      let otherAnswer = ["Can you clearly answer to my question please ?", "It's either 'yes or no'!", "Am I a joke to you ???"];
      const randomotherAnswer = otherAnswer[Math.floor(Math.random() * otherAnswer.length)];
      document.getElementById("question").innerHTML = randomotherAnswer;
   }
   
   // if the answer is not yes or no 3 times, do this:
   if (counter >= 3) {
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



