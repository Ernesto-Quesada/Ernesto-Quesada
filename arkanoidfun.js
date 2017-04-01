
//----Game Introduction-------//
function introGameIN(){
  var p1= '<p class="instructions">To start,  click on the Start button</p>';
  var p2= '<p class="instructions">Move the mouse to move the bar and bounce the ball</p>';
  var p3= '<p class="instructions">To win, break all Bricks, you have 3 lifes to do it... Good Luck!!!</p>';
  var p4= '<p id="gotit" class="instructions"> Got It</p>';
  $("#divright").append(p1, p2, p3, p4);
  
  $("#gotit").click(function(){
   $(".instructions").hide("instructions");
  });
}
//-----------------------------//

//--------MOUSE FUNCTIONS-------//
//Space where mouse can move
function mouseSpace() {
  ancho= $("#canvas").offset().left;
  anchomax= ancho + canvasWidth-metalbarwi;
$(document).mousemove(onMouseMove);
}
//Move bar when moving mouse
function onMouseMove(evt) {
  if (evt.pageX > ancho && evt.pageX < anchomax) {
    metalbarx= evt.pageX - ancho;
    // console.log("metalbarX", metalbarx)
    // x=evt.pageX - ancho;
  }
}
//-----------------------------//

//-----GET CANVAS CONTEXT------//
function getCanvasContext() {
//ctx is the DOM canvas element. [0] must be used since canvas
// is not part of jquery so get context is not understood by Jarvis
  ctx = $('#canvas')[0].getContext("2d");
  canvasWidth=$('#canvas').width();
  canvasHeight=$('#canvas').height();
//   console.log('Width of canvas this is inside startBall function ',canvasWidth);

//execute drawBall every 10 milisecs
   stopGame=setInterval(drawInCanvas,10);
};
function getCanvasContext1() {
//ctx is the DOM canvas element. [0] must be used since canvas
// is not part of jquery so get context is not understood by Jarvis
  ctx = $('#canvas')[0].getContext("2d");
  canvasWidth=$('#canvas').width();
  canvasHeight=$('#canvas').height();
//   console.log('Width of canvas this is inside startBall function ',canvasWidth);

//execute drawBall every 10 milisecs
metalbarInitialPos();
    bricks();
    // mouseSpace();
   drawInCanvas();
   
};