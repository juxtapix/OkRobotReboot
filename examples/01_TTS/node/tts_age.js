// Example TTS - "age"

// require "child_process" to run Child Process Applications
var exec = require('child_process').execSync;
var prompt = require('prompt-sync')();    // "npm install prompt-sync"

function say(something){
  command = "say ";                      // "say" in this case is a built-in shell command on MAC OS.
  exec(command + something);
}

function checkAge(year){
  var age = 2021 - Number(year);
  if (age > 16){
    say("Thanks! You are allowed to drive");
  } else {
    say("Sorry but you cannot drive yet");
  }
}

// Dialog
say("What year were you born?");
var userInput = prompt(">>>: ");
checkAge(`${userInput}`);
