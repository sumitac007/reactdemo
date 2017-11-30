
import React from 'react';

class Button extends React.Component {
    constructor(){
        super();
        this.state = {sum : 0};
    }

    handleClick(value){
        this.setState({ sum: this.state.sum + value });
    }

  

    render() {
        // return <button onClick={this.handleClick}> {this.props.caption} </button>;
        return  (

            <div>
                <div>Result  {this.state.sum}</div>
                <button onClick={this.handleClick.bind(this,5)}>Inc 5</button>
                <button onClick={this.handleClick.bind(this,10)}>Inc 10</button>
                <button onClick={this.handleClick.bind(this,15)}>Inc 15</button>
                <button onClick={this.handleClick.bind(this,20)}>Inc 20</button>
            </div>   
        );
    }
}

export default Button;