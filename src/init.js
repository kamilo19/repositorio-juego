const config = {
    width: 320*2,
    height: 180*2,
    parente: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
}

var game = new Phaser.Game(config);

function preload () {
    this.load.image("persona2", "./assets/persona2.jpg");
}
function create () {
   this.persona2 = this.add.image(100,50, "persona2");
   this.input.keyboard.on("keydown_RIGHT", () => {
       this.persona2.setAngle(90);
       this.persona2.x++;
   });
   this.input.keyboard.on("keydown_LEFT", () => {
       this.persona2.setAngle(-90);
       this.persona2.x--;
   });
   this.input.keyboard.on("keydown_UP", () => {
       this.persona2.setAngle(0);
       this.persona2.y--;
   });
   this.input.keyboard.on("keydown_DOWN", () => {
       this.persona2.setAngle(180);
       this.persona2.y++;
   });
}
function update (time, delta){
    
}