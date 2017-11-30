import React from 'react';

class Button extends React.Component{
    constructor(){
        super();
        this.state = {text: "Click Me!"};
    }

    render() {
        // return <button onClick={this.handleClick}> {this.props.caption} </button>;
        return <button onClick={() => { alert("Button clicked!!"); }}> {this.state.text} </button>;
    }
}

export default Button;