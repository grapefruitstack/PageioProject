
const canvas = document.querySelector('#game-canvas');
const c = canvas.getContext('2d');

let jumpForce = 20;
let moveSpeed = 5;
let movingRight = false;
let movingLeft = false;
let isMouseDown = false;

const player = new Player();

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

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function animation() {
    requestAnimationFrame(animation);

    c.clearRect(0, 0, canvas.width, canvas.height);

    if (keys.a.pressed || movingLeft) {
        player.vel.x = -moveSpeed;
    } else if (keys.d.pressed || movingRight) {
        player.vel.x = moveSpeed;
    } else {
        player.vel.x = 0;
    }

    player.draw();
    player.update();
}

animation();
