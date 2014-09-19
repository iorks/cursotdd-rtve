/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package juegovida;

/**
 *
 * @author I10435
 */
public class Juegovida {

    private Celula[][] matriz;
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        System.out.println("hola mundo!");
        return;
    }
    
    public void initMatriz(int dimX, int dimY){
        this.matriz = new Celula[dimX][dimY];
        for (int i=0; i<dimX; i++)
            for (int j=0; j<dimY; j++)
                this.matriz[i][j] = new Celula(i,j);
    }
    
    public Celula getCelula(int posX, int posY){
        return this.matriz[posX][posY];
    }
    
    public boolean esVecino(Celula central, Celula posibleVecino){
        // vecino por la izquierda
        if (posibleVecino.getPosX()+1 == central.getPosX()){
            if ( (posibleVecino.getPosY() <= central.getPosY() +1) &&
                 (posibleVecino.getPosY() >= central.getPosY() -1) ){
                return true;
            }
        }
        // vecino por la derecha
        if (posibleVecino.getPosX()-1 == central.getPosX()){
            if ( (posibleVecino.getPosY() <= central.getPosY() +1) &&
                 (posibleVecino.getPosY() >= central.getPosY() -1) ){
                return true;
            }
        }
        // vecino por arriba
        if (posibleVecino.getPosY()+1 == central.getPosY()){
            if ( (posibleVecino.getPosX() <= central.getPosX() +1) &&
                 (posibleVecino.getPosX() >= central.getPosX() -1) ){
                return true;
            }
        }
        // vecino por abajo
        if (posibleVecino.getPosY()-1 == central.getPosY()){
            if ( (posibleVecino.getPosX() <= central.getPosX() +1) &&
                 (posibleVecino.getPosX() >= central.getPosX() -1) ){
                return true;
            }
        }
        return false;
    }

}
