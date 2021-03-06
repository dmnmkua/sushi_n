import React, { Component } from 'react';

import Header from './components/Header.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
	constructor(props) {
		super(props)

		global.db = this.props.db;

		this.cards = this.props.db.filter(item => item.gsx$name.$t !== '' && item.gsx$show.$t === "TRUE");

		global.cards = this.cards;

		this.state = {
			dish: global.cards.filter(card => card.gsx$type.$t === 'sushi')
		}
	}

	_updateData = (value) => {
		this.setState({dish: global.cards.filter(card => card.gsx$type.$t === value)})
	}

  render() {
    return (
      <div className="App">
				<Header />
				<Nav _updateData={this._updateData} />
				<Cards dish={this.state.dish} />
				<Footer />
      </div>
    );
  }
}

export default App;
