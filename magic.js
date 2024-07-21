document.addEventListener("DOMContentLoaded", function() {
    var balls = [];
    var numberOfBalls = 20;

    function Ball() {
        var ball = create();
        this.element = ball;
        this.dx = Math.random() * 4 + 1; // Random speed between 1 and 5
        this.dy = Math.random() * 4 + 1; // Random speed between 1 and 5
    }

    Ball.prototype.updatePosition = function() {
        var x = this.element.x;
        var y = this.element.y; 

        x += this.dx;
        y += this.dy;

        if (x <= 0 || x >= window.innerWidth - 50) {
            this.dx = -this.dx;
        }
        if (y <= 0 || y >= window.innerHeight - 50) {
            this.dy = -this.dy;
        }

        move(this.element, this.dx, this.dy);

        this.element.x = x;
        this.element.y = y;
    }

    for (var i = 0; i < numberOfBalls; i++) {
        balls.push(new Ball());
    }

    function updateAllPositions() {
        balls.forEach(function(ball) {
            ball.updatePosition();
        });
    }

    setInterval(updateAllPositions, 10);
});
