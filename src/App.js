import React, { Component } from 'react'
import logo from './logo.svg';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';



class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      themeName: cookies.get('themeName') || 'A'
    };
    require('./theme/theme' + this.state.themeName + '/css/index.css')
    require('./theme/theme' + this.state.themeName + '/css/App.css')
  }

  handleThemeNameChange = (themeName) =>{
    const { cookies } = this.props;
    cookies.set('themeName', themeName, { path: '/' });
    this.setState({ themeName });
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section>
            <button onClick={() => this.handleThemeNameChange('A')}>Theme A</button>
            <button onClick={() => this.handleThemeNameChange('B')}>Theme B</button>
          </section>
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
    )
  }
}

export default withCookies(App)