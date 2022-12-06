var mySnare, snareAmplitude, snarePlay, myKick, kickAmplitude, kickPlay;

function preload(){
    mySnare = loadSound("Assets/snare.mp3");
    myKick = loadSound("Assets/kick.mp3");
}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");
    background(0)

    snareAmplitude = new p5.Amplitude();
    kickAmplitude = new p5.Amplitude();
}


function keyPressed(){
//SnareButton
    if (keyCode === LEFT_ARROW){
        snarePlay = true;
        mySnare.play();
    }
//KickButton
    if (keyCode === ENTER){
        kickPlay = true;
        myKick.play();
    }
    
}


function draw() {
    
//SnareAmplitude
    if(snarePlay == true){
        var level = snareAmplitude.getLevel();
        console.log(level);

        var vol = map(level, 0, 1, 0, 1000);
        var col = map(level, 0, 1, 0, 255);


        if(snarePlay == true){
            fill(col + 10)
            ellipse(300, 400, vol + 100);

            background(col);
        }

//SnareEllipse
        fill(90, 90, 90);
        ellipse(300, 400, vol/2)
        }

//KickAmplitude
    if(kickPlay == true){
        var level = kickAmplitude.getLevel();
        console.log(level);

        var vol = map(level, 0, 1, 0, 1000);
        var col = map(level, 0, 1, 0, 255);

        if(kickPlay == true){
            fill(col + 10)
            ellipse(200, 100, vol/2);

            background(col);
        }

//KickEllipse
        fill(90, 90, 90);
        ellipse(200, 100, vol/1.2);
    }
}