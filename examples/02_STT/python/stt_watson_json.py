# Example STT - "watson JSON"
# --- either ---
# sudo pip install requests
# --- or ---
# python3 -m venv .venv
# source .venv/bin/activate
# pip install requests

import sys
import base64
import requests

def listen(something):
    APIkey = 'YOUR_API_KEY'
    endpoint = '/v1/recognize?timestamps=true&max_alternatives=3'
    url = 'YOUR_API_URL' + endpoint
    data = open(something, 'rb').read()
    auth = 'apikey:' + APIkey
    headers = {'Content-Type': 'audio/flac', 'Authorization': 'Basic ' + base64.b64encode(
        auth.encode()).decode()}
    r = requests.post(headers=headers, url=url, data=data)
    with open("watson.json", "a") as myfile:
        myfile.write(r.text)
        print("Saved!")


listen("_audio/audio-file.flac")
