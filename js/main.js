document.addEventListener("DOMContentLoaded", () => {


    function stopSound() {
        document.addEventListener('play', function(e) {
            // $('.sound').trigger('stop');
            if (event.target.classList.contains("sound") === false) {
                $('.sound').trigger('pause');
                $(".sound").prop("currentTime",0);
            }
            if (document.getElementsByClassName("sound")[0]) {
                document.getElementsByClassName("sound")[0].classList.remove("sound");
            }
            event.target.classList.add("sound");
        }, true);
    }
    stopSound();
});

function spoiler() {
    document.createElement('pre');
}

// function spoiler(id) {
//     if (document.getElementById(id).style.display=='none') {
//         document.getElementById(id).style.display=''}
//     else {
//         document.getElementById(id).style.display='none'
// }}
