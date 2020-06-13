class SceneA extends Phaser.Scene {
    constructor() {
        super({ key: "SceneA" });
    }

    create() {
        //Cesped img de fondo
        this.add.image(310, 160, "CESPED");
        //Player
        this.add.sprite(60, 60, 'pelota');
        //Meta
        this.add.sprite(640, 135, 'finish');
        //Separadores Verticales
        this.add.sprite(150, 80, 'paredVertical');
        this.add.sprite(305, 270, 'paredVertical');
        this.add.sprite(150, 380, 'paredVertical');
        this.add.sprite(290, 0, 'paredVertical');
        this.add.sprite(450, 80, 'paredVertical');
        this.add.sprite(600, 270, 'paredVertical');
        this.add.sprite(442, 360, 'paredVertical');
//Separadores Horizontales
        this.add.sprite(375, 292, 'paredHorizontal');
        this.add.sprite(560, 70, 'paredHorizontal');
        this.add.sprite(550, 360, 'paredHorizontal');
        this.add.sprite(43, 313, 'paredHorizontal');
        this.add.sprite(220, 70, 'paredHorizontal');
        this.add.sprite(220, 360, 'paredHorizontal');

    }
}
export default SceneA;