import React from 'react'

export default class GifList extends React.Component {

    render() {
        return(
            <div className='GifList'>
                <ul>
                    {this.props.gifs.map((gif, index) => (
                        <div key={index}>
                            <img src={gif} alt={'gifhy gif'}></img>
                            <br></br>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}