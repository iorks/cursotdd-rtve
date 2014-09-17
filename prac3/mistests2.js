test("Logger - se ha escrito en log", function () {
  var logger = new Logger();
  var mock = this.mock(console);
  
  mock.expects("log").once();

  logger.escribirLog("Pepe");
  mock.verify();
});


// este test esta pendiente de verificar/completar
test("Calculadora - se ha escrito en log el resultado de la suma", function () {
  var logger = new Logger();
  var mock = this.mock(logger);
  
  mock.expects("escribirLog").once();	
  //faltaria comprobar que en el log se escriba el resultado de la suma: "3"

  Calculadora.add("1,2");
  mock.verify();
});