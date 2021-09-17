/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
    try {
        stylesStr = require(`!raw-loader!../public/styles.css`);
    } catch (e) {
        console.log(e);
    }
}

const propTypes = {
    headComponents: PropTypes.node.isRequired,
    body: PropTypes.node.isRequired,
    postBodyComponents: PropTypes.node.isRequired,
};

class Html extends Component {
    render() {
        let css;
        if (process.env.NODE_ENV === `production`) {
            css = (
                <style
                    id="gatsby-inlined-css"
                    dangerouslySetInnerHTML={{ __html: stylesStr }}
                />
            );
        }

        return (
            <html op="news" lang="en">
            <head>
                {this.props.headComponents}

                <meta name="referrer" content="origin" />
                <meta charSet="utf-8" />
                <meta name="description" content="Onyeka Nwamba's Portfolio" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="shortcut icon" href="favicon.png" type="image/x-icon"/>
                <title>Onyeka's Portfolio</title>
                {css}
            </head>
            <body>
            <div
                id="___gatsby"
                dangerouslySetInnerHTML={{ __html: this.props.body }}
            />
            {this.props.postBodyComponents}
            <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
            <noscript>
                <img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade"/></noscript>
            </body>
            </html>
        );
    }
}

Html.propTypes = propTypes;

module.exports = Html;

export default PropTypes