/*eslint-env browser*/

//https://www.youtube.com/watch?v=AixAmLWzXYg >tutorial

//var move = document.getElementsByClassName("pijl");
//document.onmousemove = function(){
//    var x = event.clientX * 100 / window.innerWidth + "%";
//    var y = event.clientY * 100 / window.innerHeight + "%";
//    //event.clientX => get the horizontal coordinate of the mousemove
//    //event.clientY => get the vertical coordinate of the mousemove
//    //window.innerWidth => get the browser width
//    //window.innerHeight => get the browser heigth
//    
//    for(var i=0;i<2;i++){
//        move[i].style.transform = "translate(+"+x+",+"+y+")";
//    }
//}
//


//function onMouseMove (e) {
//    var x = e.clientX || e.touches[0].clientX;
//    var y = e.clientY || e.touches[0].clientY;
//    
//    worldYangle = -1( .5 - ( x / window.innerWidth)) *100;
//    worldXangle = -1( .5 - ( x / window.innerHeight)) *100;
//    updateView();
//    event.preventDefault();
//}

//var button2 = document.getElementById("weegschaal");

//button
var button = document.getElementById("weegschaal");

//body
var body = document.querySelector("body");

button.addEventListener("click", function() {
  body.classList.toggle("yay");
});

//cijfer
    //nul
    var nulH1 = document.getElementById("half1");
    var nulH2 = document.getElementById("half2");
    var nulH3 = document.getElementById("half3");
    var nulH4 = document.getElementById("half4");
    var nulH5 = document.getElementById("half5");
    var nulH6 = document.getElementById("half6");
    //een
    var een1 = document.getElementById("een1");
    var een2 = document.getElementById("een2");
    var een3 = document.getElementById("een3");
    var een4 = document.getElementById("een4");
var eenH = document.getElementById("eenhalf");
    var eenhalf1 = document.getElementById("eenhalf1");
    var eenhalf2 = document.getElementById("eenhalf2");
    var eenhalf3 = document.getElementById("eenhalf3");
    var eenhalf4 = document.getElementById("eenhalf4");
    var eenhalf5 = document.getElementById("eenhalf5");
    var eenhalf6 = document.getElementById("eenhalf6");

var Twee = document.getElementById("twee");
    var twee1 = document.getElementById("twee1");
    var twee2 = document.getElementById("twee2");
    var twee3 = document.getElementById("twee3");
    var twee4 = document.getElementById("twee4");

var tweeH = document.getElementById("tweehalf");
var Drie = document.getElementById("drie");
var drieH = document.getElementById("driehalf");

button.addEventListener("click", function() {
    nulH1.classList.toggle("yay");
    nulH2.classList.toggle("yay");
    nulH3.classList.toggle("yay");
    nulH4.classList.toggle("yay");
    nulH5.classList.toggle("yay");
    nulH6.classList.toggle("yay");
    een1.classList.toggle("yay");
    een2.classList.toggle("yay");
    een3.classList.toggle("yay");
    een4.classList.toggle("yay");
    eenhalf1.classList.toggle("yay");
    eenhalf2.classList.toggle("yay");
    eenhalf3.classList.toggle("yay");
    eenhalf4.classList.toggle("yay");
    eenhalf5.classList.toggle("yay");
    eenhalf6.classList.toggle("yay");
    twee1.classList.toggle("yay");
    twee2.classList.toggle("yay");
    twee3.classList.toggle("yay");
    twee4.classList.toggle("yay");

    eenH.classList.toggle("yay");
    Twee.classList.toggle("yay");
    tweeH.classList.toggle("yay");
    Drie.classList.toggle("yay");
    drieH.classList.toggle("yay");
});

//model

var M = document.getElementById("M");
var O = document.getElementById("O");
var D = document.getElementById("D");
var E = document.getElementById("E");
var L = document.getElementById("L");

var Z = document.getElementById("Z");

button.addEventListener("click", function() {
    M.classList.toggle("yay");
    O.classList.toggle("yay");
    D.classList.toggle("yay");
    E.classList.toggle("yay");
    L.classList.toggle("yay");
  Z.classList.toggle("yay");
});

//cm

var C = document.getElementById("C");
var punt = document.getElementById("punt");
var cM = document.getElementById("cM");
var punt2 = document.getElementById("punt2");

button.addEventListener("click", function() {
    C.classList.toggle("yay");
    punt.classList.toggle("yay");
    cM.classList.toggle("yay");
    punt2.classList.toggle("yay");
});

//kleine pijl

var driehoek = document.getElementById("driehoek");
var vierkant1 = document.getElementById("vierkant1");
var vierkant2 = document.getElementById("vierkant2");
var vierkant3 = document.getElementById("vierkant3");
var vierkant4 = document.getElementById("vierkant4");

button.addEventListener("click", function() {
    driehoek.classList.toggle("yay");
    vierkant1.classList.toggle("yay");
    vierkant2.classList.toggle("yay");
    vierkant3.classList.toggle("yay");
    vierkant4.classList.toggle("yay");
});

//grote pijl

var Gdriehoek = document.getElementById("rh0");
var Gvierkant1 = document.getElementById("rh1");
var Gvierkant2 = document.getElementById("rh2");
var Gvierkant3 = document.getElementById("rh3");
var Gvierkant4 = document.getElementById("rh4");
var Gvierkant5 = document.getElementById("rh5");
var Gvierkant6 = document.getElementById("rh6");
var Gvierkant7 = document.getElementById("rh7");
var Gvierkant8 = document.getElementById("rh8");
var Gvierkant9 = document.getElementById("rh9");

button.addEventListener("click", function() {
    Gdriehoek.classList.toggle("yay");
    Gvierkant1.classList.toggle("yay");
    Gvierkant2.classList.toggle("yay");
    Gvierkant3.classList.toggle("yay");
    Gvierkant4.classList.toggle("yay");
    Gvierkant5.classList.toggle("yay");
    Gvierkant6.classList.toggle("yay");
    Gvierkant7.classList.toggle("yay");
    Gvierkant8.classList.toggle("yay");
    Gvierkant9.classList.toggle("yay");
});

//blok onderste stippellijn

var een = document.getElementById("blok1"); 
var twee = document.getElementById("blok2");
var drie = document.getElementById("blok3");
var vier = document.getElementById("blok4");
var vijf = document.getElementById("blok5");

//onderste stippellijn
button.addEventListener("click", function() {
    een.classList.toggle("yay");
    twee.classList.toggle("yay");
    drie.classList.toggle("yay");
    vier.classList.toggle("yay");
    vijf.classList.toggle("yay");
});