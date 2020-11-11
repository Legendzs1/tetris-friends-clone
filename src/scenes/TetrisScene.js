import Phaser from 'phaser';
import tetrisPiece from '../assets/tetris.png'
///////////////////////////////////////
//Where we create the scenes for Phaser to be exported into the scene
//In the main file for the particular game I.E tetris.js
//////////////////////////////////////

class TetrisScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'TetrisScene',
            active: true,
        });
    } 

    
    preload() {

        this.cameras.main.setBackgroundColor('#24252A')
        this.load.image('tetris', tetrisPiece)

    }
    create() {
        let self = this;
        this.tetr = this.add.image(500,450, "tetris");
    }
    update() {
        //this.player.angle += 1;
    }
}


export default TetrisScene
