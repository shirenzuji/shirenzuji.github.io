var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var img=document.getElementById("ASD")
img.onload = function(){
    ctx.drawImage(img, 10, 10, 10, 10);
}
