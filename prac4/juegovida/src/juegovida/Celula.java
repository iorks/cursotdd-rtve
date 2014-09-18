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
public class Celula {
    private int posX;
    private int posY;
    private boolean viva;

    public Celula(int posX, int posY) {
        this.posX = posX;
        this.posY = posY;
        this.viva = false;
    }
    
    public void resucitar(){
        this.setViva(true);
    }
    
    public int getPosX() {
        return posX;
    }

    public int getPosY() {
        return posY;
    }

    public void setPosX(int posX) {
        this.posX = posX;
    }

    public void setPosY(int posY) {
        this.posY = posY;
    }

    public boolean isViva() {
        return viva;
    }

    public void setViva(boolean viva) {
        this.viva = viva;
    }
    
}
