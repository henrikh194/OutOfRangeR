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


function drawCircle(size, x, y, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    var radius = size;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
}

function drawGrass(x, y, height) {
    ctx.fillStyle = "#47e823";
    ctx.strokeStyle = "#47e823";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0 + x, 10 + y);
    ctx.lineTo(4 + x, 0 + y - height);
    ctx.lineTo(8 + x, 10 + y);
    ctx.lineTo(0 + x, 10 + y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawTree(x, y, height) {
    ctx.fillStyle = "#782c06";
    ctx.strokeStyle = "#782c06";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0 + x, 20 + y);
    ctx.lineTo(2 + x, 0 + y - height);
    ctx.lineTo(3 + x, 0 + y - height);
    ctx.lineTo(5 + x, 20 + y);
    ctx.lineTo(0 + x, 20 + y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "green";
    ctx.strokeStyle = "#1c4a05";

    const crownHeight = height * 0.7;
    const levels = 5;
    const crownTop = y - height;
    
    for (let i = 0; i < levels; i++) {
        const levelHeight = crownHeight / levels;
        const triangleHeight = levelHeight * 1.2;
        const baseWidth = 10 + i * 4;
        const offsetY = i * (levelHeight * 0.8);
        ctx.beginPath();
        ctx.moveTo(x + 2.5, crownTop + offsetY);
        ctx.lineTo(x - baseWidth / 2 + 2.5, crownTop + triangleHeight + offsetY);
        ctx.lineTo(x + baseWidth / 2 + 2.5, crownTop + triangleHeight + offsetY);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}
