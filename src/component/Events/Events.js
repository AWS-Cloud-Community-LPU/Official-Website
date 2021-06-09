import React from 'react';

function YoutubeEmbed(youtubeLink) {
    youtubeLink = youtubeLink.match(/(?<==)\w+/);
    return (
        <div className="single-features">
            <div className=" video-container" data-wow-duration="500ms" data-wow-delay="300ms">

                <iframe title="HomePageIframe" width="1280" height="720" src={"https://www.youtube.com/embed/" + youtubeLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>
    )
}

export default YoutubeEmbed;