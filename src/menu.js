var menu = {
    preload: function (){
        juego.stage.backGroundColor = '#FFF';
        juego.load.image("boton", "./assets/boton.jpg");
    },
    create: function (){
        var boton = this.add.button(juego.widht/2, juego.height/2, 'boton', this.iniciarJuego, this);
        boton.anchor.setTo(0.5);

    },
}