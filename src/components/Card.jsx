import React, {Component} from 'react';

export default class Card extends Component {

	render() {
		return(
			<div className="Card">
				<img src={this.props.card.gsx$image.$t} alt={this.props.card.gsx$type.$t} className="Card__image" />

				<div className="Card__name">
					{this.props.card.gsx$name.$t}
				</div>

				<button className="Card__btn-buy">
					Купить {this.props.card.gsx$price.$t}грн.
				</button>
			</div>
		)
	}
}
