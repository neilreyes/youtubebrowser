import React, { Component } from 'react';
import searchYoutube from 'youtube-api-v3-search';

// Components 
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

// Utils
import _ from 'lodash';

const YOUTUBE_API_KEY = "AIzaSyC_vTCoR8PseScF4owFyskryB2kZ3jlz1M";

class App extends Component {
    constructor(props){
        super(props);

        this.state ={
            selectedVideo: null,
            videos: []
        };

        this.handleOnVideoSelect = this.handleOnVideoSelect.bind(this);
        this.handleOnVideoSearch = this.handleOnVideoSearch.bind(this);
        this.renderVideoDetail = this.renderVideoDetail.bind(this);

    }
    
    handleOnVideoSelect(selectedVideo){
        this.setState({
            selectedVideo
        })
    }
    
    handleOnVideoSearch(term){
        
        const searchQuery = {
            q: term,
            type: 'video',
            videoType: 'any'
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
                        selectedVideo: result.items[0]
                    });
                }
            }
        );
    }

    renderVideoDetail(){
        if( this.state.selectedVideo !== null ){
            return <VideoDetail video={this.state.selectedVideo}/>;
        }
    }

    render(){
        

        const videoSearch = _.debounce(term=>{this.handleOnVideoSearch(term)}, 300);
        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                {this.renderVideoDetail()}
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={this.handleOnVideoSelect}
                />
            </div>
        )
    }
}

export default App;