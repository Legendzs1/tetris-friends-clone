import Phaser from "phaser";
import TetrisScene from './scenes/TetrisScene.js'

const Tetris = {
  parent: "Game",
  width: "75%",
  height: "75%",
  type: Phaser.AUTO,
  mode: Phaser.Scale.FIT,
  physics: {
      default: 'arcade',
      arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  autoCenter: true,
  scene: [TetrisScene ]//,SecondScene]
  //Can add new settings like in the config
}

const game = new Phaser.Game(Tetris);
export default game;