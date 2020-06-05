import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// images
import { Logo, FacebookIcon, TwitterIcon, LinkedInIcon } from '../../images';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="wrapper">
          <div className="footer-left">
<<<<<<< HEAD
            <h2>
              <Link to="/">
                <Logo />
              </Link>
            </h2>
=======
            <Link to="/" className="logo"><Logo /></Link>
>>>>>>> 8df0ff540a370192bf708a4e45b6e94546f1584d
            <p>All rights reserved.</p>
          </div>

          <div className="footer-right">
            <ul className="links">
              <li>
                <a
                  href="https://facebook.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
            <p className="version">App version 1.0.0</p>
          </div>
        </div>
      </footer>
    );
  }
}
