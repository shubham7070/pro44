class Ballon {
    constructor() {
        var options = {
            isStatic: true

        }
        this.x = Math.random(400, 600);
        this.y = Math.random(100, 600);
        this.body = Bodies.rectangle(this.x, this.y, 50, 50, options);
        
        World.add(world, this.body);
        this.w = 100;
        this.h = 50;
    }

    display() {
        var pos = this.body.position;
        
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}