 //console.log("plr launched")
 class Player{
        constructor(){
            this.vel = {
                y:0,
                x:0,
                grav:1
            }
            this.position = {
                x:100,
                y:100
            }
            this.width = 100;
            this.height = 100;
            this.bounds = {
                bottomOfScreen:this.position.y+this.height
            }
        }
        draw(){
            c.fillStyle = 'red'
            c.fillRect(this.position.x,this.position.y,this.width,this.height)
        }
        update(){
            this.position.y += this.vel.y
            this.position.x += this.vel.x
            this.bounds.bottomOfScreen = this.position.y+this.height
            
            if(this.bounds.bottomOfScreen+this.vel.y<canvas.height)
            {
                this.vel.y += this.vel.grav
            }
            else{
                this.vel.y = 0
            }
        }
    }