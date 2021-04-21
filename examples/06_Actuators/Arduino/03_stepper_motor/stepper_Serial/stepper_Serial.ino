#include "Stepper.h"
 
const int stepsPerRevolution = 200;  // change this to fit your motor
String data;
int steps;
 
// initialize the stepper library with PWM pins:
Stepper myStepper(stepsPerRevolution, 5,6,9,10);            
 
void setup() {
  // initialize the serial port:
  Serial.begin(9600);
  // set the speed in rpm:
  myStepper.setSpeed(60);
}
 
void loop() {
  // send data only when you receive data:
  if (Serial.available() > 0) {
    // read the incoming data:
    data = Serial.readStringUntil('/r');
    // convert data to a Integer (number)
    steps = data.toInt();
    // tell Stepper Motor to move with received steps
    myStepper.step(steps);

    Serial.print("Steps: ");
    Serial.println(steps);
  }
}
