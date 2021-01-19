# Example TTS - "watson with ssml"
# -*- coding: utf-8 -*-
import os
import sys
import urllib

def say(something):
    APIkey = "YOUR_API_KEY"
    url = "YOUR_API_URL"
    data = urllib.quote_plus(something)
    voice = "voice=en-US_AllisonVoice"
    command = "curl -X GET -u \"apikey:{0}\" --output say.mp3 \"{1}/v1/synthesize?accept=audio/mp3&text=\"{2}\"&{3}\" && afplay say.mp3 ".format(APIkey,url,data,voice)
    os.system(command)

def formatSSML(data):
    quoteFree = data.replace('"','\"')
    singleLine = quoteFree.replace('\r\n', '').replace('\n', '').replace('\r', '').replace('\t', '')
    return singleLine

def loadSSML(filename):
    file = open(filename,'r')
    data = file.read()
    say(formatSSML(data))


loadSSML('watson.xml')
