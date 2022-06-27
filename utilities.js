
function animate(){
     ctx3.clearRect(0, 0, canvas.clientWidth, canvas.height)
     ctx1.drawImage(backgroundPhoto, 0, 0, canvas.width, canvas.height)
     toro.draw();
     toro.update();
            handleObjects();
            handleScoreBoard();
            requestAnimationFrame(animate);
        } //utilize recursion so the functions continuously is calling itself
        
        animate(); 
        
        
//need to make Toro move 
window.addEventListener('keydown', function(e){
    keys = [] 
    keys[e.keyCode] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40]){
        toro.run();
    }
});
        
window.addEventListener('keyup', function(e){
    delete keys[e.keycode];
    toro.moving = false;
        })
        
function scorePoint(){
    score++;
    toro.x = canvas.width/2 -  toro.width/2;
    toro.y = canvas.height - toro.height - 40;
}
        
function handleScoreBoard(){
    ctx4.fillStyle = 'black';
    ctx4.strokeStyle = 'black';
    ctx4.font = '20px Tahoma';
    ctx4.strokeText('score', 265, 15);
    ctx4.font = '60px Tahoma';
    ctx4.fillText(score, 270, 65)
}
        
function collision(first, second){
    return!( first.x > second.x + second.width ||
            first.x + first.width < second.x ||
            first.y > second.y + second.height ||
            first.y + first.height < second.y);
        }
        
function resetGame(){
    toro.x = canvas.width/2 -  toro.width/2;
    toro.y = canvas.height - toro.height - 40;
    score = 0;
}
        
function startGame() {
    let startDiv = document.getElementById('start');
    let gameCanvas = document.getElementById('canvas');
    let gameOver = document.getElementById('game-over');
    startDiv.style.display = "none";
    gameCanvas.style.display = "block";
    gameOver.style.display = "none";
    start();
 }
        
function gameOver() {
    let startDiv = document.getElementById('start');
    let gameCanvas = document.getElementById('canvas');
    let gameOver = document.getElementById('game-over');
    startDiv.style.display = "none";
    gameCanvas.style.display = "none";
    gameOver.style.display = "block";
    resetGame();
 }


function keyPressed() {
    if (keyCode===ENTER){
        mode=1;
    }
}

