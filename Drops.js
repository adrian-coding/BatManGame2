class Drop{
    constructor(x,y){
        this.body=Bodies.circle(x,y,5);
        World.add(world,this.body)
        this.radius=5
    }
        display(){
        ellipseMode(RADIUS)
        fill("blue")
        ellipse(this.body.position.x,this.body.position.y,this.radius)

        }

        update(){
        if (this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,1000),y:random(0,1000)})

        }   

        }



}