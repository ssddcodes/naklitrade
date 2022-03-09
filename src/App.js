import React from 'react';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";
import $ from 'jquery';

$(function(){
  // let mb = document.getElementById("geteml");
  // mb.addEventListener("mouseover", showEm()); 
  // mb.addEventListener("mouseleave", hideEm()); 
});

$.get(
  "https://raw.githubusercontent.com/ssddcodes/naklitrade/main/email.txt",
  {null: null},
  function(data) {
    document.getElementById("showml").innerHTML = data;
  }
);
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
            <a href="https://github.com/ssddcodes/" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
            <div className="cta">Send us an email</div>
        </div>
        <div className="footer">
          <span>You can reach us on telegram in our group <a className="underlined" href="https://t.me/+r2-jeCENVtEzZTA1" target="_blank" rel="noopener noreferrer">"Nakli Trade" (click to join)</a> or email us on <a id='showml' className="underlined" href="" target="_blank" rel="noopener noreferrer"></a></span>
        </div>
      </div>
    );
  }
}
export default App;