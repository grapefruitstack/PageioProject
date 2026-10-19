
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

    window.addEventListener('mousedown',(event)=>{
        isMouseDown = true;
        new MouseEvent(event);
        mousePosX = event.clientX
        mousePosY = event.clientY;
        console.log('mousedown');

        const ratioOfPageX = mousePosX/ pageWidth;

        if( ratioOfPageX <.3){            
                movingLeft = true;}
        else if( ratioOfPageX >=.7){
            movingRight = true;
        }
        if(mousePosY<= 100&& player.vel.y===0){
                {player.vel.y = -jumpForce;}

        }
        console.log(mousePosX+", "+mousePosY);

        
    })
    window.addEventListener('mouseup',()=>{
        isMouseDown = false;
        movingLeft = false;
        movingRight = false
    })
    window.addEventListener('mouseup',()=>{
    })

