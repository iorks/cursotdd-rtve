/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import juegovida.Celula;
import juegovida.Juegovida;
import org.junit.After;
import org.junit.AfterClass;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 *
 * @author I10435
 */
public class JuegoVidaTests {
    
    public JuegoVidaTests() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    // @Test
    // public void hello() {}

    @Test
    public void testEsVecino(){
        Juegovida juego = new Juegovida();
        juego.initMatriz(10, 10);
        
        Celula c1 = juego.getCelula(3, 3);
        Celula c2 = juego.getCelula(1, 3);
        
        assertTrue(juego.esVecino(c1,c2));
    }
}
