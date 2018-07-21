import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

const hrefData = 'https://spreadsheets.google.com/feeds/list/1YDRS3wNHewTTo_MmL9wd9H2WIidLlhGeP_Bx_V9C3QI/od6/public/values?alt=json';

const data = fetch(hrefData)
	.then((response) => response.json());
console.log(data);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
