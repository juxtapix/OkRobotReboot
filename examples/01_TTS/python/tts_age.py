# Example TTS - "age"

# import "os" to access the Operating System functionalities
import os

def say(something):
    command = "say "                     # "say" in this case is a built-in shell command on MAC OS.
    os.system(command + something)

def checkAge(year):
    age = 2020 - int(year)
    if age > 16:
        say("Thanks! You are allowed to drive")
    else:
        say("Sorry but you cannot drive yet")

# Dialog
say("What year were you born?")
userInput = input(">>>: ")
checkAge( userInput )
