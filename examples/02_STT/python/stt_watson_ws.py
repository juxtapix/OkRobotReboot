# Example STT - "watson Websockets"
# Modified example from "ibm-dev/watson-streaming-stt"

import os
import sys
import base64
import json
import websocket
from websocket._abnf import ABNF

def listen(something):
    return open("_audio/audio-file.flac", 'rb').read()

def on_message(ws, message):
    data = json.loads(message)
    if "results" in data:
        print(data['results'][0]['alternatives'][0]['transcript'])
        done = {"action": "stop"}
        ws.send(json.dumps(done).encode('utf8'))

def on_error(ws, error):
    print(error)

def on_close(ws):
    print("### closed ###")

def on_open(ws):
    settings = {
        "action": "start",
        "content-type": "audio/flac",
        # "continuous": False,
        "interim_results": False,
        "word_confidence": True,
        "timestamps": True,
        "max_alternatives": 3
    }
    ws.send(json.dumps(settings).encode('utf8'))
    data = listen("_audio/audio-file.flac")
    ws.send(data, ABNF.OPCODE_BINARY)
    done = {"action": "stop"}
    ws.send(json.dumps(done).encode('utf8'))

def connect():
    # websocket.enableTrace(True)
    user = "9e0a3437-aa25-4a21-87e0-20fb1d02db63"
    password = "UPu8SOsrz8eX"
    url = 'wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize?model=en-US_BroadbandModel'
    headers = {}
    auth = user + ":" + password
    headers["Authorization"] = "Basic " + base64.b64encode(
        auth.encode()).decode()
    print(headers)

    ws = websocket.WebSocketApp(url,
                              header=headers,
                              on_message = on_message,
                              on_error = on_error,
                              on_close = on_close)

    ws.on_open = on_open
    ws.run_forever()


connect()
