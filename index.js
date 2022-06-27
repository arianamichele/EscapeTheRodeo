//SETUP create the base

const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

// variables
const grid = 80;
let keys = [];
let score = 0;
let movementSpeed = 1;

const cactusArray = [];
const ropeArray = [];
const spurArray = [];
const hatArray = [];
const bootArray = [];
const manArray = [];

// pictures
const backgroundPhoto = new Image();
backgroundPhoto.src = 'background.png'

const boot = new Image();
boot.src = 'boot.png';

const cactus = new Image();
cactus.src = 'cactus.png';

const rope = new Image();
rope.src = 'laso.png';

const spur = new Image();
spur.src = 'shoe.png';

const hat = new Image();
hat.src = 'hat.png';

const toroPhoto = new Image();
toroPhoto.src = 'toro.png'