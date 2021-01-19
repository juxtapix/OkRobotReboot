# Example TTS - "watson"

# required to access sytem commands and to run applications
import os
import sys
# required to format URL
import urllib

def say(something):
    APIkey = "YOUR_API_KEY"
    url = "YOUR_API_URL"
    data = urllib.quote_plus(something)
    voice = "voice=en-US_AllisonVoice"
    command = "curl -X GET -u \"apikey:{0}\" --output say.mp3 \"{1}/v1/synthesize?accept=audio/mp3&text=\"{2}\"&{3}\" && afplay say.mp3 ".format(APIkey,url,data,voice)
    os.system(command)

say(sys.argv[1]) # Request the command line argument after the script name
