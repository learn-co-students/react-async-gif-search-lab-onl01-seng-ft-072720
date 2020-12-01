import React, { Component } from 'react'

import GifList from '../components/GifList'
import GitSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount(){
        
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=LZFQTZGs4jUR8F3FgLoVcNkAU8KhtWhy&rating=g`)
        .then(resp => resp.json())
        .then(json => {
            this.setState({
            gifs: [json.data[0].images.original.url, json.data[1].images.original.url, json.data[2].images.original.url]
            })
        })
    
    }

    submitHandler = (e) => {
        console.log(e);
        e.preventDefault();
        this.setState({
            search: e.target.value
        })
    }

    render(){
        return <div>
            <GifList gifData={this.state.gifs}/>
            <GitSearch handleChange={this.handleChange} submitHandler={this.submitHandler}/>
        </div>
    }

}

export default GifListContainer