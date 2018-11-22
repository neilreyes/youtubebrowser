import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({videos, onVideoSelect}) => {
    const videoItems = videos.map((video,index)=>{
        return (
            <VideoListItem
                onVideoSelect={onVideoSelect}
                key={video.id.videoId}
                video={video}
            />
        );
    });
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;