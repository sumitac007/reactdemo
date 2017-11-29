import React from 'react';
import ReactDOM from 'react-dom';

var h1 = React.createElement("h1", { "id": "hOne" }, "Hello World!");
var p = React.createElement("p", { "id": "para" }, "Inside a Para");
var div = React.createElement("div", { "id": "d" }, h1, p);

ReactDOM.render(div, document.getElementById("container"));