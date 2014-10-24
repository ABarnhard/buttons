
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload(){
  game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
  game.load.image('background','assets/starfield.png');
}

var button,
    button1,
    button2,
    button3,
    button4,
    background,
    inc,
    scale = 2;;

function create(){
  game.stage.backgroundColor = '#182d3b';
  background = game.add.tileSprite(0, 0, 800, 600, 'background');

  button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);

  button.onInputOver.add(over, this);
  button.onInputOut.add(out, this);

  button1 = game.add.button(game.world.centerX - 95, 200, 'button', actionOnClick, this, 2, 1, 0);
  button1.anchor.setTo(0.5, 0.5);
  button1.angle = 24;

  button2 = game.add.button(game.world.centerX - 100, 275, 'button', actionOnClick, this, 2, 1, 0);
  button2.anchor.setTo(0.5, 0.5);

  button3 = game.add.button(game.world.centerX - 100, 275, 'button', actionOnClick, this, 2, 1, 0);
  button3.anchor.setTo(1, 1);

  button4 = game.add.button(game.world.centerX - 100, 275, 'button', actionOnClick, this, 2, 1, 0);
  button4.anchor.setTo(0, 0);
}

function update(){
  /*
  button2.angle += 1;
  button2.scale.setTo(scale, scale);

  button3.angle += 10;
  button3.scale.setTo(scale + 1, scale + 1);

  button4.angle += 20;
  button4.scale.setTo(scale - 1, scale - 1);

  if(scale <= 2){
    inc = 0.25;
  }else if(scale > 10){
    inc = -0.25;
  }
  scale += inc;
  // console.log(scale);
  */
}

function over(){
  console.log('button over');
}

function out(){
  console.log('button out');
}

function actionOnClick (){
  background.visible =! background.visible;
}
