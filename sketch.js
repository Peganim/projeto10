//variáveis para o t-rex
var trex, trexRunning;
//variável para as bordas
var edges;
//variáveis para o chão
var ground, groundImage;

//pré carregamento de imagens 
function preload() {
  //imagens do t-rex sendo carregadas na var auxiliar 
  trexRunning = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  //imagem do chão sendo carregada na var auxiliar 
  groundImage = loadImage("ground2.png");
}

  //função de configuração
  function setup() {
  //área do game
  createCanvas(600, 200);

  //t-rex sprite e caracteristicas
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("correndo", trexRunning);
  trex.scale = 0.4;

  //sprite do chão e características 
  ground = createSprite(200,180,400,20);
  ground.addImage("chao", groundImage);


  //bordas
  edges = createEdgeSprites();
}

//executa várias vezes 
  function draw() {
  //cor de fundo
  background("white");

  //velocidade do chão
  ground.velocityX = -4;

  //recarregamento do chão
  if (ground.x<0){
  ground.x = ground.width/2;
  }

  //código para o trex pular
  if (keyDown("space")) {
    trex.velocityY = -10;
  }
  //gravidade
  trex.velocityY = trex.velocityY + 0.5;

  //trex colidindo
  trex.collide(ground);

  //desenha os sprites 
  drawSprites();
}

