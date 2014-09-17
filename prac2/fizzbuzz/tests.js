QUnit.test( "es divisible por 3", function( assert ) {
  var numero = new Numero();
  assert.ok(numero.esDivisiblePor3(6), "es divisible por 3");
  assert.ok(!numero.esDivisiblePor3(5), "no es divisible por 3");
});

