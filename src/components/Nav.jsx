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
		this.menuItems = document.querySelectorAll('.Nav__item');
		this.menuItems[0].classList.add('Nav__item--active');
	}

	toggleMenu = () => {
		this.menu.classList.toggle('Nav--active');
		this.setState({btnIcon: !this.state.btnIcon});
	}

	selectItem = e => {
		this.toggleMenu();

		for(const item of this.menuItems) {
			item.classList.remove('Nav__item--active');
		}
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
					<ul className="Nav__list" onClick={e => this.selectItem(e)}>
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
