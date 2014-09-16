QUnit.test( "prueba cadena vacia", function( assert ) {
  assert.equal(Calculadora.add(""), 0 );
});

QUnit.test( "prueba un argumento", function( assert ) {
  assert.equal(Calculadora.add("1"), 1);
 // assert.equal(Calculadora.add("-1"), -1);
});

QUnit.test( "prueba dos argumentos", function( assert ) {
  assert.equal(Calculadora.add("1,2"), 3);
  //assert.equal(Calculadora.add("1,-2"), -1);
});

QUnit.test( "prueba más de 2 argumentos", function( assert ) {
  assert.equal(Calculadora.add("1,2,3,4"), 10);
});

QUnit.test( "admitir salto de línea como delimitador", function( assert ) {
  assert.equal(Calculadora.add("1\n2,3,4"), 10);
});

QUnit.test( "admitir cualquier caracter como delimitador", function( assert ) {
  assert.equal(Calculadora.add("//;\n1\n2,3;4"), 10);
});

QUnit.test( "Lanzar excepción si número negativo", function( assert ) {
	try{
  	Calculadora.add("//;\n-11\n2,-13;4");
  } catch(exception){
    assert.equal(exception, "No negativos -11 -13");
    Calculadora.hasError = false;
    Calculadora.errMsg = "No negativos";
  }
});