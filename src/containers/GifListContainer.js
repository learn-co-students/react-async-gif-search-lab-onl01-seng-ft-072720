
import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        gifs: []
    };


    render() {
        return (
          <div>
            <GifSearch fetchGIFS={this.fetchGIFs} />
            <GifList gifs={this.state.gifs}/>
          </div>
        )
      }

      fetchGIFs = (query = "dolphins") {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=xoDvEl5M2edIhOmsyErgWQNGYoOOvZEf')
          .then(response => response.json())
          .then(data => {
            this.setState({
              gifs: data.map( gif => ({ url: gif.images.original.url }))
            })
          })
      }

      componentDidMount() {
          this.fetchGIFs()
      }
    
    }

    export default GifListContainer