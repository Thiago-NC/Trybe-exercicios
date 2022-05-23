import React, { Fragment } from "react";

class NomeCompleto extends React.Component {
    
    render() {
        const { value, handleChange } = this.props

        let error = undefined 
        if(value.length > 120) {
            return  error = ('Texto muito grande!!')
        }

        return(

            <div>
                <label>
                    Nome Completo
                    <input 
                        type="text"
                        name="NomeCompleto"
                        value={ value }
                        onChange={handleChange} 
                     />
                </label>

                <Fragment>
                    {error !== undefined ? error : '' }
                </Fragment>

            </div>
        )
    }
}

export default NomeCompleto;