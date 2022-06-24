class Objects {
    constructor(x, y, width, height, speed, type){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
    }
    create(){
        ctx1.fillStyle = 'pink';
        ctx1.fillRect(this.x, this.y, this.width, this.height);
    }
    update(){
        this.x += this.speed * movementSpeed;
        if (this.x > canvas.width + this.width){
            this.x = 0 - this.width;
        }
    }
}

// create the objects to pass through first lane
function initObjects(){
    for (let i = 0; i < 2; i++){
        let x = i * 350;
        cactusArray.push(new Objects(x, canvas.height - grid * 2 - 20, grid, grid, 1, 'cactus'))
    }
}
initObjects();

function handleObjects(){
    for (let i = 0; i < cactusArray.length; i++){
        cactusArray[i].update();
        cactusArray[i].create();
    }
}