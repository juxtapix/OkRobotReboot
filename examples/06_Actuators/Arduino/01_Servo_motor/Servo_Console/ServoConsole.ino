// ICP Workshop 2020
// Servo - Servo Console Control

#include <Servo.h>

Servo myservo;                // create servo object to control a servo
String data;
int pos;

void setup() {
  Serial.begin(9600);         // opens serial port, sets data rate to 9600 bps
  myservo.attach(10);          // attaches the servo on pin 10 to the servo object
}

void loop() {
  // send data only when you receive data:
  if (Serial.available() > 0) {
    // read the incoming data:
    data = Serial.readStringUntil('/r');
    // convert data to a Integer (number)
    pos = data.toInt();
    
    if (pos >= 0 || pos <= 180) {
      // tell servo to move to the received position
      myservo.write(pos);
      // print servo position
      Serial.print("Position: ");
      Serial.println(pos);
    }

  }
}
