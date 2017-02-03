/*eslint no-unused-vars: 1*/
import React, {Component} from "react";
import Game from "./game";

import app from "../style/app.sass";
import containers from "../style/game-containers.sass";
import modal from "../style/modal.sass";
import tile from "../style/tile.sass";

export default class AppContainer extends Component {
    render() {
        return (
          <div className="app-container">
              <Game />
          </div>
        );
    }
}