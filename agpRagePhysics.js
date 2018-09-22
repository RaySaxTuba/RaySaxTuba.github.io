"use strict";
// This is a physical Angry Grandpa rage tuba thing!

function draw()
{
    var dummy = new Image();
    dummy.src = "images/agp.jpg";
    var canvas = document.getElementById("agpRagePhysics");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(dummy,0,0,100,100);
}

