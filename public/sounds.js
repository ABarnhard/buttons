var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){
  game.load.audio('wizball', ['assets/audio/oedipus_wizball_highscore.mp3', 'assets/audio/oedipus_wizball_highscore.ogg']);
  game.load.audio('run', 'assets/audio/run.mp3');
  game.load.image('background','assets/starfield.png');
  game.load.image('evil','/assets/wabbit.png');
  game.load.spritesheet('ship', '/assets/catship.png', 55, 42);
}

var background,
    music,
    ship,
    frameSpeed = 50,
    cursors,
    currentFrame = 0,
    shipvelocity = 10,
    shipMaxVelocity = 10;

function create(){
  background = game.add.tileSprite(0, 0, 800, 600, 'background');

  music = game.add.audio('run');
  music.play();

  ship = this.game.add.sprite((game.world.width * 0.5), (game.world.height * 0.66), 'ship');
  ship.anchor.set(0.5);
  ship.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], frameSpeed, false);
  ship.animations.add('leftReturn', [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], frameSpeed, false);
  ship.animations.add('boost', [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], frameSpeed, false);
  ship.animations.add('right', [20, 21, 22, 23, 24, 25, 26, 27, 28, 29], frameSpeed, false);
  ship.animations.add('rightReturn', [29, 28, 27, 26, 25, 24, 23, 22, 21, 20], frameSpeed, false);
  ship.animations.add('fly', [0, 1, 0], frameSpeed, false);

  cursors = game.input.keyboard.createCursorKeys();
}

function update(){
  // background.tilePosition.x += 1.5;
  /*
  ship.body.velocity.x = 0;
  ship.body.velocity.y = 0;
  */
  if(ship.animations.currentFrame){
    currentFrame = ship.animations.currentFrame.index;
  }

  if((cursors.left.isDown) && (cursors.up.isUp) && (cursors.down.isUp)){
    background.tilePosition.x += shipvelocity;

    if(currentFrame == 0 || currentFrame == 20 || currentFrame == 10){
      ship.animations.play('left', frameSpeed, false);
    }
    if(currentFrame == 29){
      ship.animations.play('rightReturn', frameSpeed, false);
      if(ship.animations.currentFrame){
        currentFrame = ship.animations.currentFrame.index;
      }
    }
  }else if((cursors.left.isDown) && (cursors.up.isDown)){
    background.tilePosition.x += shipvelocity;
    background.tilePosition.y += shipvelocity / 2;

    if(currentFrame == 0 || currentFrame == 20 || currentFrame == 10){
      ship.animations.play('left', frameSpeed, false);
    }
    if(currentFrame == 29){
      ship.animations.play('rightReturn', frameSpeed, false);
      if(ship.animations.currentFrame){
        currentFrame = ship.animations.currentFrame.index;
      }
    }
  }else if((cursors.left.isDown) && (cursors.down.isDown)){
    background.tilePosition.x += shipvelocity;
    background.tilePosition.y += -shipvelocity / 2;

    if(currentFrame == 0 || currentFrame == 20 || currentFrame == 10){
      ship.animations.play('left', frameSpeed, false);
    }
    if(currentFrame == 29){
      ship.animations.play('rightReturn', frameSpeed, false);
      if(ship.animations.currentFrame){
        currentFrame = ship.animations.currentFrame.index;
      }
    }
  }else if((cursors.right.isDown) && (cursors.up.isUp) && (cursors.down.isUp)){
    background.tilePosition.x += -shipvelocity;

    if(currentFrame == 0 || currentFrame == 20 || currentFrame == 10){
      ship.animations.play('right', frameSpeed, false);
      if(ship.animations.currentFrame){
        currentFrame = ship.animations.currentFrame.index;
      }
    }
    if(currentFrame == 9){
      ship.animations.play('leftReturn', frameSpeed, false);
      if(ship.animations.currentFrame){
        currentFrame = ship.animations.currentFrame.index;
      }
    }
  }else if((cursors.right.isDown) && (cursors.up.isDown)){
    background.tilePosition.x += -shipvelocity;
    background.tilePosition.y += shipvelocity / 2;

    if(currentFrame == 0 || currentFrame == 20 || currentFrame == 10){
      ship.animations.play('right', frameSpeed, false);
      if(ship.animations.currentFrame){
        currentFrame = ship.animations.currentFrame.index;
      }
    }
    if(currentFrame == 9){
      ship.animations.play('leftReturn', frameSpeed, false);
      if(ship.animations.currentFrame){
        currentFrame = ship.animations.currentFrame.index;
      }
    }
  }else if((cursors.right.isDown) && (cursors.down.isDown)){
    background.tilePosition.x += -shipvelocity;
    background.tilePosition.y += -shipvelocity / 2;

    if(currentFrame == 0 || currentFrame == 20 || currentFrame == 10){
      ship.animations.play('right', frameSpeed, false);
      if(ship.animations.currentFrame){
        currentFrame = ship.animations.currentFrame.index;
      }
    }
    if(currentFrame == 9){
      ship.animations.play('leftReturn', frameSpeed, false);
      if(ship.animations.currentFrame){
        currentFrame = ship.animations.currentFrame.index;
      }
    }
  }else if((cursors.up.isDown) && (cursors.left.isUp) && (cursors.right.isUp)){
    background.tilePosition.y += shipvelocity / 2;
    if(currentFrame == 0 || currentFrame == 20 || currentFrame == 10){
      ship.animations.play('boost', frameSpeed, false);
      if(ship.animations.currentFrame){
        currentFrame = ship.animations.currentFrame.index;
      }
    }
  }else if(cursors.down.isDown){
    background.tilePosition.y += -shipvelocity / 2;

    if(currentFrame == 0 || currentFrame == 10 || currentFrame == 20 || currentFrame == 19){
      ship.animations.play('fly');
    }
    if(ship.animations.currentFrame){
      currentFrame = ship.animations.currentFrame.index;
    }
  }else if(currentFrame == 29){
    ship.animations.play('rightReturn', frameSpeed, false);
    if(ship.animations.currentFrame){
      currentFrame = ship.animations.currentFrame.index;
    }
  }else if(currentFrame == 19){
    ship.animations.play('fly', frameSpeed, false);
    if(ship.animations.currentFrame){
      currentFrame = ship.animations.currentFrame.index;
    }
  }else if(currentFrame == 9){
    ship.animations.play('leftReturn', frameSpeed, false);
    if(ship.animations.currentFrame){
      currentFrame = ship.animations.currentFrame.index;
    }
  }
}
