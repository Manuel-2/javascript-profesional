
const video = document.getElementById("videoContent");
const button = document.getElementById("controlButton");

class mediaPlayer {
    constructor(config) {
        this.media = config.el;
    }
    toglePlay() {
        if (this.media.paused) {
            this.media.play();
            return
        }
        this.media.pause();
    }
}

const mediaController = new mediaPlayer({ el: video });

button.onclick = () => mediaController.toglePlay();


