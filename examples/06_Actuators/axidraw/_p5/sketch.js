// Axidraw + p5 Serial
let serial;
let portName = '/dev/tty.usbmodem1432401';   // axidraw serial port name

function setup() {
  serial = new p5.SerialPort();    // new instance of the serial port library
  serial.open(portName);           // open a serial port

  axiDraw();
}

function axiDraw(){
  penUp();
  move(1000, 1000, 0);
  penDown();
  move(2000, 0, -1000);
  togglePen();
  sendCommand("XM,3000,-1000,1000");
  togglePen();
}
