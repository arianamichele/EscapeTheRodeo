function animate(){
    ctx3.clearRect(0, 0, canvas.clientWidth, canvas.height)
    toro.draw();
    toro.update();
    handleObjects();
    requestAnimationFrame(animate);
} //utilize recursion so the functions continuously is calling itself

animate(); //when running, now it is never ending

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