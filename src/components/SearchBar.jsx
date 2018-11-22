import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props)

        this.state = {
            term: ''
        }

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e){
        const target = e.target;
        const name = target.name;
        const value = target.value;
        
        this.setState({
            [name]: value,
        })
        
    }

    render() {
        return(
            <div>
                <input
                    name="term"
                    value={this.state.term}
                    className="SearchBar"
                    placeholder="Search term..."
                    onChange={this.handleSearch}
                />
            </div>
        );
    }
}

export default SearchBar;