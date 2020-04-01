import $ from 'jquery';

export let jumpToPage = (path) => {
    window.location = path;
}

export let setBarHeights = () => {
    var headerheight = document.getElementById('toolbar').clientHeight;
    var windowHeight = window.innerHeight;

    $("#side-drawer").height(windowHeight - headerheight + 14);
    $("#content_div").height(windowHeight - headerheight);

    /* var windowWidth = window.innerWidth;
    var sideBarWidth = document.getElementById('side-drawer').clientWidth + 20;

    $("#content_div").width(windowWidth - sideBarWidth); */
}