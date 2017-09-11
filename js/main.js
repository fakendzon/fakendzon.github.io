document.addEventListener("DOMContentLoaded", () => {
    function spoiler(id) {
        if (document.getElementById(id).style.display=='none') {
            document.getElementById(id).style.display=''}
        else {
            document.getElementById(id).style.display='none'
    }}

    function stopSound() {
        document.addEventListener('play', function(e) {
        // <!-- $('.play').trigger('pause'); -->
        // <!-- $('.play').trigger('play'); -->
        // ('.sound').pause();
        // <!-- .sound.currentTime = 0; -->
            console.log('play');
            $('.sound').trigger('pause');
            // document.querySelector("audio").classList.toggle("sound");
            document.querySelectorAll("audio").classList.remove("sound");
            event.target.classList.add("sound");
              // if (event.target.classList.contains("delete")) {
            // document.querySelector("audio").classList.toggle("sound");
            // console.log(e);
        }, true);
    }
    stopSound();
});
