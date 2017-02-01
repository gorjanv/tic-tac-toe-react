import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Modal extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup transitionName={this.props.transitionName} transitionEnterTimeout={this.props.transitionEnterTimeout}
                                     transitionLeaveTimeout={this.props.transitionLeaveTimeout}>
                {this.props.children}
            </ReactCSSTransitionGroup>
        );
    }
}