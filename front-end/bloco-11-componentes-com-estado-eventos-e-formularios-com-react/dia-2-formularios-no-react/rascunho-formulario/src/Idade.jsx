import React from "react";

class Idade extends React.Component {
  render() {
    const { handleChange, value } = this.props
    return (

      <label>
        Informe sua idade:
        <input
          type="number"
          name="idade"
          value={value}
          onChange={handleChange} 
        />
      </label>

    );
  }
}

export default Idade;
