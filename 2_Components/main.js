import React from 'react';
import ReactDOM from 'react-dom';
import Main from './RepeatComponent.jsx';

var name =["Sumit", "Steve", "Shane", "Smith"];

ReactDOM.render(<Main items={names}/>,document.getElementById("container"));


// var pname = "Sumit";
// ReactDOM.render(<Button text="B1"/>, document.getElementById("container"));
// //ReactDOM.render( <Hello name={pname}/> , document.getElementById("container"));