import React from 'react';

class Root extends React.Component {
    constructor() {
        super();
        
    }

   click(event){
       event.preventDefault();
   }

    render() {
        return <div>
            <a href='http://www.google.com' onClick={this.click}>Click 1</a>
        </div>;
    }
}

export default Root;