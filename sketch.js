var pac;
var pacvelo = 3
var ghostvelo = 3
var ghostvelo1 = 2
var ghostvelo2 = 1
var life = 4
var score = 0
var coins = []
var frutas
function preload() {
    pc = loadAnimation("pc1.png", "pc2.png");
    rg = loadAnimation("g1.png", "g2.png", "g3.png", "g4.png", "g5.png", "g6.png")
    bg = loadAnimation("fa1.png", "fa2.png", "fa3.png", "fa4.png" )
    pg = loadAnimation("r1.png", "r2.png", "r3.png", "r4.png", "r5.png","r6.png")
    pclife = loadImage("pc1.png")
    gameover = loadImage("gameover-red.png")
    fruit1 = loadImage("cherry.png")
    fruit2 = loadImage("orange.png")
}

function setup() {
    createCanvas(800, 400);
    pac = createSprite(200, 200);
    pac.addAnimation("pc", pc);
    pac.scale = 0.7;
    redghost = createSprite(400, 200)
    redghost.addAnimation("rg", rg)
    redghost.scale = 1.2
    pinkghost = createSprite(400, 170)
    pinkghost.addAnimation("pg", pg)
    pinkghost.scale = 1.2
    cyanghost = createSprite(380, 190)
    cyanghost.addAnimation("bg", bg)
    cyanghost.scale = 1.2
    frutas = createGroup()
    for(var i = 0;i < 30;i++){
      pacball = createSprite(random(50,750), random(50,300))
      pacball.scale = 0.05
      pacball.shapeColor = "yellow"
      coins.push(pacball)
    }
    life1 = createSprite(300, 390)
    life1.addImage(pclife)
    life1.scale = 0.5
    life2 = createSprite(280, 390)
    life2.addImage(pclife)
    life2.scale = 0.5
    life3 = createSprite(260, 390)
    life3.addImage(pclife)
    life3.scale = 0.5
    gameoverlose = createSprite(width/2 + 20, height/2 + 25)
    gameoverlose.addImage(gameover)
    gameoverlose.visible = false
    bt1 = createImg("reset_button-removebg-preview (1).png")
    bt1.position(700,-1)
    bt1.size(50,50)
    bt1.mouseClicked(reload)
    parede1 = createSprite(400, 50, 700, 3);
    parede1.shapeColor = "blue";
    parede2 = createSprite(400, 350, 700, 3);
    parede2.shapeColor = "blue";
    parede3 = createSprite(50, 300, 3, 100)
    parede3.shapeColor = "blue"
    parede4 = createSprite(50, 100, 3, 100)
    parede4.shapeColor = "blue"
    parede5 = createSprite(750, 100, 3, 100)
    parede5.shapeColor = "blue"
    parede6 = createSprite(750, 300, 3, 100)
    parede6.shapeColor = "blue"
    parede7 = createSprite(400, 150, 100, 3)
    parede7.shapeColor = "blue"
    parede8 = createSprite(400, 230, 100, 3)
    parede8.shapeColor = "blue"
    parede9 = createSprite(450, 190, 3, 80)
    parede9.shapeColor = "blue"
    parede10 = createSprite(350, 190, 3, 80)
    parede10.shapeColor = "blue"
    parede11 = createSprite(25, 250, 50, 3)
    parede11.shapeColor = "blue"
    parede12 = createSprite(25, 150, 50, 3)
    parede12.shapeColor = "blue"
    parede13 = createSprite(775, 250, 50, 3)
    parede13.shapeColor = "blue"
    parede14 = createSprite(775, 150, 50, 3)
    parede14.shapeColor = "blue"
    parede15 = createSprite(600, 120, 50, 3)
    parede15.shapeColor = "blue"
    parede16 = createSprite(200, 120, 50, 3)
    parede16.shapeColor = "blue"
    parede17 = createSprite(600, 260, 50, 3)
    parede17.shapeColor = "blue"
    parede18 = createSprite(200, 260, 50, 3)
    parede18.shapeColor = "blue"
    parede19 = createSprite(700, 200, 3, 50)
    parede19.shapeColor = "blue"
    parede20 = createSprite(90, 200, 3, 50)
    parede20.shapeColor = "blue"
    parede21 = createSprite(400, 100, 3, 50)
    parede21.shapeColor = "blue"
    parede22 = createSprite(400, 300, 3, 50)
    parede22.shapeColor = "blue"
    parede23 = createSprite(600, 190, 3, 50)
    parede23.shapeColor = "blue"
    parede24 = createSprite(200, 190, 3, 50)
    parede24.shapeColor = "blue"
    
    
}

