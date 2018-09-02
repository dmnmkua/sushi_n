import React, {Component} from 'react';

export default class Nav extends Component {
	constructor(props) {
		super(props);

		this.navItem = [
			'sushi',
			'roll',
			'rice'
		]

		this.state = {
			btnIcon: true
		}
	}

	componentDidMount() {
		this.menu = document.querySelector('.Nav');
		this.overlay = document.querySelector('.Nav__overlay');
	}

	toggleMenu = e => {
		this.menu.classList.toggle('Nav--active');
		this.overlay.classList.toggle('Nav__overlay--active');
		this.setState({btnIcon: !this.state.btnIcon})
		e.target.classList.add('Nav__item--active');
	}

	render() {
		return (
			<div className="Nav">
				{/*<h2 className="Nav__title">
					Menu
				</h2>*/}
				<div className="Nav__overlay" onClick={this.toggleMenu}></div>

				<button className="Nav__btn" onClick={this.toggleMenu}>
					<i className={this.state.btnIcon ? "fas fa-bars" : "fas fa-times"}></i>
				</button>

				<nav className="Nav__navigation">
					<ul className="Nav__list" onClick={e => this.toggleMenu(e)}>
						{
							this.navItem.map((item, index) =>
								<li key={index} className="Nav__item" onClick={() => this.props._updateData(item)}>
									{item}
								</li>
							)
						}
					</ul>
				</nav>
			</div>
		)
	}
}
