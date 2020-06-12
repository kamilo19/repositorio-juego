var juego = new Phaser.Game(370, 550, Phaser.CANVAS, 'bloque_juego');

juego.state.add('menu', menu);
//juego.state.add('juego', juego);
//juego.state.add('Game_over', Game_over);

juego.state.start('menu');