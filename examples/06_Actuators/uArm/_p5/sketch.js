// uArm + p5 Serial
let serial;
let portName = '/dev/tty.usbmodem144101'; // uArm serial port name

function setup() {
  serial = new p5.SerialPort();   // new instance of the serial port library
  serial.open(portName);          // open a serial port
  serial.on('data', getStatus);   // check for uArm Status

  uArm();
}

function uArm() {
  move(180,0,140,100);
  move(180,0,-7,100);
  pumpOn();
  move(180,0,160,100);
  delay(2000);
  move(180,180,166,100);
  move(180,180,60,200);
  delay(2000);
  pumpOff();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    uArm();
  } else if (keyCode === RIGHT_ARROW) {
    pumpOn();
  } else if (keyCode === LEFT_ARROW) {
    pumpOff();
  }
}