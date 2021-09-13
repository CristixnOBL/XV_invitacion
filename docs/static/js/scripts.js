// Animaciones
AOS.init({
    easing: 'ease-out-back',
    duration: 2000,
});

// Cambio de color nav
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>50){
            $('#nav').css("background","linear-gradient(45deg, rgba(251, 204, 209, 0.5) 10%, transparent 10%),linear-gradient(65deg, transparent 70%, rgba(251, 204, 209, 0.5) 70%), linear-gradient(15deg, rgba(251, 204, 209, 0.5) 80%, transparent 80%), linear-gradient(25deg, rgba(251, 204, 209, 0.5) 30%, transparent 30%), linear-gradient(-35deg, rgba(251, 204, 209, 0.5) 50%, transparent 50%), rgba(251, 204, 209, 0.5)")
            $('#nav').css("transition","2s")
            $('#nav').css("box-shadow","0px -3px 50px 1px rgba(0,0,0,0.5)")
            $('#xv').css("color","#d63384")
            $('#xv').css("transition","2s")
        }
        else{
            $('#nav').css("background","linear-gradient(45deg, rgba(240, 240, 240, 0.2) 10%, transparent 10%), linear-gradient(65deg, transparent 70%, rgba(240, 240, 240, 0.2) 70%), linear-gradient(15deg, rgba(240, 240, 240, 0.2) 80%, transparent 80%), linear-gradient(25deg, rgba(240, 240, 240, 0.2) 30%, transparent 30%), linear-gradient(-35deg, rgba(240, 240, 240, 0.2) 50%, transparent 50%), rgba(240, 240, 240, 0.2)")
            $('#nav').css("box-shadow","none")
            $('#xv').css("color","white")
        }
    })
})

// Conteo hacia atras
// Set the date we're counting down to
var countDownDate = new Date("Jul 22, 2021 17:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="clock"
    //document.getElementById("clock").innerHTML = days + " : " + hours + " : "
    //+ minutes + " : " + seconds;
    document.getElementById("clock").innerHTML =
        "<div class='row'>"+
            "<div class='col'>"+days+"<p class='clock'>DIAS</p></div>"+
            "<div class='col'>"+hours+"<p class='clock'>HORAS</p></div>"+
            "<div class='col'>"+minutes+"<p class='clock'>MINUTOS</p></div>"+
            "<div class='col'>"+seconds+"<p class='clock'>SEGUNDOS</p></div>"+
        "</div>"

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "EXPIRED";
    }
}, 1000);

// Animaciones fondos
"use strict";var windowHeight=window.innerHeight,windowHeightExtra=0,safari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),mobile=/Mobi/.test(navigator.userAgent);safari&&!mobile&&(windowHeightExtra=window.outerHeight-window.innerHeight),mobile&&(windowHeight=window.screen.availHeight,windowHeightExtra=(window.screen.availHeight-window.innerHeight)/2);var positionParallax=function(e,t,a,i){var n=e.top/t-windowHeightExtra;a[i].style.top=n+"px"},animateParallax=function(e,t){for(var a=0;e.length>a;a++){var i=e[a].parentElement.parentElement.getBoundingClientRect();0<=i.top+i.height&&i.top<=windowHeight&&positionParallax(i,t,e,a)}},calculateHeight=function(e,t){for(var a=0;e.length>a;a++){var i=e[a].parentElement.parentElement.getBoundingClientRect(),n=e[a].parentElement.parentElement.offsetTop,o=(windowHeight-i.height)/2,r=windowHeight>i.height+n?i.height+n-n/t:i.height+2*(o-o/t);e[a].style.height=r+2*windowHeightExtra+"px",positionParallax(i,t,e,a)}},universalParallax=function(){this.init=function(i){void 0===i&&(i={}),i={speed:void 0!==i.speed?i.speed:1.5,className:void 0!==i.className?i.className:"parallax"};for(var n=document.getElementsByClassName(i.className),e=0;n.length>e;e++){var t=document.createElement("div");n[e].parentNode.insertBefore(t,n[e]),t.appendChild(n[e]);var a=n[e].parentElement;a.className+="parallax__container","relative"!==window.getComputedStyle(a.parentElement,null).getPropertyValue("position")&&(a.parentElement.style.position="relative");var o=n[e].dataset.parallaxImage;void 0!==o&&(n[e].style.backgroundImage="url("+o+")",1===n[e].classList.length&&"parallax"===n[e].classList[0]&&(n[e].style.backgroundRepeat="no-repeat",n[e].style.backgroundPosition="center",n[e].style.backgroundSize="cover"))}document.addEventListener("readystatechange",function(e){var t,a;"complete"===e.target.readyState&&(t=n,(a=i.speed)<1&&(a=1),calculateHeight(t,a),mobile||window.addEventListener("resize",function(){windowHeight=window.innerHeight,calculateHeight(t,a)}),window.addEventListener("scroll",function(){animateParallax(t,a)}))})}};

new universalParallax().init({
    speed: 8.0
});

// Envio de email
const btn = document.querySelector('#btn_asistencia')
const inputs = document.querySelector('#form_asistencia')
btn.addEventListener('click', () => {
    Email.send({
        SecureToken: "f0cce209-c4e5-49cb-8553-084e3fc056a8",
        To: "sofiafiesta15@gmail.com",
        From: "sofiafiesta15@gmail.com",
        Subject: "Confirmación de asistencia",
        Body: "Nombre(s): " + inputs.elements["nombres"].value + "<br> Apellidos(s): " + inputs.elements["apellidos"].value
        + "<br> Telefono: " + inputs.elements["telefono"].value + "<br><strong>" + inputs.elements["radio"].value + "</strong>",
    }).then(msg => alert("La asistencia se ha enviado"))
})


var button = document.getElementById("music_button");
var audio = document.getElementById("player");
var icon = document.getElementById("playpause");
audio.play();
if(audio.paused){
    icon.className = "fas fa-play";
} else {
    icon.className = "fas fa-pause";
}

button.addEventListener("click", function(){
    if(audio.paused){
        audio.play();
        icon.className = "fas fa-pause";
    } else {
        audio.pause();
        icon.className = "fas fa-play";
    }
});