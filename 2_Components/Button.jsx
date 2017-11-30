import React from 'react';

// class Hello extends React.Component {
//     render() {
//         return <h1 id="hone">Hello, {this.props.name} </h1>;
//     }
// }


class Button extends React.Component {
    handleClick(){
        alert("Button Clicked!");
    }
    render() {
       // return <button onClick={this.handleClick}> {this.props.caption} </button>;
        return <button onClick={ () => {alert("Button clicked");}}> {this.props.caption} </button>;
    }
}
export default Button;

