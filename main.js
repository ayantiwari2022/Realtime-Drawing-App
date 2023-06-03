nosex = 0;
nosey = 0;
diff = 0;
rightwx = 0;
leftwx = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position (560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("poseNet Initialized.");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex = "+nosex+", nosey ="+nosey);
        leftwx = results[0].pose.leftWrist.x;
        rightwx = results[0].pose.rightWrist.x;
        diff = floor(leftwx-rightwx);
        console.log("leftwristx = "+leftwx+", rightwristx = "+rightwx+", difference = "+diff);
    }
}
function draw(){
    background("#999999");
    fill("#0043fc");
    stroke("#fc0000");
    square(nosex,nosey,diff);
}