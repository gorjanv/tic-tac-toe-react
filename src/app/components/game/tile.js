import React, { Component } from "react";

export default class Tile extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.onTileClick = this.onTileClick.bind(this);
    }
    
    onTileClick() {
        this.props.onTileClick(this.props.tile);
    }
    
    render() {
        let className = "";
        if (this.props.tile.state === "") {
            className = "not-played";
        }
        if (this.props.tile.state === "X") {
            className = "X";
        }
        if (this.props.tile.state === "O") {
            className = "O";
        }
        
        return <div className={className} onClick={this.onTileClick}>{this.props.tile.state}</div>
    }
}