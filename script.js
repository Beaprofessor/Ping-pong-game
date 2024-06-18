document.addEventListener("DOMContentLoaded", () => {
  let ball = document.getElementById("ball"); // targetting the ball element

  // Here the ballX and ballY will be helping us to set a starting point of ball w.r.t table
  let ballX = 10; // distance of the top of the ball w.r.t ping pong table
  let ballY = 10; // distance of the left of the ball w.r.t ping pong table

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

    if (ballX > table.offSetWidth  - ball.offsetWidth  || ballX <= 0) dx *= -1; // change the x-direction
    if (ballY < table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1; // change the y-direction

  }, 1);
});
