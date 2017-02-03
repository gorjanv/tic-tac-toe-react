import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Modal extends Component {
    
    render() {
        return (
          <div className="modal-container">
              {this.props.gameState === "draw" ?
                <div key={0} className="modal-header">Game drawn ..</div> :
                <div key={0} className="modal-header">{"Player " + this.props.player + " has won"}</div> }
              <div key={1} className="modal-body">{"Would you like a new game?"}</div>
      
              <div key={2} className="modal-footer">
                  <input key={3} className="dialog-button" type="button" onClick={this.props.endGameButton} value="YES"/>
              </div>
          </div>
        );
    }
}