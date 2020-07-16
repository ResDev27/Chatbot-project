
//this bit its the greeting message from bot
let greetings = ["Yo!", "What's Up !", "How you doin'!"];
const randomgreetings = greetings[Math.floor(Math.random() * greetings.length)];
document.getElementById("question").innerHTML = randomgreetings;

// this bit it's the question from bot "required yes or no answer" 
setTimeout(function(){ 
   document.getElementById("question").innerHTML = "Are you feeling alright ?"; 
}, 2000);



//Submit button 

document.getElementById("submit").addEventListener("click", function(){

// getting answer from user 
let answer = document.getElementById("ans").value;

   // Process the user's response 
if (answer.includes("yes")) {
   let positiveFeelings = ["Happy to hear that! See ya!", "Sounds Good, Greetings!", "Alright! Bye bye!"];
   const randompositiveFeelings = positiveFeelings[Math.floor(Math.random() * positiveFeelings.length)];
   document.getElementById("question").innerHTML = randompositiveFeelings;
}
})


