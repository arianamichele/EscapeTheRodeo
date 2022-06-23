// Toro
class Toro {
    // The constructor method is a special method of a class for creating and initializing an object instance of that class.
    constructor(){
        this.spriteWidth = 300;
        this.spriteHeight = 300;
        this.width = this.spriteWidth/6
        this.height = this.spriteHeight/6;
        this.x = canvas.width/2 - this.width/2
        this.y = canvas.height - this.height -40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }
    update() {
        console.log('update');
    }
    draw() {
       ctx1.fillStyle = 'brown';
       ctx3.fillRect(this.x, this.y, this.width, this.height)
    }
}
//makes constructor make new object
const toro = new Toro();