document.addEventListener("DOMContentLoaded", () => {

    function stopSound() {
        document.addEventListener('play', function(e) {
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


function styleDisplay(tag) {
    if (tag.style.display=='none') {
        tag.style.display='';
    } else {
        tag.style.display='none';
}}

function spoiler(obj) {
    var preText = obj.parentNode.getElementsByTagName("pre"); 
    if (preText.length > 0) {
        styleDisplay(preText[0]);
    } else {
        var newPre = document.createElement('pre');
        newPre.setAttribute("id", "text");
        obj.parentNode.appendChild(newPre);
        $('#text').load("music/" + obj.text.replace(new RegExp(" ",'g'),"%20") + ".txt");
        newPre.removeAttribute('id');
    }
}
