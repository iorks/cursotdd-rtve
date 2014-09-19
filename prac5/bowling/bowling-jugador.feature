Feature: Hacer plenos
  Como jugador
  I quiero poder hacer un plenos y semiplenos

  Scenario: Hacer un pleno 
    Given una partida de bolos
    When  es mi turno
      And tiro todos los bolos en la tirada actual
    Then he hecho un pleno

  Scenario: Hacer dos plenos seguidos 
    Given he hecho un pleno en el turno anterior
    When  es mi turno
      And tiro todos los bolos en la tirada actual
    Then he hecho dos plenos seguidos

  Scenario: Hacer tres plenos seguidos 
    Given he hecho dos plenos en los dos turnos anteriores
    When  es mi turno
      And tiro todos los bolos en la tirada actual
    Then he hecho tres plenos seguidos
