"use strict";
// This is a physical Angry Grandpa rage tuba thing!

function draw()
{
    var canvas = document.getElementById("agpRagePhysics");
    var ctx = canvas.getContext("2d");
    var dummy = new Image();
    dummy.src = "images/agp.jpg";
    ctx.drawImage(dummy,0,0,100,100);
}
