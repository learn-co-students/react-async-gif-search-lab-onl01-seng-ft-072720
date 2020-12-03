import React, {Component} from 'react'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {

    state = {
        images: []
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(resp => resp.json())
        .then((resp) => {
            this.setState( {
                images: resp.data.slice(0,3)
            })
        })
    }

    render () {
        return (
            <div>
                <GifList images={this.state.images}/>
            </div>
        )
    }
}