let pi = 3.14159265358979323846; // defining pi according to p5's arc()
let phaseShift = 3 * pi/2;
let newStart = -1 * pi/2;
let startX = 450;
let startY = 250;

var oldM = 0;

function setup() {
	createCanvas(900,500);
	oldM = minute();
	//console.log('old min:' + oldM);
}

function draw() {
  background(237, 242, 244);

  let circleRads = radianDegreeConverter('d', 360);
  var h = map(hour(), 0, 24, 0, circleRads); // map the function hour() to values from 0 - degrees in radians
  var m = map(minute(), 0, 60, 0, circleRads);
  //let newM = minute();
  //console.log('new min:' + newM);
  minUpdated(oldM, minute());
  var s = map(second(), 0, 60, 0, circleRads);

  let b = color(57, 61, 63, 255); // background circle color

  // seconds background circle
  fill(b);
  noStroke();
  circle(startX, startY, 350);

  // seconds arc
  let scolor = color(251, 248, 204, 255);
  fill(scolor);
  noStroke();
  arc(startX, startY, 300, 300, newStart, s + phaseShift, PIE);

  // minute background circle
  fill(b);
  noStroke();
  circle(startX, startY, 250);

  // minute arc
  let mcolor = color(142, 236, 245, 255);
  fill(mcolor);
  noStroke();
  arc(startX, startY, 200, 200, newStart, m + phaseShift, PIE);
    
  // hour background circle
  fill(b);
  noStroke();
  circle(startX, startY, 150);

  // hour arc
  let hcolor = color(241, 192, 232, 255);
  fill(hcolor);
  noStroke();
  arc(startX, startY, 100, 100, newStart, h + phaseShift, PIE);

  // inner circle
  fill(b);
  noStroke();
  circle(startX, startY, 50);
}

function radianDegreeConverter(type, value){
	let convertedVal = 0;
	if(type == 'r'){
		convertedVal = value * (180/pi);
	}
	else{
		convertedVal = value * (pi/180);
	}
	return convertedVal;
}

function minUpdated(oMin, nMin){
	if(Number(oMin) != Number(nMin)){
		console.log('minute updated:' + nMin);
		oldM = nMin;
	}
}