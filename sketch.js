var bg,bgImg;
var player, shooterImg, shooter_shooting;

//variáveis das vidas do atirador
var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

//variáveis dos zumbis

var zombie, zombieImg, zombieGroup;

var life = 3;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  heart1Img = loadImage("assets/heart_1.png");
  heart2Img = loadImage("assets/heart_2.png");
  heart3Img = loadImage("assets/heart_3.png");
  zombieImg = loadImage("assets/zombie.png");

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1

  heart1 = createSprite(displayWidth - 140, 40, 20, 20)
  heart1.addImage(heart1Img)
  heart1.visible = false;
  heart1.scale = 0.4;

  heart2 = createSprite(displayWidth - 140, 40, 20, 20)
  heart2.addImage(heart2Img)
  heart2.visible = false;
  heart2.scale = 0.4;

  heart3 = createSprite(displayWidth - 140, 40, 20, 20)
  heart3.addImage(heart3Img)
  heart3.scale = 0.4;
  

//criando o sprite do jogador
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.3
 
  player.debug = true

  player.setCollider("rectangle",0,0,300,300)

  zombieGroup = new Group();

}

function draw() {
  background(0); 

  if(life === 3){
    heart3.visible = true;
    heart2.visible = false;
    heart1.visible = false;
  }

  if(life === 2){
    heart3.visible = false;
    heart2.visible = true;
    heart1.visible = false;
  }

  if(life === 1){
    heart3.visible = false;
    heart2.visible = false;
    heart1.visible = true;
  }
  
  if(life === 0){
    heart3.visible = false;
    heart2.visible = false;
    heart1.visible = false;
    player.destroy();
  }


  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando touches (toques)
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }

  if(keyDown("DOWN_ARROW")||touches.length>0){
  player.y = player.y+30
  }


//libere as balas e mude a imagem do personagem para a posição de tiro quando a tecla espaço for pressionada
  if(keyWentDown("space")){
  
    player.addImage(shooter_shooting)
  
  }

//player goes back to original standing image once we stop pressing the space bar
  else if(keyWentUp("space")){

  player.addImage(shooterImg)
  }

drawSprites();

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
