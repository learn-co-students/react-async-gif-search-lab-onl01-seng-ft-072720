import React, { Component } from 'react'

export default class GiftList extends Component {
  render() {
    return (
      <div className='GiftList'>
       <ul> 
          {this.props.gifs.map((gif, index) => (
            <div key={index}>
              <img src={gif} alt={'gif'}></img>
              <br></br>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}