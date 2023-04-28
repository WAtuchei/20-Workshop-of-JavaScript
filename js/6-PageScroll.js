"use strict";
window.onscroll = () => scrollProgress()

function scrollProgress() {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        pageTop = document.documentElement.scrollTop,
        scrollPercentage = ((pageTop/pageHeight) * 100).toFixed(2);

    if (scrollPercentage <= 10) {
        $('.scroll-int').css("visibility", "hidden");
    }
    else {
        $('.scroll-int').css("visibility", "visible");
        $('.progress-Bar').css("width", `${scrollPercentage}%`);
    }
}