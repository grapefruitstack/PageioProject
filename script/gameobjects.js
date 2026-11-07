class GameObjects {
    static getPlatforms(canvas) {
        const elements = document.querySelectorAll('div.platform');

        return Array.from(elements).map(element => {
            const rect = element.getBoundingClientRect();

            return {
                x: rect.left + window.scrollX,
                y: rect.top + window.scrollY,
                width: rect.width,
                height: rect.height
            };
        });
    }
}