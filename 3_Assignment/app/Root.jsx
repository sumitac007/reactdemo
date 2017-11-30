import React from 'react';

import Result from './Result.jsx';
import Button from './Button.jsx';

class Root extends React.Component {
    constructor(){
        super();
        this.state = { sum: 0 };
    }
    
    updateSum(value){
        this.setState({sum: this.state.sum + value} )
    }

    render() {
        return <div>
            <Result res={this.state.sum}/>
            <Button incBy={5} handleClick={(this.updateSum.bind(this))}/>
            <Button incBy={10} handleClick={(this.updateSum.bind(this))}/>
            <Button incBy={15} handleClick={(this.updateSum.bind(this))}/>
            <Button incBy={20} handleClick={(this.updateSum.bind(this))}/>
        </div>;
    }
}

export default Root;