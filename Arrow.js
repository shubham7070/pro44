class Arrow {
    constructor(x, y) {
        var options = {
            restitution: 0.8

        }
        this.body = Bodies.rectangle(x, y, 100, 50, options)
        World.add(world, this.body);
        this.w = 100;
        this.h = 50;
    }

    display() {
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}