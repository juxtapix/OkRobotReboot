#include <Servo.h>

Servo myservo;                // create servo object to control a servo
String data;
char pos;

void setup() {
  Serial.begin(9600);         // opens serial port, sets data rate to 9600 bps
  myservo.attach(10);          // attaches the servo on pin 10 to the servo object
}

void loop() {
  // send data only when you receive data:
  if (Serial.available() > 0) {
    // read the incoming data:
    data = Serial.read();
    pos = data.toInt();
    
    if (pos == 'L'){
      myservo.write(0);
    } else if (pos == 'R') {
      myservo.write(180);
    }
    // print servo position
    Serial.print("Position: ");
    Serial.println(pos);
  }
}
