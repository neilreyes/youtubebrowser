import React from 'react';

const VideoListItem = (props) => {
    console.log(props);
    const title = props.video.snippet.title;
    const thumbURL = props.video.snippet.thumbnails.default.url;
    return(
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={thumbURL}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;