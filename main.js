
NoseX = 0;
NoseY = 0;
NoseXL = 0;
NoseYL = 0;

function preload() {
  IImage = loadImage('https://i.postimg.cc/13NNM3ST/Mustachee.png');

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded) 
    poseNet.on('pose', gotPoses);
    
}

function draw() {
    image(video, 0, 0, 300, 300);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
    //circle(NoseX, NoseY, 30)
    image(IImage, NoseX, NoseY, 40, 40)

    
}

function modelLoaded() {
    console.log("Pose Net Model Loaded") 
}



function gotPoses(results) {
  if (results.length >0) {
      console.log(results)
      NoseX = results[0].pose.nose.x - 15;
      NoseY = results[0].pose.nose.y - 15;
      
      console.log("Nose X is =" + results[0].pose.nose.x)
      console.log("Nose Y is =" + results[0].pose.nose.y)
  }
}

function take_snapshot(){
    save("PhotoShoot.png")
}

function lipstickkkkk() {
    console.log("Lipstick")
 
    IImage = loadImage('https://i.postimg.cc/cLjB4z1q/Lipsticckkkk.png')}


function mbeard() {
    console.log("Mustache")
    
    IImage = loadImage('https://i.postimg.cc/13NNM3ST/Mustachee.png')}