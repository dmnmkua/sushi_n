import React, {Component} from 'react';
import '../styles/Card.css';

export default class Card extends Component {

  render() {
    return(
      <div className="Card">
        <img src="" alt={this.props.card.gsx$type.$t} />
        <div className="Card__name">
          {this.props.card.gsx$name.$t}
        </div>
      </div>
    )
  }
}
