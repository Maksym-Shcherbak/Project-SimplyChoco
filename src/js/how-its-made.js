// YouTube Player API Reference
// https://developers.google.com/youtube/iframe_api_reference

window.addEventListener('load', function () {
    const playerId = "how-its-made-video-player";
    const playerContentImageId = "how-its-made-content-image";
    const playerLoadingImage = document.getElementById("video-loading-circle-container");
    const playButtonElement = document.getElementById("how-its-made-play-button");

    playButtonElement.addEventListener("click", (event) => {
        playButtonElement.style.display = "none";
        playerLoadingImage.hidden = false;

        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    });

    window.onYouTubeIframeAPIReady = function() {
        const player = new YT.Player(playerId, {
            videoId: 'u459lgZFqgk',
            events: {
                'onReady': onPlayerReady
            }
        });
    
        function onPlayerReady(event) {
            playerLoadingImage.hidden = true;
            document.getElementById(playerContentImageId).hidden = true;
            document.getElementById(playerId).style.display = "block";
            player.playVideo();
        }
    }
});
