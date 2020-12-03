import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    state = {
        images: []
    }

    fetchGifs(query = "random") {
        // debugger;
        console.log(query)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            this.setState({
                images: resp.data.slice(0,3)
            })
        })
        
    }

    componentDidMount() {
        this.fetchGifs()
    }




    render () {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList images={this.state.images}/>
            </div>
        )
    }
}