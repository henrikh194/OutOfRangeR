function drawTest(){
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 100, 100);
}

function drawCross(){
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const size = 50;

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY - size);
    ctx.lineTo(centerX, centerY + size);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX - size, centerY);
    ctx.lineTo(centerX + size, centerY);
    ctx.stroke();
}
