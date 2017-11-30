//File Separation
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello.jsx';




ReactDOM.render( < Hello / > , document.getElementById("container"));






// import React from 'react';
// import ReactDOM from 'react-dom';
// import createReactClass from 'create-react-class';


// class Hello extends React.Component  

//     render() {
//         return <h1 id = "hone" > Hello World usign JSX extends!! < /h1>;
//     }
// }

// ReactDOM.render( < Hello / > , document.getElementById("container"));


{
    /* //Component Using JSX

    // var Hello = createReactClass({ */
}
//     render() {
//         return <h1 id = "hOne" > Hello World using JSX! < /h1>;
//     }
// });

// ReactDOM.render( < Hello / > , document.getElementById("container"));



//React Compononet

// var hello = createReactClass({
//     render() {
//         return React.createElement("h1", { "id": "hOne" }, "Hello World Using Component!");
//     }
// });

// ReactDOM.render(React.createElement(hello), document.getElementById("container"));



//React Elements
// var h1 = React.createElement("h1", { "id": "hOne" }, "Hello World!");
// var p = React.createElement("p", { "id": "para" }, "Inside a Para");
// var div = React.createElement("div", { "id": "d" }, h1, p);

// ReactDOM.render(div, document.getElementById("container"))//;