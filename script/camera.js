
class Camera {
    constructor(player) {
        this.player = player;
        this.y = 0;
        this.smoothing = 0.1;
    }

    update() {
        // Keep the player near the center of the screen
        const targetY =
            this.player.position.y +
            this.player.height / 2 -
            window.innerHeight / 2;

        // Calculate the maximum scroll position
        const maxScroll =
            document.documentElement.scrollHeight -
            window.innerHeight;

        // Keep the camera within the page boundaries
        const boundedTarget = Math.max(
            0,
            Math.min(targetY, maxScroll)
        );

        // Smoothly move toward the player
        this.y += (boundedTarget - this.y) * this.smoothing;

        // Move the webpage to match the camera
        window.scrollTo(0, this.y);
    }
}
