import React from "react";
import "./App.css";

class App extends React.Component {

  constructor() {
    super()
    
    this.state = {
      cliquesBotão1: 0,
      cliquesBotão2: 0, 
      cliquesBotão3: 0
    }

    this.buttom1 = this.buttom1.bind(this)
    this.buttom2 = this.buttom2.bind(this)
    this.buttom3 = this.buttom3.bind(this)
  }

  buttom1() {
    console.log(this);
    console.log("Primeiro Botão");
    this.setState ((estadoAnterior, _props) => ({
      cliquesBotão1: estadoAnterior.cliquesBotão1 +1
    }))
    console.log(this.state.cliquesBotão1)
    if (this.state.cliquesBotão1 % 2 === 0) {
      console.log('verde')
    }
  }
  buttom2() {
    console.log(this);
    console.log("Segundo Botão");
    this.setState((estadoAnterior, _props) => ({
      cliquesBotão2: estadoAnterior.cliquesBotão2 +1
    }))
  }

  buttom3() {
    console.log(this);
    console.log("Terceiro Botão");
    this.setState((estadoAnterior, _props) => ({
      cliquesBotão3: estadoAnterior.cliquesBotão3 +1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.buttom1}>{this.state.cliquesBotão1}</button>
        <button onClick={this.buttom2}>{this.state.cliquesBotão2}</button>
        <button onClick={this.buttom3}>{this.state.cliquesBotão3}</button>
      </div>
    );
  }
}

export default App;
