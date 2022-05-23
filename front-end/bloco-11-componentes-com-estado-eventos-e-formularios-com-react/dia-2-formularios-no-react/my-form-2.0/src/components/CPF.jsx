import React from "react";

class CPF extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <input 
        name="CPF" 
        type="text" 
        placeholder="CPF"
        maxLength={'11'}
        value={value}
        onChange={handleChange}
        required
      />
    )
  }
}

export default CPF;