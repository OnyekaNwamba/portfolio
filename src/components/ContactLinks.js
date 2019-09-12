import React from 'react';
import github from 'images/github-icon.png';

class ContactLinks extends React.PureComponent {
  render() {
    return (
        <div className="contact-links">
        <span>

          <a rel="noopener" target="_blank" href="mailto:onynwamba@gmail.com">
            onynwamba@gmail.com
          </a>
        </span>
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/onyekanwamba"
          >
            LinkedIn
          </a>
        </span>
        <span>
            <i className="fab fa-github"></i>
          <a rel="noopener" target="_blank" href="https://github.com/OnyekaNwamba">
            github
          </a>
        </span>
      </div>
    );
  }
}

export default ContactLinks;
