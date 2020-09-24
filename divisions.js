class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        text("500",20,640);
        text("500",100,640);
        text("500",180,640);
        text("500",260,640);
        text("100",340,640);
        text("100",420,640);
        text("100",500,640);
        text("200",580,640);
        text("200",660,640);
        text("200",740,640);
        
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
};