const config = {
    width: 320*2,
    height: 180*2,
    // en el width y height es para poder crear el lienzo donde se hara nuestro juego
    parente: "container",
    type: Phaser.CANVAS,
    backgroundColor: '#298111',
    // el backgroundColor es para generar un color a nuestro lienzo
    scene:{ 
        preload: preload,
        create: create,
        update: update,
    },
    physics: {
        default :"arcade",
        arcade: {
            gravity: {
                
            }
        }
    }
}
// gracias a scene se pinta el lienzo en el html 
var game = new Phaser.Game(config);

// aqui hacemo un llamado a lo que queremos que aparezca en nuestro lienzo
function preload () {

    this.load.image("CESPED", "./assets/CESPED.JPG");
    this.load.image("persona2", "./assets/persona2.png");
    this.load.image("pared1", "./assets/pared1.jpg");
    this.load.image("arriba", "./assets/arriba.jpg");
    this.load.image("arriba1", "./assets/arriba1.jpg");
    this.load.image("arriba2", "./assets/arriba2.jpg");
    this.load.image("arriba3", "./assets/arriba3.jpg");
    this.load.image("arriba4", "./assets/arriba4.jpg");
    this.load.image("arriba5", "./assets/arriba5.jpg");
    this.load.image("lado", "./assets/lado.jpg");
    this.load.image("lado1", "./assets/lado1.jpg");
    this.load.image("lado2", "./assets/lado2.jpg");
    this.load.image("lado3", "./assets/lado3.jpg");
    this.load.image("lado4", "./assets/lado4.jpg");
    this.load.image("lado5", "./assets/lado5.jpg");
}
//En la funcion Preload es para agregar una imagen la cual se pueda interactuar
//la "persona2" es la figura la cual se cargara en el lienzo 
function create () {
    
    this.add.tileSprite(0, 0, 1280, 720, 'CESPED');

    pared1 = this.add.sprite(150, 80, 'pared1');
    arriba = this.add.sprite(305, 270, 'arriba');
    arriba1 = this.add.sprite(150, 380, 'arriba1');
    arriba2 = this.add.sprite(290, 0, 'arriba2');
    arriba3 = this.add.sprite(450, 80, 'arriba3');
    arriba4 = this.add.sprite(600, 270, 'arriba4');
    arriba5 = this.add.sprite(442, 360, 'arriba5');

    lado = this.add.sprite(375, 292, 'lado');
    lado1 = this.add.sprite(560, 70, 'lado1');
    lado2 = this.add.sprite(550, 360, 'lado2');
    lado3 = this.add.sprite(43, 313, 'lado3');
    lado4 = this.add.sprite(220, 70, 'lado4');
    lado5 = this.add.sprite(220, 360, 'lado5');

    this.persona2 = this.physics.add.image(60,50, "persona2");
   this.persona2.setCollideWorldBounds(true);

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
//En la funcion create es para que podamos elegir el lugar en donde puedo ubicar la imagen
//y tambien agregar los comandos para que podamos intaractuar con la imagen
function update (){
    
}