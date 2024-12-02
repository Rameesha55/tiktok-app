import React from "react";

function Video() {
    return (
        <div className="video_player"
        loop
        >
            <video controls width="600">
                <source src="/VID-20230813-WA0021.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Video;
