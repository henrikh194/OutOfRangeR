function drawTest(){
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 100, 100);
}

function drawPlayGround(){
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    var f = 100;
    //triangle
    ctx.beginPath();
    ctx.moveTo(1*f,0*f);
    ctx.lineTo(2*f,1*f);
    ctx.lineTo(0*f,1*f);
    ctx.lineTo(1*f,0*f);
    ctx.stroke();
}
function drawTriangle(size,x,y,color){
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    var f = size;
    ctx.beginPath();
    ctx.moveTo(1*f+x,0*f+y);
    ctx.lineTo(2*f+x,1*f+y);
    ctx.lineTo(0*f+x,1*f+y);
    ctx.lineTo(1*f+x,0*f+y);
    ctx.stroke();
}

function drawCircle(size, x, y, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    var radius = size;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
}
