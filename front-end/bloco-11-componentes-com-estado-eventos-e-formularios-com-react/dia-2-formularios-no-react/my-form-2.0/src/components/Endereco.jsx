import React from "react";

class Endereco extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <input 
        name="Endereco" 
        type="text" 
        placeholder="Endereco"
        maxLength={'200'}
        value={value.replace}
        onChange={handleChange}
        required
      />
    )
  }
}

export default Endereco;