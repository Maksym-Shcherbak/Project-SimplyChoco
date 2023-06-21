// Different method to manipulate with videos using plyr
// https://github.com/sampotts/plyr

const playerId = "how-its-made-video-player";
const playerElement = document.getElementById(playerId);
const playerPlayButton = document.getElementById("how-its-made-play-button");
const playerContentImage = document.getElementById("how-its-made-content-image");

const player = new Plyr('#' + playerId);
player.on('ready', (event) => {
    // set click handler to play video
    playerPlayButton.addEventListener("click", (event) => {
        playerPlayButton.hidden = true;
        playerContentImage.hidden = true;
        playerElement.style.display = "block";
        player.play();
    });
    playerPlayButton.hidden = false;
});
