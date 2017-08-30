/*
Twitch Stream Jackpot para ElRichMC

Copyright (c) 2017 Marcos Gómez
Idea y diseño: ElRichMC, PatoGraphics

Está prohibida la distribución no autorizada de 
este material o parte de él.

Source: http://github.com/margobra8/jackpot
Contacto: https://twitter.com/margobra8
*/

function generar() {
    var imagen = 1 + Math.floor(Math.random() * 7);
    return imagen;
}

function determinarPremios() {
    var num = Math.floor(Math.random() * (150 - 1 + 1) + 1);
    console.log(num);

    if (num == 1) {
        $("#imga, #imgb, #imgc").attr("src", "1.png");
        return "777";
    } else if (num <= 21 && num > 1) {
        $("#imga, #imgb, #imgc").attr("src", "4.png");
        return "FAIL";
    } else if (num <= 41 && num > 21) {
        $("#imga, #imgb, #imgc").attr("src", "6.png");
        return "RELOJ";
    } else if (num <= 56 && num > 41) {
        $("#imga, #imgb, #imgc").attr("src", "3.png");
        return "ENDER PEARL";
    } else if (num <= 71 && num > 56) {
        $("#imga, #imgb, #imgc").attr("src", "7.png");
        return "RICH";
    } else if (num <= 90 && num > 71) {
        $("#imga, #imgb, #imgc").attr("src", "5.png");
        return "MARTILLO";
    } else if (num <= 100 && num > 90) {
        $("#imga, #imgb, #imgc").attr("src", "2.png");
        return "BIT";
    } else {
        $("#imga").attr("src", generar() + ".png");
        $("#imgb").attr("src", generar() + ".png");
        $("#imgc").attr("src", generar() + ".png");
        return "NADA";
    }
}

$("#bg")[0].play();

determinarPremios();

setTimeout(function () {
    $("#imga").fadeIn("50");
    setTimeout(function () {
        $("#imgb").fadeIn("50");
        setTimeout(function () {
            $("#imgc").fadeIn("50");
        }, 350);
    }, 300);
}, 4000);


/* $("#bg").bind("ended", function () {
    $("#imga, #imgb, #imgc").fadeIn("slow");
}); */