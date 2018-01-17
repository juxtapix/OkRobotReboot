# Example TTS - "flite"
# To install flite please see Tech Resources:
# https://github.com/juxtapix/ExpressiveInterfaces_Voice/wiki/01.-TTS#technical-resources

import os
import sys

def say(something):
    command = "flite \"{0}\" -o test.wav && afplay test.wav".format(something)
    # command = "flite -voice voices/cmu_us_jmk.flitevox \"{0}\" -o test.wav && afplay test.wav".format(something)
    os.system(command)

say(sys.argv[1])
