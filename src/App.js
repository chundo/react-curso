import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './pecademy.png';
import './App.css';
import Titulo from './components/Titulo';
import { chundo } from './components/Titulo';


class App extends Component { //Test de componente
  hello(){
    'Hola Agente528';
    if(false){
        return (<i className="em em-soccer"></i>);
    }else{
      return (<i className="em em-underage"></i>);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pecademy</h1>
          <Titulo />

          { this.hello()}
          { chundo() }

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
