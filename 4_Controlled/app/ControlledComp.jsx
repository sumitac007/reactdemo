import React from 'react';

class Root extends React.Component {
    constructor() {
        super();
        this.state = { name: "Manish" };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    handleClick(e) {
        this.setState({ name: this.refs.t1.value });
    }

    render() {
        return <div>
            <input type="text" value="Manish" />
            <br />
            <input type="text" value={this.state.name} />
            <br />
            <input type="text" value={this.state.name} onChange={this.handleChange} />
            <br />
            <input type="text" />
            <br />
            <input ref="t1" type="text" defaultValue="Ram" />
            <br />
            <button onClick={this.handleClick}>Click</button>
        </div>;
    }
}


export default Root;