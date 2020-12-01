import React from 'react' 

const GifList = ({gifs}) => {
    return(
        <div>
            <ul>
                {{gifs}.map(gif => <li><img key={gif.id} src={gif.url} alt="gif" /></li>)}
            </ul>
        </div>
    )
}

export default GifList