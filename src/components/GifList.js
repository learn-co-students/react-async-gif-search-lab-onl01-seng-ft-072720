import React, {Component} from 'react'

export default class GifList extends Component {

    render () {
        return (
            <ul>
                {this.props.images.map(image => {
                    return (
                        <div>
                            <li key={image.id}>
                                <img src={image.images.original.url} alt={image.title} />
                            </li>
                            <br></br>
                        </div>
                    )
                })}
            </ul>
        )
    }

}