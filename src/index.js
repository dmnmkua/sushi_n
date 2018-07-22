import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

const hrefData = 'https://spreadsheets.google.com/feeds/list/1YDRS3wNHewTTo_MmL9wd9H2WIidLlhGeP_Bx_V9C3QI/od6/public/values?alt=json';

fetch(hrefData)
	.then(response => response.json())
	.then(result => renderCards(result.feed.entry));

function renderCards(db) {
	ReactDOM.render(<App db={db} />, document.getElementById('root'));
}
registerServiceWorker();
