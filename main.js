song = "";
leftWristX =0;
leftWristY = 0;
rightWristX =0;
rightWristY = 0;

function setup(){
    canvas = createCanvas(500,450);
    canvas.center();
    

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
} 

function preload(){
    song = loadSound("music.mp3");
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        LeftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("LeftWristX = " + leftWristX + "LeftWristY" + leftWristY );
        console.log("RightWristX = " + rightWristX + "RightWristY" + rightWristY );
    }
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function draw(){
    image(video,0,0,600,500);

}

function playsong(){
    song.play();
    song.setVolume(1);
    song.rate(1.5);

}
