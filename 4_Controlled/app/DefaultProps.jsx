import React from 'react';

class Text extends React.Component {
    render() {
        var myStyle = {
            color: this.props.fColor,
            backgroundColor: this.props.bColor
        };

        return <p style={myStyle}>{this.props.content}</p>;
    }

    // static get defaultProps() {
    //     return {
    //         fColor: 'white',
    //         bColor: 'green'
    //     };
    // }
}

Text.defaultProps = {
    fColor : "blue",
    bColor : "purple"
}
class Root extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div>
            <Text content="Just for Check..." fColor="red" bColor="yellow" />
            <Text content="Just for Check..." />
            {/* <Text content="Just for Check..."/> */}
        </div>;
    }
}

export default Root;