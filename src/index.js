import React from 'react';
// we use react-dom because we are going to build a web application 
// we do not need this if we build a native desktop application
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
// This comes into picture when we publish our app into production system
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

let render = () => {
    ReactDOM.render(<App />, rootElement);
};

// Hot module replacement
if (module.hot) {
    // Marking the module which needs to be updated on the fly
    // Anonymous function specifies how the updated should be handled
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render);
    });
}

render();

registerServiceWorker();
