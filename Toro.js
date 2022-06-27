// Toro
class Toro {
    // The constructor method is a special method of a class for creating and initializing an object instance of that class.
    constructor(){
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth/5
        this.height = this.spriteHeight/5;
        this.x = canvas.width/2 - this.width/2
        this.y = canvas.height - this.height -40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }
    update() {
        //console.log('update');
        if (keys[38]){ //moving toro up
            if (this.moving === false){
                this.y -= grid;
                this.moving = true;
            }
        }
        if (keys[40]){ // moving toro down
            if(this.moving === false && this.y < canvas.height - this.height * 2){
                this.y += grid;
                this.moving = true;
                }
            }
        if (keys[37]){ // moving toro left
            if(this.moving === false && this.x > this.width){
                this.x -= grid;
                this.moving = true;
                }
            }
        if (keys[39]){ // moving toro right
            if(this.moving === false && this.x < canvas.width - this.width * 2){
                this.x += grid;
                this.moving = true;
            }
        }
        if (this.y < 0) scorePoint();
    }
    draw() {
       //ctx1.fillStyle = 'brown';
       //ctx3.fillRect(this.x, this.y, this.width, this.height)
       ctx3.drawImage(toroPhoto, 0, 0, this.spriteWidth, this.spriteHeight, this.x - 5, this.y, this.width * 3.5, this.height * 3)
    }
    run(){
        //console.log('run')
    }
}
//makes constructor make new object
const toro = new Toro();