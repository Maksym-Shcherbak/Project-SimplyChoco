// Reference to YouTube IFrame Player API
// https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player

// 1. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. Get elements from the HTML page
var playerId = "how-its-made-video-player";
var playerIframe = document.getElementById(playerId);
var playerPlayButton = document.getElementById("how-its-made-play-button");
var playerContentImage = document.getElementById("how-its-made-content-image");

// 3. Set event handler for API "Ready" event
var player;
window.onYouTubeIframeAPIReady = function() {
    // create player
    player = new YT.Player(playerId, {
        events: {
            'onReady': onPlayerReady,
        }
    });
}

// 4. When player is ready show play button and add event listener to it to start video
function onPlayerReady(event) {
    // set click handler to play video
    playerPlayButton.addEventListener("click", (event) => {
        playerPlayButton.hidden = true;
        playerContentImage.hidden = true;
        playerIframe.hidden = false;
        player.playVideo();
    });
    playerPlayButton.hidden = false;
}