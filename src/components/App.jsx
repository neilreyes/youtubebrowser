import React, { Component } from 'react';
import searchYoutube from 'youtube-api-v3-search';

// Components 
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

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
            selectedVideo: null,
            videos: []
        }

        this.handleOnVideoSelect = this.handleOnVideoSelect.bind(this)

        searchYoutube(
            YOUTUBE_API_KEY,
            searchQuery, 
            (error, result) => {
                if(error){
                    console.log('Error: ', error);
                } else {
                    this.setState({
                        videos: result.items,
                        selectedVideo: result.items[0]
                    });
                }
            }
        )
    }
    
    handleOnVideoSelect(selectedVideo){
        this.setState({
            selectedVideo
        })
    }

    render(){
        return(
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={this.handleOnVideoSelect}
                />
            </div>
        )
    }
}

export default App;