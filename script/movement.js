
    window.addEventListener('keypress',(event)=>{
        switch (event.key.toLowerCase()){
            //empty space below denotes the spacebar
            case ' ':
                if(player.vel.y===0)
                    {player.vel.y = -jumpForce;}
                break;
            case 'a':
                keys.a.pressed = true;
                break;
            case 'd':
                keys.d.pressed = true;
                break;
            case 's': //used for clicking on links
                     break;
        }
    })
    window.addEventListener('keyup',(event)=>{
        switch (event.key.toLowerCase()){
            case 'a':
                keys.a.pressed = false;
                break;
            case 'd':
                keys.d.pressed = false;
                break;
            }
        })


    window.addEventListener('pointerdown', (event) => {
        isMouseDown = true;

        mousePosX = event.clientX;
        mousePosY = event.clientY;

        const ratioOfPageX = mousePosX / window.innerWidth;

        if (ratioOfPageX < 0.3) {
            movingLeft = true;
        } else if (ratioOfPageX >= 0.7) {
            movingRight = true;
        }

        if (mousePosY <= 100 && player.vel.y === 0) {
            player.vel.y = -jumpForce;
        }

        console.log('pointerdown:', mousePosX, mousePosY);
    });

    window.addEventListener('pointerup', () => {
        isMouseDown = false;
        movingLeft = false;
        movingRight = false;
    });

    window.addEventListener('pointercancel', () => {
        isMouseDown = false;
        movingLeft = false;
        movingRight = false;
    });


