class SceneA extends Phaser.Scene {
    constructor() {
        super({ key: "SceneA" });
    }

    preload() {
        //Carga de las imagenes
        this.load.image("CESPED", "./assets/CESPED.JPG");
        this.load.spritesheet("pelota", "./assets/pelota.png",
            { frameWidth: 74, frameHeight: 75 });
        this.load.image("paredHorizontal", "./assets/paredHorizontal.JPG");
        this.load.image("paredVertical", "./assets/paredVertical.JPG");
        this.load.image("finish", "./assets/finish.png");
    }

    create() {
        //Cesped img de fondo
        this.add.image(310, 160, "CESPED");
        //Meta
        this.add.sprite(640, 135, 'finish');
       
        var paredes = this.paredes = this.physics.add.staticGroup();
        //Separadores Verticales
        paredes.create(150, 80, 'paredVertical');
        paredes.create(305, 270, 'paredVertical');
        paredes.create(150, 380, 'paredVertical');
        paredes.create(290, 0, 'paredVertical');
        paredes.create(450, 80, 'paredVertical');
        paredes.create(600, 270, 'paredVertical');
        paredes.create(442, 360, 'paredVertical');
        //Separadores Horizontales
        paredes.create(375, 292, 'paredHorizontal');
        paredes.create(560, 70, 'paredHorizontal');
        paredes.create(550, 360, 'paredHorizontal');
        paredes.create(43, 313, 'paredHorizontal');
        paredes.create(220, 70, 'paredHorizontal');
        paredes.create(220, 360, 'paredHorizontal');

        //Jugador
        cursors = this.input.keyboard.createCursorKeys();
        player = this.physics.add.image(400, 300, 'block');
        player.setCollideWorldBounds(true);

        //Activar las fisicas para los objetos
        this.physics.add.collider(pelota, paredes);

        //Para integrar los controles con el teclado
        cursors = game.input.keyboard.createCursorKeys();
    }
    //En la funcion create es para que podamos elegir el lugar en donde puedo ubicar la imagen
    //y tambien agregar los comandos para que podamos intaractuar con la imagen

    update(time, delta) {

        if (cursors.left.isDown) {
            pelota.setVelocityX(-50);

            pelota.setAngle(-90);
        }
        else if (cursors.right.isDown) {
            pelota.setVelocityX(50);

            pelota.setAngle(90);
        }
        else if (cursors.up.isDown) {
            pelota.setVelocityY(-50);

            pelota.setAngle(0);
        }
        else if (cursors.down.isDown) {
            pelota.setVelocityY(55);

            pelota.setAngle(180);
        }





    }
}
export default SceneA;