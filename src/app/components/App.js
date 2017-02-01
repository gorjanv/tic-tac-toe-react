import React, {Component} from "react";
import Game from "./game";

import style from "../../style/app.scss"

export default class AppContainer extends Component {
    render() {
        return (
          <div className="container">
              <Game />
          </div>
        );
    }
}