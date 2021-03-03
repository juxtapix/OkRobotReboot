int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);    // sets the pin as output
  Serial.begin(9600);        // initialize serial communications
}
 
void loop() {
 if (Serial.available() > 0) {     // check if serial data available
   int inByte = Serial.read();     // read incoming bytes
   if (inByte == 1) {
     digitalWrite(ledPin, HIGH);  // LED on
   } else {
     digitalWrite(ledPin, LOW);   // LED off
   }
   Serial.print("Received: ");
   Serial.println(inByte);        // print received bytes
   delay(100);                   
 }
}
