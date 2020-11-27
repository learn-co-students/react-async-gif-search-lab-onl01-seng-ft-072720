import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    handleSubmit = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.data.length)
            if (data.data.length >= 3) {
            this.setState({
                gifs: [
                    data.data[0].images.original.url,
                    data.data[1].images.original.url, 
                    data.data[2].images.original.url]
                })
            } else {
                console.warn('less than three images')
                let fewgifs = []
                for (let i = 0; i < data.data.length; i++) {
                    fewgifs.push(data.data[i].images.original.url)
                    console.log(fewgifs)
                this.setState({gifs: fewgifs})
                }
            }
        })
    }

    render() {
        return (
        <div className={'GifListContainer'}>
        {/* PASS THIS.STATE.GIFS AS PROP BELOW */}
        <h1>I AM A CONTAINER</h1>
        <GifList gifs={this.state.gifs}/>
        <GifSearch handleSubmit={this.handleSubmit}/>
        </div>
        )
    }
}