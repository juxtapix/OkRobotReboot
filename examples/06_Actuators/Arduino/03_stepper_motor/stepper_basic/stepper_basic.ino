#include "Stepper.h"
 
const int stepsPerRevolution = 200;  // change this to fit the number of steps per revolution
                                     // for your motor
 
// initialize the stepper library on pins 8 through 11:
Stepper myStepper(stepsPerRevolution, 5,6,9,10);            
 
void setup() {
  // initialize the serial port:
  Serial.begin(9600);
  // set the speed in rpm:
  myStepper.setSpeed(120);
}
 
void loop() {
  // step one revolution  in one direction:
   Serial.println("clockwise");
  myStepper.step(stepsPerRevolution);
  delay(500);
 
   // step one revolution in the other direction:
  Serial.println("counterclockwise");
  myStepper.step(-stepsPerRevolution);
  delay(500);
}
