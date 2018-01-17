# Example STT - "watson JSON"
# pip install requests

import sys
import requests

def listen(something):
    user = "9e0a3437-aa25-4a21-87e0-20fb1d02db63"
    password = "UPu8SOsrz8eX"
    data = open(something, 'rb').read()
    url = 'https://stream.watsonplatform.net/speech-to-text/api/v1/recognize?timestamps=true&max_alternatives=3'
    headers = {'Content-Type': 'audio/flac'}
    r = requests.post(url=url, auth=(user, password), headers=headers, data=data)
    with open("watson.json", "a") as myfile:
        myfile.write(r.text)
        print("Saved!")

listen("_audio/audio-file.flac")
