import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    query: ""
  }


  //<GifSearch /> should receive a callback prop from its parent.
  handleSubmit = event => {
    event.preventDefault()
    //It is this callback function, defined in <GifListContainer />, that will actually query the API with the text the user has entered.
    this.props.fetchGIFs(this.state.query)
  }


  //On a submit event, it should invoke that callback prop with the value of the text input. 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
        </form>
      </div>
    )
  }

}

export default GifSearch