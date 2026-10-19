    const canvas = document.querySelector('canvas')
    const c= canvas.getContext('2d')

    canvas.width = 64*16
    canvas.height = 64*9

    //const height = 100
    let jumpForce = 20;
    let moveSpeed = 5;
    const downAttack = 10;


    const player = new Player()
    const keys = {
        a:{
            pressed:false
        },
        d:{
            pressed:false
        },
        space:{
            pressed:false
        },
        downAttack:{
            pressed:false
        }
    }
    function animation(){
        window.requestAnimationFrame(animation)
        c.fillStyle = 'white'
        c.fillRect(0,0,canvas.width,canvas.height)
        if(keys.a.pressed){
            player.vel.x = -moveSpeed
        }
        else if(keys.d.pressed){
            player.vel.x = moveSpeed
        }
        else{
            player.vel.x = 0
        }

        player.draw()
        player.update()
    }
    animation()
