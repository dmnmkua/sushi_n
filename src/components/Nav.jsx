import React, {Component} from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.navItem = [
      'sushi',
      'roll',
      'rice'
    ]
  }
  
  render() {
    return (
      <div className="Nav">
        {/*<h2 className="Nav__title">
                  Menu
                </h2>*/}

        <nav className="Nav__navigation">
          <ul className="Nav__list">
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
