song1= "";
song2= "";

function setup()
{
    canvas= createCanvas(400, 350);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}
function preload()
{
    song1= loadSound("music.mp3");
    song2= loadSound("music2.mp3");
}
function draw()
{
    image(video, 0, 0, 400, 350);
}
function play()
{
    song1.play();
}
