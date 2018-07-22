import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx'

class App extends Component {
	constructor(props) {
		super(props)

		this.cards = this.props.db.filter(item => item.gsx$name.$t !== '');
	}
  render() {
    return (
      <div className="App">
      {
      	this.cards.map((item, index) =>
      		<Header key={index} title={item.gsx$name.$t} />
  		)
      }
      </div>
    );
  }
}

export default App;
