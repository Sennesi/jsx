// import
import React from 'react';
import ReactDOM from 'react-dom';

// create a component

function getButtonText() {
    return 'Click one me!';
}

const App = () => {
return ( <div>
    <label className = "label" htmlFor = "name" > 
        Enter Name: 
    </label> 
    <input id = "name" type = "text" />
    <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {getButtonText()} 
    </button>
    </div>
    );
};

//take the react component and show it
ReactDOM.render( <App/> , document.querySelector('#root'));

//t es au cours 17