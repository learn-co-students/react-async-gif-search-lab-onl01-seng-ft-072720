import React, { Component } from 'react'

//<GifList /> is a presentational component. It receives data from its 
//props and renders html given the input data. It can render a top level <ul> with each gif as an <li>.

const GifList = props => {
    console.log(props);
    return (
      <div>
          {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
      </div>
    )
  }
  
  export default GifList