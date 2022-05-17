import React from "react";

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

          <label>
            Nome Completo
            <input type="text" name="NomeCompleto" onChange={this.handleChange} />
          </label>

          <label>
            Informe sua idade:
          <input type="number" name="idade" onChange={this.handleChange} />
          </label>
          
          <label>
            Informações adicionais
          <textarea name="informacaoAdicional" id="" cols="30" rows="10"></textarea>
          </label>

          <select name="" id=""></select>

        </form>
      </div>
    );
  }
}

export default FormExercise;
