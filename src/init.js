const config = {
    width: 320 * 2,
    height: 180 * 2,
    // en el width y height es para poder crear el lienzo donde se hara nuestro juego
    parente: "container",
    type: Phaser.CANVAS,
    backgroundColor: '#298111',
    // el backgroundColor es para generar un color a nuestro lienzo
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}
// gracias a scene se pinta el lienzo en el html 
var game = new Phaser.Game(config);

// aqui hacemo un llamado a lo que queremos que aparezca en nuestro lienzo
function preload() {

    this.load.image("CESPED", "./assets/CESPED.JPG");
    this.load.spritesheet("pelota", "./assets/pelota.png",
        { frameWidth: 74, frameHeight: 75 });
    this.load.image("paredHorizontal", "./assets/paredHorizontal.JPG");
    this.load.image("paredVertical", "./assets/paredVertical.JPG");


}
//En la funcion Preload es para agregar una imagen la cual se pueda interactuar
//la "persona2" es la figura la cual se cargara en el lienzo 

var platforms;

function create() {

    this.add.tileSprite(0, 0, 1280, 720, 'CESPED');

    platforms = this.physics.add.staticGroup();

    platforms.create(150, 80, 'paredVertical').refreshBody();
    platforms.create(305, 270, 'paredVertical');
    platforms.create(150, 380, 'paredVertical');
    platforms.create(290, 0, 'paredVertical');
    platforms.create(450, 80, 'paredVertical');
    platforms.create(600, 270, 'paredVertical');
    platforms.create(442, 360, 'paredVertical');

    platforms.create(375, 292, 'paredHorizontal');
    platforms.create(560, 70, 'paredHorizontal');
    platforms.create(550, 360, 'paredHorizontal');
    platforms.create(43, 313, 'paredHorizontal');
    platforms.create(220, 70, 'paredHorizontal');
    platforms.create(220, 360, 'paredHorizontal');

    /* Creacion de Jugador
    *añadiendo un toque de físicas 
    */
    player = this.physics.add.sprite(60, 60, 'pelota');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    //Añadiendo físicas al mapa
    this.physics.add.collider(player, platforms);

    //Para integrar los controles con el teclado
    cursors = this.input.keyboard.createCursorKeys();



}
//En la funcion create es para que podamos elegir el lugar en donde puedo ubicar la imagen
//y tambien agregar los comandos para que podamos intaractuar con la imagen
function update() {

    if (cursors.left.isDown) {
        player.setVelocityX(-50);

        player.setAngle(-90);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(50);

        player.setAngle(90);
    }
    else if (cursors.up.isDown) {
        player.setVelocityY(-50);

        player.setAngle(0);
    }
    else if (cursors.down.isDown) {
        player.setVelocityY(55);

        player.setAngle(180);
    }


}