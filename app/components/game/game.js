import React, { Component } from "react";
import Tile from "./tile";
import Modal from "../modal/modal";

import { winningSubsets } from "../../util";

export default class TicTacToe extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = this.getInitialState();
        
        this.getInitialState = this.getInitialState.bind(this);
        this.checkGameEnd = this.checkGameEnd.bind(this);
        this.clickEvent = this.clickEvent.bind(this);
        this.endGame = this.endGame.bind(this);
    }
    
    getInitialState() {
        return {
            tiles: [{
                coord: 1,
                state: ""
            }, {
                coord: 2,
                state: ""
            }, {
                coord: 3,
                state: ""
            }, {
                coord: 4,
                state: ""
            }, {
                coord: 5,
                state: ""
            }, {
                coord: 6,
                state: ""
            }, {
                coord: 7,
                state: ""
            }, {
                coord: 8,
                state: ""
            }, {
                coord: 9,
                state: ""
            }, ],
            player: "X",
            turn: 0,
            gameState: ""
        }
    }
    
    clickEvent(tile) {
        let stateCopy = this.state.tiles.slice();
        let turn = this.state.turn;
        let player = "";
        
        if (tile.state === "") {
            if (this.state.turn % 2 === 0) {
                tile.state = "X";
                player = "X";
            } else {
                tile.state = "O";
                player = "O";
            }
            turn++;
            
            stateCopy[tile.coord - 1] = tile;
            
            this.checkGameEnd(stateCopy, player, turn);
        }
    }
    
    endGame() {
        this.setState(this.getInitialState());
    }
    
    
    checkGameEnd(stateCopy, player, turn) {
        let currentlySelected = [];
        let gameWon = false;
        
        stateCopy.forEach((tile) => {
            if (tile.state === player)
                currentlySelected.push(tile.coord - 1);
        });
        
        winningSubsets.forEach((subset) => {
            if (currentlySelected.includes(subset[0]) &&
              currentlySelected.includes(subset[1]) &&
              currentlySelected.includes(subset[2])) {
                
                gameWon = true;
            }
        });
        
        if (turn === 9 && gameWon === false) {
            this.setState({
                tiles: stateCopy,
                turn: turn,
                player: player,
                gameState: "draw"
            })
        } else if (gameWon) {
            this.setState({
                tiles: stateCopy,
                turn: turn,
                player: player,
                gameState: "won"
            });
        } else {
            this.setState({
                tiles: stateCopy,
                turn: turn,
                player: player
            })
        }
    }
    
    render() {
        let tiles = this.state.tiles.map(function(tile, key) {
            return <Tile key={key} onTileClick={this.clickEvent} tile={tile} />
        }.bind(this));
        
        let boardState = <div className="game-board-container">{tiles}</div>;
        
        return (
          this.state.gameState === "won" || this.state.gameState === "draw" ?
            <div className="game-container">
                {boardState}
                <Modal endGameButton={this.endGame} gameState={this.state.gameState} player={this.state.player} />
            </div> :
            <div className="game-container">{boardState}</div>
        );
    }
}


