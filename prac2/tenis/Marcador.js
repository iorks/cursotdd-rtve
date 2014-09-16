function Marcador() {
	//this.puntuaciones = ['0', '15', '30', '40'];
	//this.jugador1 = new Jugador(this);
	//this.jugador2 = new Jugador(this);
}

Marcador.prototype.deuce = function(jugador1, jugador2) {
	if (jugador1.score == jugador2.score)
		return true;
	else
		return false;
}

Marcador.prototype.gana = function(jugador1, jugador2) {
	console.log('j1: ' + jugador1.score + ', j2: ' + jugador2.score);
	if ( (jugador1.score > 3) && (jugador1.score-jugador2.score > 1) )
		return 1;

	if ( (jugador2.score > 3) && (jugador2.score-jugador1.score > 1) )
		return 2;

	return -1;
}

Marcador.prototype.ventaja = function(jugador1, jugador2) {
	if ( (jugador1.score > 3) && (jugador1.score > jugador2.score) )
		return 1;
	if ( (jugador2.score > 3) && (jugador2.score > jugador1.score) )
		return 2;
	return -1;
}