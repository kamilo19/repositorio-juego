class SceneA extends Phaser.Scene {
    constructor(){
        super({key: "SceneA" });
    }
    preload(){

    }
    create(){
        let graphics = this.add.graphics();
        this.add.text(120,110, "holi",{front: "96px Coursier", fill: '000000'});
    }
    update(time, delta){

    }
}