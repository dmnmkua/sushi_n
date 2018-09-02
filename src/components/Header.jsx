import React, {Component} from 'react';

const socIcons = [
	{
		logo: 'fa-vk',
		link: '#'
	},
	{
		logo: 'fa-odnoklassniki',
		link: '#'
	},
	{
		logo: 'fa-facebook-f',
		link: '#'
	},
	{
		logo: 'fa-instagram',
		link: '#'
	},
]

export default class Header extends Component {
	render() {
		return (
			<header className="Header">

				<figure className="Header__logo">
					<img src="https://cdn.emojidex.com/emoji/seal/%28%E3%82%B5%E3%83%A9%E3%83%80%E5%B7%BB%29%E3%81%99%E3%81%97.png?1477147496" alt="logo" className="Header__logo-image"/>
					<figcaption className="Header__logo-name">
						Origami
					</figcaption>
				</figure>

				<div className="Header__info">
					<div className="Header__info-free">
						Бесплатная доставка
					</div>

					<a href="tel:13243242" className="Header__info-tel">
						Тел: (050) 55-55-555
					</a>

					<div className="Header__info-work-time">
						пн-вс 10:00-21:00
					</div>
					
					<ul className="Header__soc-list">
					{
						socIcons.map((icon, index) =>
						<li className="Header__soc-item" key={index}>
							<a href={icon.link} className="Header__soc-link">
								<i className={"fab " + icon.logo}></i>
							</a>
						</li>
						)
					}
					</ul>
				</div>

			</header>
		)
	}
}