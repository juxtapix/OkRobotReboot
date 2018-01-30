# Example TTS - "say"

# import "os" to access the Operating System functionalities
import os

def say(something):
    command = "say "                     # "say" in this case is a built-in shell command on MAC OS.
    # command = "say -v \"Victoria\" "   # use the flag "-v" to change to a different voice
    os.system(command + something)

say("Tell me what you want, what you really really want!")
