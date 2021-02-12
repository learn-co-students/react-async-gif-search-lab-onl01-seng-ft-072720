import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GiftListContainer extends Component  {

  state = {
    gifs: []
  }

  handleSubmit = (searchTerm) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(data => {
        let gifs = [];
        for (let i = 0; i <= 2; i++) {
          gifs.push(data.data[i].images.original.url)
        }
        this.setState({ gifs: gifs })
      })
  }

  render() {
    return (
      <div className={'GifListContainer'}>
        <GifList gifs={this.state.gifs} />
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    )
  }
} 

