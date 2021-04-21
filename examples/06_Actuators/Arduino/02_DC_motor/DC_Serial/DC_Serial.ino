String data;
int pwm;

void setup() {
  Serial.begin(9600);         // opens serial port, sets data rate to 9600 bps
  pinMode(10, OUTPUT);          // initialize PWM pin 10 as an output.
}

void loop() {
  // send data only when you receive data:
  if (Serial.available() > 0) {
    // read the incoming data:
    data = Serial.readStringUntil('/r');
    // convert data to a Integer (number)
    pwm = data.toInt();
    
    if (pwm >= 0 || pwm <= 255) {
      // tell DC Motor to move with received speed
      analogWrite(10, pwm);
      // print Motor speed
      Serial.print("Speed: ");
      Serial.println(pwm);
    }

  }
}
