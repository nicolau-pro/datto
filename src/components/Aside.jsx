import React, { Component } from 'react';

// This section would use router to navigate within the react app

class Aside extends Component {
  render() {
    return (
      <aside>
        <nav>
          <ul>
            {this.props.data.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  target={item.target_blank ? '_blank' : undefined}
                  rel={item.target_blank ? 'noopener noreferrer' : undefined}>
                  <i className={'im im-' + item.icon}></i>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    );
  }
}

export default Aside;
