# Example STT - "watson"

import os
import sys
import pipes

def listen(something):
    APIkey = "YOUR_API_KEY"
    url = "YOUR_API_URL"
    data = "@" + pipes.quote(something)
    command = "curl -X POST -u \"apikey:{0}\" -H \"Content-Type: audio/flac\" --data-binary {2} \"{1}/v1/recognize?timestamps=true&max_alternatives=3\" | grep -m1 \"transcript\" ".format(APIkey,url,data)
    print(command)
    output = os.popen(command).read()
    return output.lstrip()

print(listen("_audio/audio-file.flac"))
