import React from "react";

class Nome extends React.Component {
  render() {
    
    const { handleChange, value } = this.props;

    return (
      <input
        name="Nome"
        type="text"
        placeholder="Nome"
        minLength={'3'}
        maxLength='40'
        onChange={handleChange}
        value={value.toUpperCase()}
        required
      />
    );
  }
}

export default Nome;
