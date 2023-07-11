var velocityx = 2; 
    var velocityx2 = 3;
    var velocityx3 = 1;
    var velocityx4 = 4;
    var velocityx5 = 2;
    var velocityx6 = 1;
    var velocityx7 = 2;
    var velocityx8 = 3;

var velocityy = 2;
    var velocityy2 = 3;
    var velocityy3 = 1;
    var velocityy4 = 2;
    var velocityy5 = 4;
    var velocityy6 = 3;
    var velocityy7 = 1;
    var velocityy8 = 2;

var positionx = 200;
    var positionx2 = 0;
    var positionx3 = 300;
    var positionx4 = 0;
    var positionx5 = 0;
    var positionx6 = 0;
    var positionx7 = 0;
    var positionx8 = 0;

var positiony = 200;
    var positiony2 = 0;
    var positiony3 = 300;
    var positiony4 = 0;
    var positiony5 = 0;
    var positiony6 = 0;
    var positiony7 = 0;
    var positiony8 = 0;


var positionxmin = 0;
var positionxmax = 400;
var positionymin = 0;
var positionymax = 700;

var time = 1;
var reverse_x = true;
var reverse_y = true;
var reverse_x2 = true;
var reverse_y2 = true;
var reverse_x3 = true;
var reverse_y3 = true;
var reverse_x4 = true;
var reverse_y4 = true;
var reverse_x5 = true;
var reverse_y5 = true;
var reverse_x6 = true;
var reverse_y6 = true;
var reverse_x7 = true;
var reverse_y7 = true;
var reverse_x8 = true;
var reverse_y8 = true;

var ball1 = document.getElementById('ball1');
var ball2 = document.getElementById('ball2');
var ball3 = document.getElementById('ball3');
var ball4 = document.getElementById('ball4');
var ball5 = document.getElementById('ball5');
var ball6 = document.getElementById('ball6');
var ball7 = document.getElementById('ball7');
var ball8 = document.getElementById('ball8');

//functions

function myFunction(){
  if(reverse_x){
    positionx = positionx + velocityx;
    ball1.style.left = positionx + 'px';
  }
  else{
    positionx = positionx - velocityx;
    ball1.style.left = positionx + 'px';
  }

      if(reverse_y){
        positiony = positiony + velocityy;
        ball1.style.top = positiony + 'px';
      }
      else{
        positiony = positiony - velocityy;
        ball1.style.top = positiony + 'px';
      }

  if(
    positionx > positionxmax ||
    positionx === positionxmin
  ) {
    reverse_x = !reverse_x;
  }

      if(
        positiony > positionymax ||
        positiony === positionymin
      ) {
        reverse_y = !reverse_y;
      }
}

function myFunction2(){
  if(reverse_x2){
    positionx2 = positionx2 + velocityx2;
    ball2.style.left = positionx2 + 'px';
  }
  else{
    positionx2 = positionx2 - velocityx2;
    ball2.style.left = positionx2 + 'px';
  }

      if(reverse_y2){
        positiony2 = positiony2 + velocityy2;
        ball2.style.top = positiony2 + 'px';
      }
      else{
        positiony2 = positiony2 - velocityy2;
        ball2.style.top = positiony2 + 'px';
      }

  if(
    positionx2 > positionxmax ||
    positionx2 === positionxmin
  ) {
    reverse_x2 = !reverse_x2;
  }

      if(
        positiony2 > positionymax ||
        positiony2 === positionymin
      ) {
        reverse_y2 = !reverse_y2;
      }
}


function myFunction3(){
  if(reverse_x3){
    positionx3 = positionx3 + velocityx3;
    ball3.style.left = positionx3 + 'px';
  }
  else{
    positionx3 = positionx3 - velocityx3;
    ball3.style.left = positionx3 + 'px';
  }

      if(reverse_y3){
        positiony3 = positiony3 + velocityy3;
        ball3.style.top = positiony3 + 'px';
      }
      else{
        positiony3 = positiony3 - velocityy3;
        ball3.style.top = positiony3 + 'px';
      }

  if(
    positionx3 > positionxmax ||
    positionx3 === positionxmin
  ) {
    reverse_x3 = !reverse_x3;
  }

      if(
        positiony3 > positionymax ||
        positiony3 === positionymin
      ) {
        reverse_y3 = !reverse_y3;
      }
}

