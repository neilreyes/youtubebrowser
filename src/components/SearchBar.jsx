import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props)

        this.state = {
            term: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e){
        const target = e.target;
        const name = target.name;
        const value = target.value;
        
        this.setState({
            [name]: value,
        })
    }

    handleFormSubmit(e){
        e.preventDefault();
        const value = this.state.term;
        this.props.onSearchTermChange(value);

        this.setState({
            term: '',
        });
    }

    render() {
        return(
            <form
                id="SearchBar"
                onSubmit={this.handleFormSubmit}
                className="form-inline"
            >
                <div className="form-group">
                    <input
                        name="term"
                        value={this.state.term}
                        className="SearchBar form-control"
                        placeholder="Search term..."
                        onChange={this.handleInputChange}
                    />
                </div>
                <submit
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.handleFormSubmit}
                >
                    Search
                </submit>
            </form>
        );
    }
}

export default SearchBar;