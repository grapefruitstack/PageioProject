
class GameObjects {
    static getPlatforms(canvas) {
        const canvasRect = canvas.getBoundingClientRect();

        const scaleX = canvas.width / canvasRect.width;
        const scaleY = canvas.height / canvasRect.height;

        const elements = document.querySelectorAll('div.platform');

        return Array.from(elements).map(element => {
            const rect = element.getBoundingClientRect();

            return {
                x: (rect.left - canvasRect.left) * scaleX,
                y: (rect.top - canvasRect.top) * scaleY,
                width: rect.width * scaleX,
                height: rect.height * scaleY
            };
        });
    }
}
