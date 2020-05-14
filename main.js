/*eslint-env browser*/

//https://www.youtube.com/watch?v=AixAmLWzXYg >tutorial

var move = document.getElementsByClassName("pijl");
document.onmousemove = function(){
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    //event.clientX => get the horizontal coordinate of the mousemove
    //event.clientY => get the vertical coordinate of the mousemove
    //window.innerWidth => get the browser width
    //window.innerHeight => get the browser heigth
    
    for(var i=0;i<2;i++){
        move[i].style.left = x;
        move[i].style.top = y;
        move[i].style.transform = "translate(-"+x+",-"+y+")";
    }
}
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
