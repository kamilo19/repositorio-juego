const config = {
    width: 320*2,
    height: 180*2,
    // en el width y height es para poder crear el lienzo donde se hara nuestro juego
    parente: "container",
    type: Phaser.AUTO,
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
    this.load.image("persona2", "./assets/persona2.png");
}
//En la funcion Preload es para agregar una imagen la cual se pueda interactuar
//la "persona2" es la figura la cual se cargara en el lienzo 
function create () {
   this.persona2 = this.physics.add.image(60,50, "persona2");
   this.persona2.setCollideWorldBounds(true);
   this.input.keyboard.on("keydown_RIGHT", () => {
       //aqui elegimos una tecla paraque nuestra imagen se mueva de 1 en 1 en el lienzo
       this.persona2.setAngle(90);
       //tambien se configura el angulo de la imagen para saber cual es el frente de la imagen
       this.persona2.x++;
   });
   //aplica los mismo para las siguientes lineas de codigo
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
function update (time, delta){
}