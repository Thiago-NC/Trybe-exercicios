import React from "react";

class Email extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <input 
        name="Email" 
        type="text" 
        placeholder="Email"
        maxLength={'50'}
        value={value}
        onChange={handleChange}
        required
      />
    )
  }
}

export default Email;
