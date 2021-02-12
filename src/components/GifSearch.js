import React, { Component } from 'react'

export default class GifSearch extends Component {
  render() {
    return (
      <div className='GifSearch'>
        <form onSubmit={this.handleSubmit}>
          <input name='search' id='search' onChange={this.handleChange}></input>
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  } 

  state = {
    search: ''
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state.search)
    e.target.reset()
    this.setState({ search: '' })
  }
}