new Vue({
    el: '#app',
    data: {
        saludJugador: 100,
        saludMonstruo: 100,
        hayUnaPartidaEnJuego: false,
        turnos: [], //es para registrar los eventos de la partida
        esJugador: false,
        rangoAtaque: [3, 10],
        rangoAtaqueEspecial: [10, 20],
        rangoAtaqueDelMonstruo: [5, 12],
    },

    methods: {
        getSalud(salud) {
            return `${salud}%`
        },
        empezarPartida: function () {
          this.hayUnaPartidaEnJuego = true;
          this.saludJugador = 100;
          this.saludMonstruo = 100;
          this.turnos = [];
        },
        terminarPartida: function () {
            this.hayUnaPartidaEnJuego = false;
        },

        atacar: function () {
            var daño = this.calcularHeridas(3, 10);
            this.saludMonstruo -= daño;
            
            this.registrarEvento(true, `El jugador golpea al monstruo ${daño}`);

            if(this.verificarGanador()){
                return;
            }
            this.ataqueDelMonstruo();
        },
        ataqueEspecial: function () {
            var daño = this.calcularHeridas(10, 20);
            this.saludMonstruo -= daño;
            
            this.registrarEvento(true, `El jugador hizo ataque especial al monstruo por ${daño}`);
            
            if(this.verificarGanador()){
                return;
            }
            this.ataqueDelMonstruo();
        },
        ataqueDelMonstruo: function () {
            var daño = this.calcularHeridas(5, 12);
            this.saludJugador -= daño;

            this.registrarEvento(false, `El monstruo lastima al jugador en ${daño}`);

            this.verificarGanador();
        },

        curar: function () {

            if(this.saludJugador <= 90){
                this.saludJugador += 10;
            } else {
                this.saludJugador = 100;
            }
            
            this.registrarEvento(true, `El jugador se curo`);
            
            this.ataqueDelMonstruo();
        },
        registrarEvento(boolean, texto) {
            this.turnos.unshift({
                esJugador: boolean,
                text: texto
            });
        },
       
        calcularHeridas: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        verificarGanador: function () {
            if(this.saludMonstruo <= 0){
                if(confirm('Ganaste! Jugar de nuevo?')){
                    this.empezarPartida();    
                } else {
                    this.hayUnaPartidaEnJuego = false;
                }
                return true; 
            }else if(this.saludJugador <= 0){
                if(confirm('Perdiste! Jugar de nuevo?')){
                    this.empezarPartida();    
                } else {
                    this.hayUnaPartidaEnJuego = false;
                }
                return true;   
            }
            return false;
        },
        cssEvento(turno) {
            //Este return de un objeto es prque vue asi lo requiere, pero ponerlo acá queda mucho mas entendible en el codigo HTML.
            return {
                'player-turno': turno.esJugador,
                'monster-turno': !turno.esJugador
            }
        }
    }
});