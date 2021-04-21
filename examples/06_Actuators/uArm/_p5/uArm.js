// uArm Functions
let status = '';

function pumpOn() {
  let cmd = 'M2231 V1';
  sendCommand(cmd);
}

function pumpOff() {
  let cmd = 'M2231 V0';
  sendCommand(cmd);
}

function gripperOn() {
  let cmd = 'M2232 V1';
  sendCommand(cmd);
}

function gripperOff() {
  let cmd = 'M2232 V0';
  sendCommand(cmd);
}

function pumpStatus() {
  let cmd = 'P2231';
  sendCommand(cmd);
}

function gripperStatus() {
  let cmd = 'P2232';
  sendCommand(cmd);
}

function switchStatus() {
  let cmd = 'P2233';
  sendCommand(cmd);
}

function enableMotors() {
  let cmd = 'M17';
  sendCommand(cmd);
}

function disableMotors() {
  let cmd = 'M2019';
  sendCommand(cmd);
}

function delay(p) {
  let cmd = `G2004 P${p}`;
  sendCommand(cmd);
}

function move(x, y, z, f) {
  let cmd = `G0 X${x} Y${y} Z${z} F${f}`;
  sendCommand(cmd);
}

function sendCommand(c) {
  let cmd = c + '\n';
  serial.write(cmd);
  if (status == '') {
    console.log('Wait!');
  }
}

function getStatus() {
  status = serial.readStringUntil('\n');
  console.log('Status: ' + status);
}

// Commands: https://cdn.sparkfun.com/assets/3/d/3/a/8/uArm-Swift-Pro-Quick-Start-Guide.pdf