function draw() {
    background("black");
    drawSprites();

    if(keyDown(RIGHT_ARROW)){
        pac.x = pac.x + pacvelo
        pac.mirrorX(+1)
    }

    if(keyDown(LEFT_ARROW)){
        pac.x = pac.x - pacvelo
        pac.mirrorX(-1)
    }

    if(keyDown(UP_ARROW)){
        pac.y = pac.y - pacvelo
    }

    if(keyDown(DOWN_ARROW)){
        pac.y = pac.y + pacvelo
    }

    pac.collide(parede1)
    pac.collide(parede2)
    pac.collide(parede3)
    pac.collide(parede4)
    pac.collide(parede5)
    pac.collide(parede6)
    pac.collide(parede7)
    pac.collide(parede8)
    pac.collide(parede9)
    pac.collide(parede10)
    pac.collide(parede11)
    pac.collide(parede12)
    pac.collide(parede13)
    pac.collide(parede14)
    pac.collide(parede15)
    pac.collide(parede16)
    pac.collide(parede17)
    pac.collide(parede18)
    pac.collide(parede19)
    pac.collide(parede20)
    pac.collide(parede21)
    pac.collide(parede22)
    pac.collide(parede23)
    pac.collide(parede24)

    if(pac.x < 0){
        pac.x = 800
    }
    
    if(pac.x > 800){
        pac.x = 10
    }
  updateposition()

  if(pac.isTouching(redghost)){
    redghost.x = 400
    redghost.y = 200
    life = life - 1
   if(life === 3){
    life1.destroy()
   }
   else if(life === 2){
    life2.destroy()
   }
   else if(life === 1){
    life3.destroy()
   }
  }
  if(pac.isTouching(pinkghost)){
    pinkghost.x = 400
    pinkghost.y = 170
    life = life - 1
   if(life === 3){
    life1.destroy()
   }
   else if(life === 2){
    life2.destroy()
   }
   else if(life === 1){
    life3.destroy()
   }
  }
  if(pac.isTouching(cyanghost)){
    cyanghost.x = 400
    cyanghost.y = 170
    life = life - 1
   if(life === 3){
    life1.destroy()
   }
   else if(life === 2){
    life2.destroy()
   }
   else if(life === 1){
    life3.destroy()
   }
  }
  fill("white")
  textSize(20)
  text("points: "+score, 60, 30)

  for(var i = coins.length - 1;i >= 0;i--){
    if(pac.overlap(coins[i])){
      coins[i].remove()
      coins.splice(i,1)
      score = score + 10
    }
  }
  if(life <= 0){
    gameoverlose.visible = true
    redghost.destroy()
    pinkghost.destroy()
    cyanghost.destroy()
    pac.destroy()
  }
  if(frameCount%480 === 0){
    var x = Math.round(random(100,600))
    var y = Math.round(random(100,300))
    var cherryfruit = createSprite(x,y)
    cherryfruit.addImage(fruit1)
    cherryfruit.scale = 0.2
    frutas.add(cherryfruit)
  }
  if(pac.overlap(frutas)){
    pacvelo = pacvelo + 1
    frutas.destroyEach()
  }
}
   
  function updateposition(){
    let direcaovermelho = p5.Vector.sub(pac.position, redghost.position)
    direcaovermelho.normalize()
    redghost.velocity.x = direcaovermelho.x * ghostvelo
    redghost.velocity.y = direcaovermelho.y * ghostvelo
    let direcaorosa = p5.Vector.sub(pac.position, pinkghost.position)
    direcaorosa.normalize()
    pinkghost.velocity.x = direcaorosa.x * ghostvelo1
    pinkghost.velocity.y = direcaorosa.y * ghostvelo1
    let direcaoazul = p5.Vector.sub(pac.position, cyanghost.position)
    direcaoazul.normalize()
    cyanghost.velocity.x = direcaoazul.x * ghostvelo2
    cyanghost.velocity.y = direcaoazul.y * ghostvelo2
  }

  function createcoins(){
    for(var i = 0; i < coins.length;i++){
      coins[i].position.x = random(width)
      coins[i].position.y = random(height)
    }
  }

  function reload(){
  window.location.reload()
}