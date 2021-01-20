# Example STT - "watson JSON"
# pip install requests

import sys
import base64
import requests

def listen(something):
    APIkey = 'YOUR_API_KEY'
    url = 'YOUR_API_URL'
    data = open(something, 'rb').read()
    auth = 'Basic ' + base64.b64encode('apikey:' + APIkey)
    headers = {'Content-Type': 'audio/flac', 'Authorization': auth}
    r = requests.post(headers=headers, url=url, data=data)
    with open("watson.json", "a") as myfile:
        myfile.write(r.text)
        print("Saved!")


listen("_audio/audio-file.flac")
