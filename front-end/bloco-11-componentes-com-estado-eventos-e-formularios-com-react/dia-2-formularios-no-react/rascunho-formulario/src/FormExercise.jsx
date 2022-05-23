import React from "react";
import NomeCompleto from "./NomeCompleto";
import Idade from "./Idade";

class FormExercise extends React.Component {

  constructor()  {
    super()

    /* this.handleTextName = this.handleTextName.bind(this)
    this.handleAgeNumber = this.handleAgeNumber.bind(this) */
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      NomeCompleto: '',
      idade: 0,
    }
  }

  /* handleTextName (event) {
    console.log(event.target.value);
    this.setState({fullName: event.target.value})
  }

  handleAgeNumber (event) {
    console.log(event.target.value);
    this.setState({idade: event.target.value})
  } */

  handleChange ({ target }) {
    const { name, value } = target
    this.setState({
      [name]:value
    })
  }

  render() {
    return (
      <div>
        <form className="Formulario">

          <NomeCompleto value={this.state.NomeCompleto} handleChange={this.handleChange} />
          <Idade value={this.state.idade} handleChange={this.handleChange} />
          
          <label>
            Informações adicionais
          <textarea name="Idade" id="" cols="30" rows="10"></textarea>
          </label>

          <select name="" id=""></select>

        </form>
      </div>
    );
  }
}

export default FormExercise;
