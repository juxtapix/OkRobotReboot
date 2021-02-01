# Example TTS - "flite"

# To install flite please see Tech Resources:
# https://github.com/juxtapix/OkRobotReboot/wiki/02.-TTS#technical-resources

# import "os" to access operating system functionalities
import os
# import "sys" to access the interpreter functionalities
import sys

def say(something):
    command = "flite \"{0}\" -o test.wav && afplay test.wav".format(something)
    # command = "flite -voice voices/cmu_us_jmk.flitevox \"{0}\" -o test.wav && afplay test.wav".format(something)
    os.system(command)

 # "sys.argv" returns an array with the arguments passed when Python interpreter was launched.
say(sys.argv[1])
