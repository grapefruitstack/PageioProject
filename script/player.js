class Player {
    constructor() {
        this.width = 50;
        this.height = 50;

        const platforms = GameObjects.getPlatforms(canvas);
        const startingPlatform = platforms[platforms.length - 1];

        this.vel = {
            x: 0,
            y: 0,
            grav: 1
        };

        this.position = {
            x: startingPlatform
                ? startingPlatform.x + (startingPlatform.width - this.width) / 2
                : 100,
            y: startingPlatform
                ? startingPlatform.y - this.height
                : Math.max(
                    0,
                    document.documentElement.scrollHeight - this.height - 100
                )
        };

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
            this.position.x - window.scrollX,
            this.position.y - window.scrollY,
            this.width,
            this.height
        );
    }

    update() {
        const previousBottom = this.position.y + this.height;

        // Player movement
        this.position.x += this.vel.x;
        this.position.y += this.vel.y;

        // Keep player within horizontal bounds
        this.position.x = Math.max(
            0,
            Math.min(this.position.x, canvas.width - this.width)
        );

        this.bounds.bottomOfScreen = this.position.y + this.height;
        this.bounds.leftOfScreen = this.position.x;
        this.bounds.rightOfScreen = this.position.x + this.width;

        this.onGround = false;

        // Get HTML platforms
        const platforms = GameObjects.getPlatforms(canvas);

        for (const platform of platforms) {
            const overlapsHorizontally =
                this.bounds.rightOfScreen > platform.x &&
                this.bounds.leftOfScreen < platform.x + platform.width;

            const landingTolerance = 1;
            const crossedPlatformTop =
                previousBottom <= platform.y + landingTolerance &&
                this.bounds.bottomOfScreen >= platform.y - landingTolerance;

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

        // Document bottom acts as the floor
        const documentHeight = document.documentElement.scrollHeight;

        if (this.position.y + this.height >= documentHeight) {
            this.position.y = documentHeight - this.height;
            this.vel.y = 0;
            this.onGround = true;
            this.bounds.bottomOfScreen = documentHeight;
        }

        if (!this.onGround) {
            this.vel.y += this.vel.grav;
        }
    }
}
