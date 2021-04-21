// ICP Workshop 2020
// Servo - Servo Position

#include <Servo.h>

Servo myservo;                // create servo object to control a servo

void setup() {
  myservo.attach(10);          // attaches the servo on pin 10 to the servo object
  myservo.write(0);           // starts servo on 0 degrees
}

void loop() {
    myservo.write(0);         // tell servo to go to 0 degrees
    delay(2000);              // wait for 2 seconds
  
    myservo.write(90);        // tell servo to go to 90 degrees
    delay(2000);              // wait for 2 seconds
  
    myservo.write(180);       // tell servo to go to 180 degrees
    delay(2000);              // wait for 2 seconds
}
