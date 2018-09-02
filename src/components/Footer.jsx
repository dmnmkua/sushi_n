import React, {Component} from 'react';

export default class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer className="Footer">
				<div className="Footer__author">
					by DMN
				</div>
				<a className="Footer__link" href="mailto:dmn.mk.ua@gmail.com">
					dmn.mk.ua@gmail.com
				</a>
			</footer>
		)
	}
}