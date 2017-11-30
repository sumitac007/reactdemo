import React from 'react';

class Result extends React.Component {

    render() {
        return <h2 className="text-danger">Result:{this.props.res} </h2>;
    }
}

export default Result;