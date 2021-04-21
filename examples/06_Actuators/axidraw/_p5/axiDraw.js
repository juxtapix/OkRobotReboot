// Axidraw Functions

function penUp() {
    let cmd = 'SP,0';
    sendCommand(cmd);
}

function penDown() {
    let cmd = 'SP,1';
    sendCommand(cmd);
}

function togglePen() {
    let cmd = 'TP';
    sendCommand(cmd);
}

function enableMotors(){
    let cmd = 'EM,1,1';
    sendCommand(cmd);
}

function disableMotors(){
    let cmd = 'EM,0,0';
    sendCommand(cmd);
}

function move(ms, x, y) {
    let cmd = `XM,${ms},${x},${y}`;
    sendCommand(cmd);
}

function sendCommand(c) {
    let cmd = c + '\r';
    serial.write(cmd);
}

// Commands: https://evil-mad.github.io/EggBot/ebb.html#EBB_Command_Reference
