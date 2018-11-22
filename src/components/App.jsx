import React, { Component } from 'react';

// Components 
import SearchBar from './SearchBar';

const YOUTUBE_API_KEY = "AIzaSyALVDWH0Y6hEuqurGEM_qcGzKtKJ1qeIrY";

class App extends Component{
    render() {
        return(
            <div>
                App
                <SearchBar />
            </div>
        );
    }
}

export default App;