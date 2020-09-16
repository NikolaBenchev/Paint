"use strict"
let canvas = document.getElementById("canvas"),
ctx = canvas.getContext('2d');

let canvasWidth = 500;
let canvasHeight = 500;

let colorPicker = document.getElementById("colorPicker");
let brushSize = document.getElementById("brushSize");

let mouse = {
    x: undefined,
    y: undefined
}

let isDrawing = false;

let currentTool,
currentColor = 'red',
currentSize;

let drawings = [];

class Drawing
{
    constructor(x, y, radius, color)
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw()
    {
        ctx.fillStyle = this.color;
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function Start()
{
    canvas.setAttribute("width", canvasWidth);
    canvas.setAttribute("height", canvasHeight);    
}

function Draw()
{
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for(let i = 0; i < drawings.length; i++)
    {
        drawings[i].draw();
    }
}

function Main()
{
    requestAnimationFrame(Main);
    Draw();
    currentColor = colorPicker.value;
    currentSize = brushSize.value;
    if(isDrawing)
        drawings.push(new Drawing(mouse.x, mouse.y, currentSize, currentColor));
}


document.addEventListener("mousemove", function(ev)
{
    mouse.x = ev.x;
    mouse.y = ev.y;
})

document.addEventListener("mousedown", function()
{
    isDrawing = true;
});

document.addEventListener("mouseup", function()
{
    isDrawing = false;
})

document.addEventListener("keypress", function(ev)
{
    console.log(ev.keyCode);
    switch(ev.keyCode)
    {
        
    }
});


Start();
Main();
