/*
Twitch Stream Jackpot para ElRichMC

Copyright (c) 2017 Marcos Gómez
Idea y diseño: ElRichMC, PatoGraphics

Está prohibida la distribución no autorizada de 
este material o parte de él.

Source: http://github.com/margobra8/jackpot
Contacto: https://twitter.com/margobra8
*/

function set_body_height() {
    $('body').height($(window).height());
}
$(document).ready(function () {
    $(window).bind('resize', set_body_height);
    set_body_height();
});
