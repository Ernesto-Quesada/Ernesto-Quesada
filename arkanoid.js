var x = 272;
var y = 578;
var moveX = 2;
var moveY = 6;
var ctx;
var canvasHeight;
var canvasWidth;
var diferentialMove;
var metalbarx;
var metalbarhi=10;
var metalbarwi=60;
var stopGame=0;
var ancho;
var anchomax;
var hardBricks;
var brickrows;
var brickcol;
var brickwidth;
var brickhi;
var padding;
var counter =0;
var life =3;


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


// set initial bar position and size
function metalbarInitialPos() {
      metalbarx = canvasWidth/2 -metalbarwi/2;
      console.log('metalbarX the x where the bar starts drawing this is inside metalbarInitialPos function',metalbarx);
      // metalbarhi = 10;
      metalbarwi = 60;
    }
// Metal Bar creation
function metalBarCreation(x,y,width,height){
      ctx.beginPath();
      ctx.rect(x,y,width,height);
      ctx.lineWidth="2";
      ctx.strokeStyle="red";
      ctx.closePath();
      ctx.stroke();
    }





//Bricks properties and array of bricks
function bricks() {
  brickrows= 5;
  brickcol = 5;
  brickwidth = (canvasWidth/brickcol);
  brickhi= 15;
  padding= 1;
  sbricks = new Array(brickrows);
    for (i=0; i < brickrows; i++) {
      sbricks[i] = new Array(brickcol);
        for (j=0; j < brickcol; j++) {
          sbricks[i][j] = 1;
        }
    }
}

//Clearing the canvas to reDraw. the clearing is from 0,0
//to canvas width, canvas height
function clearCanvas() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}
//Life remaining
function lifeRemainig(){
  console.log('life',life);
  // life= life-1;
  console.log('life',life);
  if (life==0){
    clearInterval(stopGame);
    $('#life').html("game over")
  }else {
    $('#life').html(life);
    clearCanvas;
       
  }
}
//Ball creation
    function ball(x,y,radio){
      ctx.beginPath();
      ctx.arc(x, y, radio, 0, Math.PI*2,true);
      ctx.closePath();
      ctx.stroke();
    }


   function drawLadrillos(){
      for (i=0; i < brickrows; i++) {
        // console.log('i',i);
        for (j=0; j < brickcol; j++) {
          // console.log("j",j);
          if (sbricks[i][j] == 1) {
            metalBarCreation((j * (brickwidth + padding)) + padding, 
                (i * (brickhi+ padding)) + padding,
                brickwidth, brickhi);
          }
        }
      }
    }



//Drawing all
function drawInCanvas() {
//clear will erase all in canvas
    clearCanvas();
//set the ball in the canvas
    ball(x,y,10);
//set the metal bar in the canvas
    metalBarCreation(metalbarx, canvasHeight-metalbarhi, metalbarwi, metalbarhi);
    //draw ladrillos
    drawLadrillos();
    //breaking a brick
      rowhi = brickhi + padding;
      colwi= brickwidth+ padding;

      row = Math.floor(y/rowhi);
// console.log('row',row);
      col = Math.floor(x/colwi);
// console.log('colwi',colwi);
// console.log('col=x/colwi',col,' x',x);

//breaking the wall
    if (y< brickrows* rowhi && row >= 0 && col >= 0 && sbricks[row][col] == 1) {
      counter +=10;
      console.log('y ',y);
      $("#score").html(counter);
      // console.log("contador",counter);
      moveY= -moveY;
      sbricks[row][col] = 0;
      }

      diferentialMove=(Math.random()*1.3) ;
     // console.log("DM",diferentialMove);
    if (x + 10 > canvasWidth || x-10<0)
      moveX = -moveX;

    if (y -10<0)
        moveY = -moveY;
        //(y + moveY>canvasHeight)
    else if(y+10+1>canvasHeight-metalbarhi-1 && x+1>=metalbarx && x+1<=metalbarx+metalbarwi){
      console.log('y+10>canvasH-metalbarhi',y,' ',"this is y+10->",y+10,'this is canvaH-barHi-> ',canvasHeight-metalbarhi)
      console.log('Y first else if',y);
      console.log('X first else if',x);
      console.log('metalbarx first else if',metalbarx);
      console.log('adding metalbarx and bar width',metalbarx+metalbarwi)

            if( (x >= metalbarx && x <=metalbarx+metalbarwi/4) || (x >= metalbarx+metalbarwi-metalbarwi/4 && x<=metalbarx+ metalbarwi) )
            { 
              console.log("---------------");
              console.log('this is x->',x);
              moveX=-moveX;
              moveY=-moveY; 
            }else if (x == metalbarx+metalbarwi/2){
              moveY=-moveY;
              moveX=0;
            }
          

              else{
                 moveY = -moveY;
                }

                // }
      }
      else if (y>=canvasHeight){//stop execution by clearin internal of Drawing
        //call life counter funtion
        console.log('y before stop',y)
        life= life-1;
        lifeRemainig();
        console.log('<><><><><')
      clearInterval(stopGame);
      }
    x += moveX;
    y += moveY;
}
// function test(){
// startBall();
// metalbarInitialPos();
// $(document).mousemove(onMouseMove);
// mouseSpace();
// bricks();
// }



