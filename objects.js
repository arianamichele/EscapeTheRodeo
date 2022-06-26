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
        ctx3.fillStyle = 'pink';
        ctx3.fillRect(this.x, this.y, this.width, this.height);
    }
    update(){
        this.x += this.speed * movementSpeed;
        if (this.speed > 0){
            if (this.x > canvas.width + this.width){
                this.x = 0 - this.width;
             }
        } else {
            if(this.x < 0 - this.width){
                this.x = canvas.width + this.width
            }
        }
    }
}

// create the objects to pass through first lane
function initObjects(){
    for (let i = 0; i < 3; i++){
        let x = i * 200;
        cactusArray.push(new Objects(x, canvas.height - grid * 2 - 20, grid, grid, 1, 'cactus'))
    }
    for (let i = 0; i < 3; i++){
        let x = i * 250;
        ropeArray.push(new Objects(x, canvas.height - grid * 3 - 20, grid, grid, -2, 'rope'))
    }
    for (let i = 0; i < 3; i++){
        let x = i * 200;
        spurArray.push(new Objects(x, canvas.height - grid * 4 - 20, grid, grid, 2, 'spur'))
    }
    for (let i = 0; i < 3; i++){
        let x = i * 250;
        hatArray.push(new Objects(x, canvas.height - grid * 5 - 20, grid, grid, -2, 'hat'))
    }
    for (let i = 0; i < 3; i++){
        let x = i * 250;
        bootArray.push(new Objects(x, canvas.height - grid * 6 - 20, grid, grid, 2, 'boot'))
    }
    }
initObjects();

function handleObjects(){
    for (let i = 0; i < cactusArray.length; i++){
        cactusArray[i].update();
        cactusArray[i].create();
    }
    for (let i = 0; i < ropeArray.length; i++){
        ropeArray[i].update();
        ropeArray[i].create();
    }
    for (let i = 0; i < spurArray.length; i++){
        spurArray[i].update();
        spurArray[i].create();
    }
    for (let i = 0; i < hatArray.length; i++){
        hatArray[i].update();
        hatArray[i].create();
    }
    for (let i = 0; i < bootArray.length; i++){
        bootArray[i].update();
        bootArray[i].create();
    }
}