import React, {Component} from "react";
import Game from "./game";

import appStyle from "../style/app.sass";
import tileStyle from "../style/tile.sass";


export default class AppContainer extends Component {
    render() {
        return (
          <div className="container">
              <Game />
          </div>
        );
    }
}