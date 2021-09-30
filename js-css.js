var AA = document.getElementById("A-A");
var Aa = document.getElementById("A-a");
var Ab = document.getElementById("A-b");
var Ac = document.getElementById("A-c");
var Ad = document.getElementById("A-d");
var BB = document.getElementById("B-B");
var Ba = document.getElementById("B-a");
var Bb = document.getElementById("B-b");
var Bc = document.getElementById("B-c");
var Bd = document.getElementById("B-d");
var CC = document.getElementById("C-C");
var Ca = document.getElementById("C-a");
var Cb = document.getElementById("C-b");
var Cc = document.getElementById("C-c");
var Cd = document.getElementById("C-d");
var DD = document.getElementById("D-D");
var Da = document.getElementById("D-a");
var Db = document.getElementById("D-b");
var Dc = document.getElementById("D-c");
var Dd = document.getElementById("D-d");

var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");

Aa.style.display = "none";
Ba.style.display = "none";
Ca.style.display = "none";
Da.style.display = "none";
Ab.style.display = "none";
Bb.style.display = "none";
Cb.style.display = "none";
Db.style.display = "none";
Ac.style.display = "none";
Bc.style.display = "none";
Cc.style.display = "none";
Dc.style.display = "none";
Ad.style.display = "none";
Bd.style.display = "none";
Cd.style.display = "none";
Dd.style.display = "none";

A.style.backgroundColor = "red";
B.style.backgroundColor = "yellow";
C.style.backgroundColor = "pink";
D.style.backgroundColor = "gray";

A.onmouseover = function(){
    Aa.style.display = "block";
    Ab.style.display = "block";
    Ac.style.display = "block";
    Ad.style.display = "block"; 
}

A.onmouseout = function(){
    Aa.style.display = "none";
    Ab.style.display = "none";
    Ac.style.display = "none";
    Ad.style.display = "none"; 
}
B.onmouseover = function(){
    Ba.style.display = "block";
    Bb.style.display = "block";
    Bc.style.display = "block";
    Bd.style.display = "block"; 
}

B.onmouseout = function(){
    Ba.style.display = "none";
    Bb.style.display = "none";
    Bc.style.display = "none";
    Bd.style.display = "none"; 
}
C.onmouseover = function(){
    Ca.style.display = "block";
    Cb.style.display = "block";
    Cc.style.display = "block";
    Cd.style.display = "block"; 
}

C.onmouseout = function(){
    Ca.style.display = "none";
    Cb.style.display = "none";
    Cc.style.display = "none";
    Cd.style.display = "none"; 
}
D.onmouseover = function(){
    Da.style.display = "block";
    Db.style.display = "block";
    Dc.style.display = "block";
    Dd.style.display = "block"; 
}

D.onmouseout = function(){
    Da.style.display = "none";
    Db.style.display = "none";
    Dc.style.display = "none";
    Dd.style.display = "none"; 
}