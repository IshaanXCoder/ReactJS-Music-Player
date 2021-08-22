var mySong = document.getElementById("mySong")
var icon = document.getElementById("icon")

icon.onclick = function() {
    if (mySong.paused) {
        mySong.play();
        icon.src = "assets/media/pause.png";
    } else {
        mySong.pause();
        icon.src = "assets/media/play.png";
    }
}