import base64

def encode_audio(audio):
  audio_content = audio.read()
  return base64.b64encode(audio_content)
