nosex=0;
nosey=0;
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/Wb02YCXY/download-removebg-preview.png");
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nosex,nosey,30,30);
}
function take_snapshot(){
    save('myfilterimage.png')
}
function modelLoaded(){
    console.log("modelLoaded")
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x-13;
        nosey=results[0].pose.nose.y-13;
        console.log("nosex "+nosex);
        console.log("nosey "+nosey);
    }
}