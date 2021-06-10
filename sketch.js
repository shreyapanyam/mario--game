var mario, marioIMG, marioIMG2;
var ground, Background, backgroundIMG;
var coronavirus, coronavirusIMG;
var handsanitizer, handsanitizerIMG;
var mask, maskIMG;

var gameState = 0;

function preload() {
  marioIMG = loadImage("images/mario_standing_removed.png");
  marioIMG2 = loadImage("images/mario_standing_removed.png","images/mario_removed.png");

  backgroundIMG = loadImage("images/Background.png");

  coronavirusIMG = loadImage("images/coronavirus_removed.png");

  handsanitizerIMG = loadImage("images/Handsanitizer_removed.png");

  maskIMG = loadImage("images/mask_removed.png");
  
}

function setup() {
  createCanvas(600,400);
  
  coronavirusGroup = createGroup();
  handsanitizerGroup = createGroup();
  maskGroup = createGroup();

  Background = createSprite(300, 100, 800, 350);
  Background.addImage(backgroundIMG);
  Background.scale = 0.68;

  

  mario = createSprite(50, 270, 20, 50);
  mario.addImage(marioIMG);
 // mario.addAnimation("change", marioIMG2);
  mario.scale = 0.1;
  console.log(mario.depth);
  ground = createSprite(200, 300, 500, 10);
  mario.debug = true;
  ground.debug = true;


  

  
}

function draw() {
  background("lightgray");  


  if (gameState === 0) {
    Background.velocityX = 0;
    if (keyDown("space")) {
      gameState = 1;
      
    }
  }
  if (gameState === 1) {
    Background.velocityX = -3;
    if (Background.x < 0) {
      Background.x = 300;
    }
    spawnCoronavirus();
    spawnHandsanitizer();
    spawnMask();
    mario.collide(ground);
   // mario.changeAnimation("change", marioIMG2);

    if (keyDown("up_arrow")) {
      mario.velocityY = -10;

    }
    mario.velocityY = mario.velocityY + 0.7;
  }
  

  

  console.log(Background.x);

  

  drawSprites();
}

function spawnCoronavirus() {
  if (frameCount % 150 === 0) {
    coronavirus = createSprite(100, 270, 10, 10);
    coronavirus.addImage(coronavirusIMG);
    coronavirus.scale = 0.1;
    coronavirus.y = Math.round(random(70, 130));
    coronavirus.velocityX = -4;
    coronavirusGroup.add(coronavirus);
  }
}

function spawnHandsanitizer() {
  if (frameCount % 250 === 0) {
    handsanitizer = createSprite(120, 260, 10, 10);
    handsanitizer.addImage(handsanitizerIMG);
    handsanitizer.scale = 0.1;
    handsanitizer.y = Math.round(random(80, 120));
    handsanitizer.velocityX = -4;
    handsanitizerGroup.add(handsanitizer);
  }
}

function spawnMask() {
  if (frameCount % 350 === 0) {
    mask = createSprite(110, 280, 10, 10);
    mask.addImage(maskIMG);
    mask.scale = 0.1;
    mask.y = Math.round(random(90, 150));
    mask.velocityX = -4;
    maskGroup.add(mask);
  }
}

