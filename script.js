document.addEventListener("DOMContentLoaded", () => {
  let table = document.getElementById("ping-pong-table");
  let ball = document.getElementById("ball"); // targetting the ball element
  let paddle = document.getElementById("paddle"); // targetting the paddle

  // Here the ballX and ballY will be helping us to set a starting point of ball w.r.t table
  let ballX = 50; // distance of the top of the ball w.r.t ping pong table
  let ballY = 50; // distance of the left of the ball w.r.t ping pong table

  let dx = 2; // displacement factor in x-direction  here 2 means - > you will displace by 2px in +x direction and -2 means -> you will displace by 2px in -x direction
  let dy = 2; // displacement factor in x-direction  here 2 means - > you will displace by 2px in +y direction and -2 means -> you will displace by 2px in -y direction

  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;

  setInterval(function exec() {
    ballX += dx;
    ballY += dy;

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    // if (ballX > 675 || ballX <= 0) dx *= -1;
    // if (ballY > 375 || ballY <= 0) dy *= -1;

    // paddle.offsetLeft  + paddle.offsetWidth   -> if left (wrt table) of ball < right (wrt table)  of the paddle 
    // ballY > paddle.offsetTop -> if top (wrt table) of ball > top of (wrt table ) paddle 
    // ballY - ballY.offsetHeight < paddle.offsetTop + paddle.offsetHeight ->
    // ballY - ballY.offsetHeight  -> bottom of the ball
    // paddle.offsetTop + paddle.offsetHeight -> bottom  of the paddle
    //  it means bottom of the ball is less than bottom of paddle


    // Collision of ball and paddle
    if(ballX <paddle.offsetLeft  + paddle.offsetWidth   && ballY > paddle.offsetTop  && ballY - ballY.offsetHeight < paddle.offsetTop + paddle.offsetHeight){
      dx += -1
    }
    

    if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1; // change the x-direction
    if (ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1; // change the y-direction
  
  
  
  }, 1);

  let paddleY = 0;
  let dpY = 10;

  document.addEventListener("keydown", (event) => {

    event.preventDefault();        // this prevents the execution of the default event behaviour

    if (event.keyCode == 38 && paddleY >0) {
      //up arrow
      paddleY += -1*dpY;
      console.log("up", paddleY);
    } else if (event.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight) {
      // down arrow
      paddleY += dpY;
    }
    paddle.style.top = `${paddleY}px`;
  });


  document.addEventListener("mousemove" , (event) =>{
    if(event.clientX > table.offsetLeft + (table.offsetWidth/2))  return 
    let mouseDistanceFromTop = event.clientY    // this is the distance of the mouse point from the top of the screen 
    let distanceOfTableFromTop = table.offsetTop 
    let mousePointControl = mouseDistanceFromTop - distanceOfTableFromTop - paddle.offsetHeight/2
    
    paddleY = mousePointControl
    if(paddleY <= 0 || paddleY > table.offsetHeight - paddle.offsetHeight) return   // if bottom of the paddle touches bottom of the table return
    paddle.style.top = `${paddleY}px`;

  })



});
