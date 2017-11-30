
import React from 'react';

class Main extends React.Component {
    render() {
        var litimes = this.props.items.map(function(item,index){
            return <li>{item}</li>;
        });
        
        return(
            <ul>
                {litems}
            </ul>
        );
    }
}

export default Button;