window.onload = function () {
    
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight/2;


    function domloaded(){
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, 150, 150);
    }
   function resize_canvas(){
        canvas = document.getElementById("canvas");
    }

    function random_Numbers(range){
        return Math.floor((Math.random() * range) + 1)
    }

    function draw_lines(){
        x1 = random_Numbers(canvas.height);
        y1 = random_Numbers(canvas.width);
        x2 = random_Numbers(canvas.height);
        y2 = random_Numbers(canvas.width)
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        console.log(x1,y1,x2,y2);
    }
    var i = 0;
    resize_canvas();
    //domloaded();
    do{
        draw_lines();
    }while(i< 5)
}

/*document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
}*/