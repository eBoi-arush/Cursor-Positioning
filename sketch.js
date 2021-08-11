var xPointer;
var yPointer;

function setup() {
  createCanvas(windowWidth, windowHeight);

  xPointer = new Pointer(windowWidth/2, 10, 10, 2000);
  yPointer = new Pointer(10, windowHeight/2, 4000, 10);
}

function draw() {
  background(100);

  xPointer.x = mouseX;
  yPointer.y = mouseY;

  xPointer.show();
  yPointer.show();
}
