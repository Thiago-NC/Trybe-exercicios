import React from 'react';
import CPF from './components/CPF';
import Email from './components/Email';
import Endereco from './components/Endereco';
import Nome from './components/Nome';
// import './App.css';

class App extends React.Component {
  constructor() {
    super() 

    this.state = {
      Nome: '',
      Email: '',
      CPF: '',
      Endereco: '',
    }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange( {target} ) {
    const { value, name } = target
    console.log(value);
    this.setState({[name]:value})
  }
  
  render() {
    return(
      <fieldset className='a'>
        <Nome value={this.state.Nome} handleChange={this.handleChange}/>
        <Email value={this.state.Email} handleChange={this.handleChange}/>
        <CPF value={this.state.CPF} handleChange={this.handleChange}/>
        <Endereco value={this.state.Endereco} handleChange={this.handleChange}/>
        <input type="text" name='Cidade'/>
        <select id="" name="Estado" ></select>
        <input type="radio" />
      </fieldset>
    )
  }
}

export default App;
