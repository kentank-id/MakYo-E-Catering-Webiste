const se_audio = new Audio();
se_audio.src = "money_cash.wav";

/*
var color = "#f368e0";
var color2 = "#F9FFF7";
var i = 0;
document.getElementById('btn-home').addEventListener("mouseover", function(){
    document.getElementById('btn-home').style.background = color;
})*/

function home(){
    document.getElementById('btn-home').style.background = "#e3d109";
    document.getElementById('btn-home').style.color = "#201f2c";
}
function home2(){
    document.getElementById('btn-home').style.background = "#201f2c";
    document.getElementById('btn-home').style.color = "#ffffff";
}

function order(){
    document.getElementById('btn-order').style.background = "#e3d109";
    document.getElementById('btn-order').style.color = "#201f2c";
}
function order2(){
    document.getElementById('btn-order').style.background = "#201f2c";
    document.getElementById('btn-order').style.color = "#ffffff";
}

function testi(){
    document.getElementById('btn-testi').style.background = "#e3d109";
    document.getElementById('btn-testi').style.color = "#201f2c";
}
function testi2(){
    document.getElementById('btn-testi').style.background = "#201f2c";
    document.getElementById('btn-testi').style.color = "#ffffff";
}

/* function change_home() {
  var book_color = "#2325F6";
  var getwarna1 = document.getElementById("btn-home");
  getwarna1.addEventListener("change", (event) => {
    document.body.style.background = book_color;
  });
} */
