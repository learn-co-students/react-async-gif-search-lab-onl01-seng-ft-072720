import React, { Component } from 'react';

export default class GifList extends Component {

    
    render() {
        // debugger
        return(
            <div>
                <ul>
                    {this.props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
                </ul>
            </div>
        )
    }
}