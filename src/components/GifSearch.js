import React from 'react'

export default class GifSearch extends React.Component {

    state = {
        search: ''
    }

    handleChange = (e) => {
        this.setState({search: e.target.value}, () => console.log(this.state.search))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.search)
        e.target.reset()
        this.setState({search: ''})
    }

    render() {
        return (
            <div className='GifSearch'>
                <form
                    onSubmit={this.handleSubmit}>
                    <input 
                        name='search' 
                        id='search'
                        onChange={this.handleChange}>
                    </input>
                    <button type='submit'>Search</button>
                </form>
            </div>)
    }
}