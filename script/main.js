
const canvas = document.querySelector('#game-canvas');
const c = canvas.getContext('2d');

let jumpForce = 20;
let moveSpeed = 5;
let movingRight = false;
let movingLeft = false;
let isMouseDown = false;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


resizeCanvas();
window.addEventListener('resize', resizeCanvas);


const player = new Player();
const camera = new Camera(player);

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
    };


function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, canvas.width, canvas.height);

    const movingLeftNow = keys.a.pressed || movingLeft;
    const movingRightNow = keys.d.pressed || movingRight;
    player.vel.x =
        (movingRightNow ? moveSpeed : 0) -
        (movingLeftNow ? moveSpeed : 0);

    player.update();
    camera.update();
    player.draw();
}

animate();
