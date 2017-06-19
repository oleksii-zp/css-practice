var wss_i = 0;
var wss_array = ["HELLO WORLD!", "WELCOME!", "DON'T WORRY!", "BE HAPPY!"];
var wss_elem;
wss_elem = document.getElementById("wss");

function wssSlide() {
    wss_elem.innerHTML = wss_array[wss_i];
    wss_elem.style.opacity = 1;
    setTimeout('wssNext()', 2000);
}

function wssNext() {
    wss_i++;
    wss_elem.style.opacity = 0;
    if (wss_i > (wss_array.length - 1)) {
        wss_i = 0;
    }
    setTimeout('wssSlide()', 2000);
}
wssSlide();


