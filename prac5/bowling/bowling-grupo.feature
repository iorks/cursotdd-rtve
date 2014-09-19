Feature: Jugar una partida de bolos
  Como grupo de amigos
  I quiero jugar una partida de hasta 6 jugadores

  Scenario: Jugar una partida de hasta 6 jugadores
    Given una partida de bolos
    When añado hasta 6 jugadores a la partida
    Then tengo una partida de los jugadores hasta 6 jugadores