$(document).ready(function(){
  var firstTime = localStorage.getItem("first_time");
  if(!firstTime) {
    // first time loaded!
    localStorage.setItem("first_time","1");
   introGameIN();
  } 
startGame();
// getCanvasContext();

// metalbarInitialPos();
// bricks();
// $(document).mousemove(onMouseMove);
// mouseSpace();
});

                //   if(x>metalbarx && x< metalbarx+metalbarwi){
                //   console.log("hiting inside the bar at",x);
                //   console.log('metalbarx 2',metalbarx)
                  
                //   if(x>metalbarx && x<metalbarx+metalbarwi/2){
                //       // diferentialMove=(Math.random()*8) ;
                //       console.log("hiting the bar at",x);
                //       console.log("second if");
                //       moveY= -moveY;
                //       // console.log("DMY",diferentialMove);
                //       // moveX = -moveX;
                //       console.log(moveX);
                      
                //   } else if (x>metalbarx+metalbarwi/2 && x<metalbarx+metalbarwi) {
                //         moveY= -moveY;
                //         // moveX =moveX*diferentialMove;
                //         // console.log("DMY",diferentialMove);
                //         console.log("Y",moveY);
                //         console.log('third if');
                //         console.log("hiting the bar at",x);


// sbricks.forEach(function(ele){
// console.log('sb',ele);
// });
// var reducedarray=sbricks.reduce( function(i,j){
//   return i+j;
// },0);
// // console.log('reducedarray',reducedarray)

// var anotherreduceway = [].concat.apply([],sbricks);
// // console.log('anotehr',anotherreduceway);
// var reduecanotehre= anotherreduceway.reduce(function(a,b){
//   return a+b;
// },0);
// console.log("redudcedfinally",reduecanotehre)






//       var moveablebar = $('.metalbar');
//     console.log(moveablebar);
//    moveablebar.on("click",function(e){
//   console.log(e);
// });
// var posX=180;
// var posY=10;
// var move =1
// $('.gamezone').on("click",function(){

//     for (var i=0; i<100; i++){
//   $('#ball').css({'left': posX*move+i,"bottom":posY*move+i})
//  if (posX+i>530) {
//      posX=530;
//      move=-move;

//  }
//get a reference to the canvas
//       $(document).mousemove(function(e){
//         //   moveablebar.css({'left': e.clientX-220});
//           if (e.clientX<218){
//              moveablebar.css({'left': 16});
//             //   console.log(e.clientX);
//           } else if(e.clientX>530) {
//                moveablebar.css({'left': 326});
//               console.log(e.clientX);
//           } else { moveablebar.css({'left': e.clientX-202});

//             //   console.log(e.clientX);
//           }

//       });
//     });
// // .moveAble {
// //     position: absolute;
// // }
// /*<div class="moveAble">
// <div class="info"><img src="https://pbs.twimg.com/profile_images/1498221863/Jodis_Gifts_logo_hi_res_normal.jpg" alt="info" /></div>
// // </div>*/
// // $(document).ready(function(){
// //       $('div.moveAble').mousemove(function(e){
// //             var y = e.pageY;
// //             var x = e.pageX;
// //             $('.moveAble').css('top', y-20).css('left', x-20);
// //       });
// //     });


//  /*canvas heigth responsive
//  <script>
//   function resize(){
//     $("#canvas").outerHeight($(window).height()-$("#canvas").offset().top- Math.abs($("#canvas").outerHeight(true) - $("#canvas").outerHeight()));
//   }
//   $(document).ready(function(){
//     resize();
//     $(window).on("resize", function(){
//         resize();
//     });
//   });
//   </script>}
