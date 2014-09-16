QUnit.test( "puntua 15", function( assert ) {
  var jugador = new Jugador();
  jugador.puntua();
  assert.ok(jugador.score == 1, "jugador puntua 15");
});

QUnit.test( "puntua 30", function( assert ) {
  var jugador = new Jugador();
  jugador.puntua();
  jugador.puntua();
  assert.ok(jugador.score == 2, "jugador puntua 30");
});

QUnit.test( "puntua 40", function( assert ) {
  var jugador = new Jugador();
  jugador.puntua();
  jugador.puntua();
  jugador.puntua();
  assert.ok(jugador.score == 3, "jugador puntua 40");
});

QUnit.test( "gana", function( assert ) {
  var jugador1 = new Jugador();
  var jugador2 = new Jugador();
  var marcador = new Marcador();
  jugador2.puntua();//0-15
  assert.ok(marcador.gana(jugador1,jugador2) == -1, "no gana nadie");
  jugador2.puntua();//0-30
  assert.ok(marcador.gana(jugador1,jugador2) == -1, "no gana nadie");
  jugador2.puntua();//0-40
  assert.ok(marcador.gana(jugador1,jugador2) == -1, "no gana nadie");
  jugador1.puntua();//15-40
  assert.ok(marcador.gana(jugador1,jugador2) == -1, "no gana nadie");
  jugador1.puntua();//30-40
  assert.ok(marcador.gana(jugador1,jugador2) == -1, "no gana nadie");
  jugador1.puntua();//deuce
  assert.ok(marcador.gana(jugador1,jugador2) == -1, "no gana nadie");
  jugador2.puntua();//adv 2
  assert.ok(marcador.gana(jugador1,jugador2) == -1, "no gana nadie");
  jugador1.puntua();//deuce
  assert.ok(marcador.gana(jugador1,jugador2) == -1, "no gana nadie");
  jugador2.puntua();//adv 2
  assert.ok(marcador.gana(jugador1,jugador2) == -1, "no gana nadie");
  jugador2.puntua();//gana 2
  assert.ok(marcador.gana(jugador1,jugador2) == 2, "jugador2 gana");
});


QUnit.test( "deuce", function( assert ) {
  var jugador1 = new Jugador();
  var jugador2 = new Jugador();
  var marcador = new Marcador();
  jugador1.puntua();
  assert.ok(!marcador.deuce(jugador1,jugador2), "15-0");
  jugador1.puntua();
  assert.ok(!marcador.deuce(jugador1,jugador2), "30-0");
  jugador1.puntua();
  assert.ok(!marcador.deuce(jugador1,jugador2), "40-0");
  jugador2.puntua();
  assert.ok(!marcador.deuce(jugador1,jugador2), "15-40");
  jugador2.puntua();
  assert.ok(!marcador.deuce(jugador1,jugador2), "30-40");
  jugador2.puntua();
  assert.ok(marcador.deuce(jugador1,jugador2), "deuce");
});

QUnit.test( "ventaja", function( assert ) {
  var jugador1 = new Jugador();
  var jugador2 = new Jugador();
  var marcador = new Marcador();
  jugador1.puntua();
  assert.ok(marcador.ventaja(jugador1,jugador2) == -1, "15-0");
  jugador1.puntua();
  assert.ok(marcador.ventaja(jugador1,jugador2) == -1, "30-0");
  jugador1.puntua();
  assert.ok(marcador.ventaja(jugador1,jugador2) == -1, "40-0");
  jugador2.puntua();
  assert.ok(marcador.ventaja(jugador1,jugador2) == -1, "40-15");
  jugador2.puntua();
  assert.ok(marcador.ventaja(jugador1,jugador2) == -1, "40-30");
  jugador2.puntua();
  assert.ok(marcador.ventaja(jugador1,jugador2) == -1, "deuce");
  jugador1.puntua();
  assert.ok(marcador.ventaja(jugador1,jugador2) == 1, "jugador1 ventaja");
  jugador2.puntua();
  assert.ok(marcador.ventaja(jugador1,jugador2) == -1, "deuce");
  jugador2.puntua();
  assert.ok(marcador.ventaja(jugador1,jugador2) == 2, "jugador2 ventaja");
});