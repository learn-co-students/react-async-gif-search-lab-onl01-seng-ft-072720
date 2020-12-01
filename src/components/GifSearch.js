import React, { Component } from 'react'

class GifSearch extends Component {
    

    render(){
        return <div>
            <form onSubmit={ event => this.submitHandler(event) }>
                <label>Enter a Search Term: </label><br></br>
                <input type="text" name="search" onChange={event => this.props.handleChange(event)} value={this.props.formData}/>
                <button type="submit">Find Gifs</button>
            </form>
        </div>
    }

}

export default GifSearch