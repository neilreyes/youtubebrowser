import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
    const videoItems = props.videos.map((video,index)=>{
        return <VideoListItem key={video.id.videoId} video={video}/>
    });
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;