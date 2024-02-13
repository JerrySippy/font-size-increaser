difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
  video = createCapture(VIDEO);
  video.size(550, 550);
  canvas = createCanvas(550, 450);
  canvas.position(950, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;

    difference = floor(leftWristX - rightWristX);
    console.log(
      "leftWristX = " +
        leftWristX +
        "rightWristX = " +
        rightWristX +
        "difference =" +
        difference
    );
  }
}
function modelLoaded() {
  console.log("poseNet is initialized");
}

function draw() {
  background("blue");

  document.getElementById("font_size").innerHTML =
    "font size will be " + difference + "px";
  textSize(difference);
  fill("#FFE787");
  text('Peter', 50, 400);
}
