import sensor, image, time, math
from pyb import LED

sensor.reset()
sensor.set_pixformat(sensor.GRAYSCALE)
sensor.set_framesize(sensor.VGA) # High Res!
sensor.set_windowing((640, 80)) # V Res of 80 == less work (40 for 2X the speed).
sensor.skip_frames(time = 2000)
sensor.set_auto_gain(False)  # must turn this off to prevent image washout...
sensor.set_auto_whitebal(False)  # must turn this off to prevent image washout...
clock = time.clock()

# LEDs
red_led   = LED(1)
green_led = LED(2)

# Barcode
myCode = "031000048495"

while(True):
    clock.tick()

    # Capture snapshot
    img = sensor.snapshot()

    # Find barcode.
    codes = img.find_barcodes()

    for code in codes:
        img.draw_rectangle(code.rect())
        if code.payload() == myCode:
            print("Found")
            green_led.on()

    if not codes:
        print("FPS %f" % clock.fps())
