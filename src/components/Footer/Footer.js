import React from 'react';
import './Footer.css'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>
      <div>SUITSFORHIRE <br />
            1301 OAK ST. #705 <br />
            KANSAS CITY MO 64106 <br />
            suitsforhire@yahoo.com
      </div>
    <br />COPYRIGHT © 2019 SUITSFORHIRE - ALL RIGHTS RESERVED.
  </footer>
);

export default Footer;
