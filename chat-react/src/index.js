import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Secrets from "./Secrets"
import registerServiceWorker from './registerServiceWorker';

//Secrets.js made root for security. 
//Passes keys to App.js and is excluded from git by .gitignore
ReactDOM.render(<Secrets />, document.getElementById('root'));
registerServiceWorker();
