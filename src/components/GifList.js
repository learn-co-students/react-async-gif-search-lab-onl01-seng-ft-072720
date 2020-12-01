import React, { Component } from 'react'

class GifList extends Component {

    render(){
        return <div>
                <ul>
                    <li><img src={this.props.gifData[0]} alt=""/></li>
                    <li><img src={this.props.gifData[1]} alt=""/></li>
                    <li><img src={this.props.gifData[2]} alt=""/></li>
                </ul>
            </div>
    }

}

export default GifList