// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas colorMode noStroke HSB color background fill ellipse text stroke line */

// We'll use variables for most of our colors in this code-along.
let backgroundColor, color1, color2, textColor, blue, red, width, height
;

function setup() {
  // Canvas & color settings
  width = 400
  height = 400
  createCanvas(height, width);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  blue = 90
  red = 90
  // When used with only one argument, the color mode is greyscale.
  // 0 is black and 100 is white.
  backgroundColor = color(95);
  textColor = color(20);
  // When used with three arguments, the function takes, in this order:
  // HUE - 0 to 360 degrees on a color wheel - 0 is red, 120 is green and 240
  //       is blue.
  // SATURATION - 0 is no color (greyscale), and 100 is as bold as possible.
  // BRIGHTNESS - 0 is no light (black), and 100 is as bright as possible.
  color1 = color(0, blue, red)
  color2 = color(200, blue, red)
  
}

function draw() {
  background(backgroundColor)
  drawCenterLine()
  drawotherline()
  stroke("black")
  

  if (mouseX > 400 / 2) {
    nightMode()
  } else {
    dayMode()
  }
  if (mouseY > height / 2){
    altColor()
   
 }
//draw line

  //when black circle crosses the line, change bg color

  
  //& circle color(b->w)
  // blue&red flip
  //line changes color too
  //text switches colors too
  
  // The red and blue circles:
  fill(color1);
  ellipse(100, 200, 50);
  fill(color2);
  ellipse(300, 200, 50);

  // The grey circle and the text:
  fill(textColor);
  ellipse(mouseX, mouseY, 50);
  text("Flip the switch", 20, 20);
}

function drawCenterLine() {
  // This function will turn stroke on, draw the line, and then turn stroke
  // back off.
  // Remember a line segment in p5.js has four arguments: x1, y1, x2, y2
  stroke(textColor);
  line(width / 2, 0 , width / 2, height); 
  
  noStroke();
} 
function drawotherline(){
  stroke(textColor);
  line(0, 200, 400, 200)

  noStroke();

}

function nightMode(){
  
    backgroundColor = color(0);
    textColor = 'white'
    color1 = color(200, blue, red);
    color2 = color(0, blue, red);
    
  }
 

function dayMode() {
        
    backgroundColor = color(255);
    textColor = 'black'
    color1 = color(0, blue, red);
    color2 = color(200, blue, red);
}
function altColor() {
  backgroundColor = color(30)
  color1 = color(60, blue,red)
  color2 = color(100, red,blue)
}
    
