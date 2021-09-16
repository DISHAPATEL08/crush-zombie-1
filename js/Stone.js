class Stone{
    construtor(x,y,w,h){
        var options={
            restitution:0.8
        }
        this.w=w
        this.h=h
       
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }
    show(){
        var pos=this.body.position
        push ()
        translate (pos.x,pos.y)
        strokeWeight(1)
        ellipseMode(CENETR)
        fill ("white")
        ellipse(0,0,this.w,this.h)
        noStroke()
        pop ()
    }
    }