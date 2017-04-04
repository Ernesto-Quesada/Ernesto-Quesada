
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

//-----GET CANVAS CONTEXT and Draw every 10 milisec------//
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


//------Start Game drawing no movement just presentation---//
function getCanvasContext1() {
//ctx is the DOM canvas element. [0] must be used since canvas
// is not part of jquery so get context is not understood by Jarvis
  ctx = $('#canvas')[0].getContext("2d");
  canvasWidth=$('#canvas').width();
  canvasHeight=$('#canvas').height();
//console.log('Width of canvas this is inside startBall function ',canvasWidth);
//execute drawBall every 10 milisecs
metalbarInitialPos();
bricks();
resetBallPosition();
// mouseSpace();
//draw one time fro presentation only---//
drawInCanvas();
$('#start').show();
console.log('insidegetcontext', life);
};

function startGame(){
    getCanvasContext1();
    $("#start").click(function(){
    $('#start').hide();  
    getCanvasContext();
    metalbarInitialPos();
    bricks();
    mouseSpace();
  });
}
//Life remaining
function lifeRemainig(){
  // console.log('life inside LR function',life);
  // console.log('life',life);
  if (life!=0){
    // console.log('lifeinside2',life);

    $('#life').html(life);
    // getCanvasContext1();
  }else {
    clearInterval(stopGame);
      $('#life').html("0")
      // $('#life').html("game over")
       
  }
}
function lifeCounter(){
  // console.log('life counter inside function LC',life);
  life = life -1;
  // console.log('life after -1 insideFLC',life);
}
function gameOver(){
  var gameOver= 'GAME OVER';
  $("#gameover").html(gameOver);
  $("#gameover").css("padding","20px");
  $("#gameover").css("border","2px solid yellow");
  $("#startagain").html("Play Again?")
  $("#startagain").click(function(){
    startGame();
   
  });

}