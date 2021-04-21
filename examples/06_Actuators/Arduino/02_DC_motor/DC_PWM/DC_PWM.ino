void setup() {
  pinMode(10, OUTPUT);          // initialize PWM pin 10 as an output.
}

void loop() {
  analogWrite(10, 150);        // set the MOTOR speed from 0 to 255;
  delay(2000);
  analogWrite(10, 0);
  delay(2000);
}
