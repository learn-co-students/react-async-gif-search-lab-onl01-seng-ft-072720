import React, {Component} from 'react'

export default class GifSearch extends Component {
    state = {
        searchText: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let searchText = this.state.searchText;
        this.props.fetchGifs(searchText)
        // search api with this.state.searchText
    }

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        }, () => console.log(this.state.searchText))
        
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.searchText} onChange={this.handleChange}/>
                        <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}