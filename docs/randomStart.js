//rcc: Howdy, this is to start with the video at a random time!
window.addEventListener('load', function() {
    const video = document.getElementById('JSTest');

    video.addEventListener('loadedmetadata', function() {
        let duration = video.duration;
        video.currentTime = Math.random() * duration;

        video.play();
    });
});
