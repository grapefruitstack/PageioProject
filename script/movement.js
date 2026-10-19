
    window.addEventListener('keypress',(event)=>{
        switch (event.key){
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
        switch (event.key){
            case 'a':
                keys.a.pressed = false;
                break;
            case 'd':
                keys.d.pressed = false;
                break;
            }
        })

