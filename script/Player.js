
class Player {
    constructor() {
        this.vel = {
            x: 0,
            y: 0,
            grav: 1
        };

        this.position = {
            x: 100,
            y: 100
        };

        this.width = 100;
        this.height = 100;
        this.onGround = false;

        this.bounds = {
            bottomOfScreen: this.position.y + this.height,
            leftOfScreen: this.position.x,
            rightOfScreen: this.position.x + this.width
        };
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }

    update() {
        const previousBottom = this.position.y + this.height;

        // PLAYER MOVEMENT
        this.position.x += this.vel.x;
        this.position.y += this.vel.y;

        // KEEP PLAYER WITHIN BOUNDS OF CANVAS
        this.position.x = Math.max(
            0,
            Math.min(this.position.x, canvas.width - this.width)
        );

        this.bounds.bottomOfScreen = this.position.y + this.height;
        this.bounds.leftOfScreen = this.position.x;
        this.bounds.rightOfScreen = this.position.x + this.width;

        this.onGround = false;

        // GET HTML PLATFORMS.
        const platforms = GameObjects.getPlatforms(canvas);

        for (const platform of platforms) {
            const overlapsHorizontally =
                this.bounds.rightOfScreen > platform.x &&
                this.bounds.leftOfScreen < platform.x + platform.width;

            const crossedPlatformTop =
                previousBottom <= platform.y &&
                this.bounds.bottomOfScreen >= platform.y;

            if (
                this.vel.y >= 0 &&
                overlapsHorizontally &&
                crossedPlatformTop
            ) {
                this.position.y = platform.y - this.height;
                this.vel.y = 0;
                this.onGround = true;

                this.bounds.bottomOfScreen = platform.y;
            }
        }

        // MAKE BOTTOM OF CANVAS A FLOOR
        if (this.position.y + this.height >= canvas.height) {
            this.position.y = canvas.height - this.height;
            this.vel.y = 0;
            this.onGround = true;
            this.bounds.bottomOfScreen = canvas.height;
        }

        if (!this.onGround) {
            this.vel.y += this.vel.grav;
        }
    }
}
