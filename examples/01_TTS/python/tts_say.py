# Example TTS - "say"

import os
import sys

def say(something):
    command = "say "
    os.system(command + something)

say(sys.argv[1])
