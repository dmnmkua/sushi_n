import React, {Component} from 'react';
import Card from './Card.jsx';
import '../styles/Cards.css';

export default class Cards extends Component {

  render() {
    return (
      <div className="Cards">
        {
          this.props.dish.map((card, index) =>
            <Card card={card} key={index} />
          )
        }
      </div>
    )
  }
}
