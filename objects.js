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
        if (this.type === 'boot'){
            //ctx1.fillRect(this.x, this.y, this.width, this.height)
            ctx1.drawImage(boot, 0, 0, 70, 80, this.x, this.y, this.width, this.height)
        }
        if (this.type === 'cactus'){
            //ctx1.fillRect(this.x, this.y, this.width, this.height)
            ctx1.drawImage(cactus, 0, 0, 100, 100, this.x, this.y, this.width, this.height)
        }
        if (this.type === 'rope'){
            //ctx1.fillRect(this.x, this.y, this.width, this.height)
            ctx1.drawImage(rope, 0, 0, 100, 100, this.x, this.y, this.width, this.height)
        }
        if (this.type === 'spur'){
            //ctx1.fillRect(this.x, this.y, this.width, this.height)
            ctx1.drawImage(spur, 0, 0, 100, 100, this.x, this.y, this.width, this.height)
        }
        if (this.type === 'hat'){
            //ctx1.fillRect(this.x, this.y, this.width, this.height)
            ctx1.drawImage(hat, 0, 0, 100, 100, this.x, this.y, this.width, this.height)
        }   
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
    for (let i = 0; i < 2; i++){
        let x = i * 250;
        ropeArray.push(new Objects(x, canvas.height - grid * 3 - 20, grid, grid, -1, 'rope'))
    }
    for (let i = 0; i < 3; i++){
        let x = i * 200;
        spurArray.push(new Objects(x, canvas.height - grid * 4 - 20, grid, grid, 1, 'spur'))
    }
    for (let i = 0; i < 2; i++){
        let x = i * 250;
        hatArray.push(new Objects(x, canvas.height - grid * 5 - 20, grid, grid, -1, 'hat'))
    }
    for (let i = 0; i < 3; i++){
        let x = i * 250;
        bootArray.push(new Objects(x, canvas.height - grid * 6 - 20, grid, grid, 1, 'boot'))
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
    //collisons
    for (let i = 0; i < cactusArray.length; i++){
        if (collision(toro, cactusArray[i])){
            resetGame();
        }
    }
    for (let i = 0; i < ropeArray.length; i++){
        if (collision(toro, ropeArray[i])){
            resetGame();
        }
    }
    for (let i = 0; i < spurArray.length; i++){
        if (collision(toro, spurArray[i])){
            resetGame();
        }
    }
    for (let i = 0; i < hatArray.length; i++){
        if (collision(toro, hatArray[i])){
            resetGame();
        }
    }
    for (let i = 0; i < bootArray.length; i++){
        if (collision(toro, bootArray[i])){
            resetGame();
        }
    }
}