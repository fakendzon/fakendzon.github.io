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
    console.log(preText);
    if (preText.length > 0) {
        styleDisplay(preText);
    } else {
    var newPre = document.createElement('pre');
    // newPre.className = "text";
    newPre.innerHTML = 'HI';
    pre3.appendChild(newPre);
    }

    // obj.parentNode.childNode.getElementsByTagName("audio");
    // var arr = Array.prototype.slice.call(obj.parentNode.children)
    // console.log(typeof(ar));
    // console.log(obj.parentNode.children.namedItem('pre'));
    // if (obj.parentNode.childNodes.indexOf('audio')) {console.log('y');}
    // $('.text').load("../music/Holly%20Henry%20–%20Seven%20Nation%20Army%20(teemid%20remix).txt")
    obj.parentNode.id = "pre";
    if (obj.parentNode.getElementsByTagName("pre").length > 0) {console.log('true');}
    document.getElementById('pre').removeAttribute('id');
}

// function spoiler(id) {
//     if (document.getElementById(id).style.display=='none') {
//         document.getElementById(id).style.display=''}
//     else {
//         document.getElementById(id).style.display='none'
// }}
