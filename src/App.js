import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            {/* <a href=".">LOGO</a> */}
          </div>
          <div className="social">
            {/* <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a> */}
            <a href="https://github.com/ssddcodes/coming-soon" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:queries@nakli.trade">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>You can email us at "queries@nakli.trade" or message me on telegram at <a className="underlined" href="https://t.me/ssdddev" target="_blank" rel="noopener noreferrer">@ssdddev</a></span>
        </div>
      </div>
    );
  }
}

export default App;