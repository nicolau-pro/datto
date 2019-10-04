import React, { Component } from "react";

// This section would use router to navigate within the react app

class Aside extends Component {
  render() {
    return (
      <React.Fragment>
        <aside>
          <nav>
            <ul>
              <li>
                <a href="/">
                  <i className="im im-home"></i>Home
                </a>
              </li>
              <li>
                <a
                  href="https://www.datto.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="im im-external-link"></i>Main website
                </a>
              </li>
              <li>
                <a
                  href="https://www.datto.com/business-management/datto-rmm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="im im-computer"></i>Datto RMM
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </React.Fragment>
    );
  }
}

export default Aside;
