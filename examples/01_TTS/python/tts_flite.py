# Example TTS - "flite"

import os
import sys

def say(something):
    command = "flite \"{0}\" -o test.wav && afplay test.wav".format(something)
    # command = "flite -voice voices/cmu_us_jmk.flitevox \"{0}\" -o test.wav && afplay test.wav".format(something)
    os.system(command)

say(sys.argv[1])
