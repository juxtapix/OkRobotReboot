#include <Servo.h>

Servo myservo1;                // create servo object to control a servo Left and Right
Servo myservo2;                // create servo object to control a servo Up and Down
String data;
char pos;

void setup() {
  Serial.begin(9600);         // opens serial port, sets data rate to 9600 bps
  myservo1.attach(10);        // attaches the servo1 on pin 10
  myservo2.attach(9);         // attaches the servo2 on pin 9
}

void loop() {
  // send data only when you receive data:
  if (Serial.available() > 0) {
    // read the incoming data:
    data = Serial.read();
    pos = data.toInt();
    
    if (pos == 'L'){
      myservo1.write(0);
    } else if (pos == 'C') {
      myservo1.write(90);
    } else if (pos == 'R') {
      myservo1.write(180);
    } else if (pos == 'U') {
      myservo2.write(90);
    } else if (pos == 'D') {
      myservo2.write(178);
    }
    // print servo position
    Serial.print("Position: ");
    Serial.println(pos);
    delay(100); 
  }
}
