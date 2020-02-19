import React, { Component } from "react";
import Player from "./Player";
import Monster from "./Monster";

export default class Parent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: 100,
      monster:  100
    };

    this.referencePlayer = this.referencePlayer.bind(this);
    this.referenceMonster = this.referenceMonster.bind(this);
    this.referenceChildren = this.referenceChildren.bind(this);
  }

  referencePlayer(value) {
    this.setState({
      player: value
    });
  }

  referenceMonster(value) {
    this.setState({
      monster: value
    });
  }

  referenceChildren() {
    const diceResult = dides(6);

    this.setState({
      player: diceResult[0],
      monster: diceResult[1]
    });
  }

  render() {
    return (
      <div>
        <div className="parent" onClick={this.referenceChildren}>
          <h2>The Battle test</h2>
          <h3>:: [ click to roll dice ] ::</h3>
          <Player value={this.state.player} referenParentState={this.referencePlayer} />
          <Monster value={this.state.monster} referenParentState={this.referenceMonster} />
          <ul>
            <h4>Player dice</h4>
            <li><input type="text" id="dado1" /><input type="text" id="dado2" /></li>
            <span id="dice1"></span><span id="dice2"></span>
            <h4>Monster dice</h4>
            <li><input type="text" id="dado3" /><input type="text" id="dado4" /></li>
            <span id="dice3"></span><span id="dice4"></span>
          </ul>
        </div>

      </div>
    );
  }
}

let totalLifePointsPlayer = 100;
let totalLifePointMonster = 100;

export function dides(num) {
  let game = [];
  let totalPlayerAttack = 0;
  let totalMonsterAttack = 0;
  let toReduceHealth;
  let rollWinner;
  let rollLoser;

  for(var i = 1; i < 5; i++){
    let diceRoll = Math.ceil(Math.random()*6);
    document.getElementById("dado"+i).value = diceRoll;
    rollTheDice(diceRoll, i);

    if ( i <= 2){
      totalPlayerAttack = totalPlayerAttack + diceRoll;
    } else {
      totalMonsterAttack = totalMonsterAttack + diceRoll;
    }
  }

  // determinate who is the winner of the battle
  if (totalPlayerAttack >= totalMonsterAttack) {
    toReduceHealth = totalPlayerAttack - totalMonsterAttack;
    totalLifePointMonster = totalLifePointMonster - toReduceHealth;
    rollWinner = 'Player';
    rollLoser = 'Monster';
  } else {
    toReduceHealth = totalMonsterAttack - totalPlayerAttack;
    totalLifePointsPlayer = totalLifePointsPlayer - toReduceHealth;
    rollWinner = 'Monster';
    rollLoser = 'Player';
  }

  if (totalLifePointsPlayer <= 0) {
    alert('Game over')
  } else if ( totalLifePointMonster <= 0) {
    alert('Monster is dead')
  }

  game = [totalLifePointsPlayer, totalLifePointMonster];
  console.table(game);
  return game;
}

const rollTheDice = (dices, index) => {
  let output = '';

  output += "&#x268" + (dices - 1) + "; ";
  document.getElementById ('dice' +index).innerHTML = output;
};
