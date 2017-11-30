import React from 'react';

class Button extends React.Component {
    localClick(){
        this.props.handleClick(this.props.incBy);
    }
    render() {
        return <button onClick={this.localClick.bind(this)}>Inc {this.props.incBy}</button>;
    }
}

export default Button;