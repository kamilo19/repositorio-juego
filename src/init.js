import SceneA from './SceneA.js';
const config = {
    width: 620,
    height: 360,
    //en el width y height es para poder crear el lienzo donde se hara nuestro juego
    parent: "container",
    type: Phaser.AUTO,
    physics: {
        default: "arcade",
        arcade: {
        }
    },
    // el backgroundColor es para generar un color a nuestro lienzo
    scene: [SceneA]
}
// gracias a scene se pinta el lienzo en el html 
var player;
var cursors;
var game = new Phaser.Game(config);