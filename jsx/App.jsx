import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import DevSignup from './DevSignup.jsx';
import DevSignupform from './DevSignupform.jsx';
import axios from 'axios';

var Global = require('react-global');
 


class App extends React.Component {
   constructor(props) {
    super(props);
   }

   render() {
      return (
          <div>
            <DevSignup> 
              <DevSignupform></DevSignupform>
            </DevSignup>
          </div>
      );
   }
}


export default App;
