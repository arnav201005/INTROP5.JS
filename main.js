function preload()
{

}

function setup()
{
  canvas=createCanvas(699,700);
  canvas.position(110,250);
  video=createCapture(VIDEO);
  video.hide();
  
  colur = ""
}

function draw()
{
    image(video,0,0,699,700);
    tint(colur);
}

function apply_filter()
{
    colur = document.getElementById("Cname").value;

}

function take_snapshot()
{
    save('arnav.png')
}
