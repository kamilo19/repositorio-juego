class SceneA extends Phaser.Scene {
    constructor(){
        super({key: "SceneA"});
    }
    preload(){

    }
    create(){
        alert("Hola Esto funciona");
        let graphics = this.add.graphics();
        this.add.text(120,110, "Hola Klk",{front: "96px Coursier", fill: '#FFFFFF'});
        this.scene.add(init, new init);
    }
    update(time, delta){
    }
}