function myFunction4(){
  if(reverse_x4){
    positionx4 = positionx4 + velocityx4;
    ball4.style.left = positionx4 + 'px';
  }
  else{
    positionx4 = positionx4 - velocityx4;
    ball4.style.left = positionx4 + 'px';
  }

      if(reverse_y4){
        positiony4 = positiony4 + velocityy4;
        ball4.style.top = positiony4 + 'px';
      }
      else{
        positiony4 = positiony4 - velocityy4;
        ball4.style.top = positiony4 + 'px';
      }

  if(
    positionx4 > positionxmax ||
    positionx4 === positionxmin
  ) {
    reverse_x4 = !reverse_x4;
  }

      if(
        positiony4 > positionymax ||
        positiony4 === positionymin
      ) {
        reverse_y4 = !reverse_y4;
      }
}

function myFunction5(){
  if(reverse_x5){
    positionx5 = positionx5 + velocityx5;
    ball5.style.left = positionx5 + 'px';
  }
  else{
    positionx5 = positionx5 - velocityx5;
    ball5.style.left = positionx5 + 'px';
  }

      if(reverse_y5){
        positiony5 = positiony5 + velocityy5;
        ball5.style.top = positiony5 + 'px';
      }
      else{
        positiony5 = positiony5 - velocityy5;
        ball5.style.top = positiony5 + 'px';
      }

  if(
    positionx5 > positionxmax ||
    positionx5 === positionxmin
  ) {
    reverse_x5 = !reverse_x5;
  }

      if(
        positiony5 > positionymax ||
        positiony5 === positionymin
      ) {
        reverse_y5 = !reverse_y5;
      }
}

function myFunction6(){
  if(reverse_x6){
    positionx6 = positionx6 + velocityx6;
    ball6.style.left = positionx6 + 'px';
  }
  else{
    positionx6 = positionx6 - velocityx6;
    ball6.style.left = positionx6 + 'px';
  }

      if(reverse_y6){
        positiony6 = positiony6 + velocityy6;
        ball6.style.top = positiony6 + 'px';
      }
      else{
        positiony6 = positiony6 - velocityy6;
        ball6.style.top = positiony6 + 'px';
      }

  if(
    positionx6 > positionxmax ||
    positionx6 === positionxmin
  ) {
    reverse_x6 = !reverse_x6;
  }

      if(
        positiony6 > positionymax ||
        positiony6 === positionymin
      ) {
        reverse_y6 = !reverse_y6;
      }
}

function myFunction7(){
  if(reverse_x7){
    positionx7 = positionx7 + velocityx7;
    ball7.style.left = positionx7 + 'px';
  }
  else{
    positionx7 = positionx7 - velocityx7;
    ball7.style.left = positionx7 + 'px';
  }

      if(reverse_y7){
        positiony7 = positiony7 + velocityy7;
        ball7.style.top = positiony7 + 'px';
      }
      else{
        positiony7 = positiony7 - velocityy7;
        ball7.style.top = positiony7 + 'px';
      }

  if(
    positionx7 > positionxmax ||
    positionx7 === positionxmin
  ) {
    reverse_x7 = !reverse_x7;
  }

      if(
        positiony7 > positionymax ||
        positiony7 === positionymin
      ) {
        reverse_y7 = !reverse_y7;
      }
}

function myFunction8(){
  if(reverse_x8){
    positionx8 = positionx8 + velocityx8;
    ball8.style.left = positionx8 + 'px';
  }
  else{
    positionx8 = positionx8 - velocityx8;
    ball8.style.left = positionx8 + 'px';
  }

      if(reverse_y8){
        positiony8 = positiony8 + velocityy8;
        ball8.style.top = positiony8 + 'px';
      }
      else{
        positiony8 = positiony8 - velocityy8;
        ball8.style.top = positiony8 + 'px';
      }

  if(
    positionx8 > positionxmax ||
    positionx8 === positionxmin
  ) {
    reverse_x8 = !reverse_x8;
  }

      if(
        positiony8 > positionymax ||
        positiony8 === positionymin
      ) {
        reverse_y8 = !reverse_y8;
      }
}



setInterval(myFunction, time);
setInterval(myFunction2, time);
setInterval(myFunction3, time);
setInterval(myFunction4, time);
setInterval(myFunction5, time);
setInterval(myFunction6, time);
setInterval(myFunction7, time);
setInterval(myFunction8, time);