import React, { Component } from 'react';
import searchYoutube from 'youtube-api-v3-search';

// Components 
import SearchBar from './SearchBar';
import VideoList from './VideoList';

const YOUTUBE_API_KEY = "AIzaSyC_vTCoR8PseScF4owFyskryB2kZ3jlz1M";

const searchQuery = {
    q: 'nodejs',
    type: 'video',
    videoType: 'any'
}

class App extends Component {
    constructor(props){
        super(props);

        this.state ={
            videos: []
        }

        searchYoutube(
            YOUTUBE_API_KEY,
            searchQuery, 
            (error, result) => {
                if(error){
                    console.log('Error: ', error);
                } else {
                    this.setState({
                        videos: result.items,
                    });
                }
            }
        )
    }

    render(){
        return(
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;