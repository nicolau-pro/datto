import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <img
            className="logo"
            src="https://www.datto.com/template-img/nav/datto-logo__light.svg"
            alt="Datto Logo"
          />
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
