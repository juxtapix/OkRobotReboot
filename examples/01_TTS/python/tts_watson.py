# Example TTS - "watson"

import os
import sys
import urllib

def say(something):
    user = "USER"
    password = "PASS"
    data = urllib.quote_plus(something)
    voice = "voice=en-US_AllisonVoice"
    command = "curl -X GET -u \"{0}:{1}\" --output say.mp3 \"https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?accept=audio/mp3&text=\"{2}\"&{3}\" && afplay say.mp3 ".format(user,password,data,voice)
    os.system(command)

say(sys.argv[1])
