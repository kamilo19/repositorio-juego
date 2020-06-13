class Bootloader extends Phaser.Scene {
    constructor() {
        super({ key: "Bootloader" })
    }
    preload() {
        //Inicio de la Escena
        this.load.on("complete", ()=>{
            this.scene.start("SceneA");
        });

        //Carga de las imagenes
        this.load.image("CESPED", "./assets/CESPED.JPG");
        this.load.spritesheet("pelota", "./assets/pelota.png",
            { frameWidth: 74, frameHeight: 75 });
        this.load.image("paredHorizontal", "./assets/paredHorizontal.JPG");
        this.load.image("paredVertical", "./assets/paredVertical.JPG");
        this.load.image("finish", "./assets/finish.png");
    }


}
export default Bootloader;