# Example STT - "watson"

import os
import sys
import pipes

def listen(something):
    user = "USER"
    password = "PASS"
    data = "@" + pipes.quote(something)
    command = "curl -X POST -u \"{0}:{1}\" -H \"Content-Type: audio/flac\" --data-binary {2} \"https://stream.watsonplatform.net/speech-to-text/api/v1/recognize?timestamps=true&max_alternatives=3\" | grep -m1 \"transcript\" ".format(user,password,data)
    print(command)
    output = os.popen(command).read()
    return output.lstrip()

print(listen("_audio/audio-file.flac"))
