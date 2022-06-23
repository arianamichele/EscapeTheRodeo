function animate(){
    ctx3.clearRect(0, 0, canvas.clientWidth, canvas.height)
    toro.draw();
    toro.update();
    requestAnimationFrame(animate);
} //utilize recursion so the functions continuously is calling itself

animate(); //when running, now it is never ending
//need to make Toro move 
