status = "";

function preload(){
    img = loadImage("kitchen.jpeg");
}

function setup(){
    canvas  = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";    
}

function modelLoaded(){
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(results){
    if(error){
       console.log(error);
    }
    console.log(results);
 }
