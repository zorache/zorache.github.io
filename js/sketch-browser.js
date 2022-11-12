var y;
var x;
var count;

function setup() {
  createCanvas(400, 400);
  x = 100;
  y = 100;
  count =0;
}

function draw() {
  background(0,0,255,100);
  count+=1;
  tab(x,y,100);
  x = (width/2)+(sin(count/20))*150;
  y = (height/2)+cos(count/20)*150;
  
  tab(x*0.8,y*0.8,100);
  tab(x*0.1,y*0.1,200);
  tab(x*1.2,y*0.3,200);
  
  frameRate(70)

  
}

function tab(x,y,size){
  fill(135,206,235)
  rect(x,y,size,size)
  fill(255)
  rect(x,y+10,size,size-10)
  fill(255,0,0)
  rect(x+size-10,y,10,10)
  
  
}