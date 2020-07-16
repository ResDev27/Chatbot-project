let greetings = ["Yo!", "What's Up !", "How you doin'!"];
const randomgreetings = greetings[Math.floor(Math.random() * greetings.length)];
document.getElementById("question").innerHTML = randomgreetings;

setTimeout(function(){ document.getElementById("question").innerHTML = "Are you feeling alright ?"; }, 3000);
