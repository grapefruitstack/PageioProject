    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    function draw() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    draw();
    window.addEventListener('resize', draw);

    //const height = 100
    let jumpForce = 20;
    let moveSpeed = 5;
    const downAttack = 10;
    var movingRight = false;
    var movingLeft = false;
    var isMouseDown = false;
    
    var mousePosX = document.getElementById("x");
    var mousePosY = document.getElementById("y");

    const pageWidth = document.documentElement.scrollWidth;
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
        if(keys.a.pressed||movingLeft){
            player.vel.x = -moveSpeed
        }
        else if(keys.d.pressed||movingRight){
            player.vel.x = moveSpeed
        }
        else{
            player.vel.x = 0
        }


        player.draw()
        player.update()
    }
    animation()

    const platforms = [
    { x: 200, y: 500, width: 150, height: 20 },
    { x: 400, y: 350, width: 150, height: 20 },
    { x: 600, y: 200, width: 150, height: 20 }
];

platforms.forEach(platform => {
    c.fillStyle = 'green';

    c.fillRect(
        platform.x,
        platform.y,
        platform.width,
        platform.height
    );
});

