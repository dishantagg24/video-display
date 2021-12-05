import React from 'react';

class SearchBar extends React.Component{
    state={item:''}

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onTermSubmit(this.state.item)
    }
    render(){
        return <div className='search-bar ui segment'>
            <form  className='ui form' onSubmit={this.handleSubmit}>
                <div className='field'>
                <label>Video Search</label>
                <input type='text' value={this.state.item} onChange={(e)=>this.setState({item:e.target.value})}/>
                </div>
            </form>
        </div>
    }
}

export default SearchBar
