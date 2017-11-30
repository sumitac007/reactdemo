import React from 'react';
import PropTypes from 'prop-types';

class Root extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div>
            <h1>Hello time is: {this.props.now}</h1>
            <h1>Age: {this.props.age}</h1>
        </div>;
    }
}

Root.propTypes = {
    now: PropTypes.string.isRequired,
    age: function (props, propName, componentName) {
        if (props[propName] < 30)
            return new Error(componentName + " --------- " + propName + " must be greater than 30");
    }
}

export default Root;