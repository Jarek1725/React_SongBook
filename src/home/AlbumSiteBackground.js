import { Parallax } from 'react-parallax';
import React from "react";

const AlbumSiteBackground = (props) => (
    <Parallax bgClassName="parallax-album-image-background" bgImage={"/photos/"+props.currentAlbum[0].albumPhoto} strength={500}>
        {/*<div className="in-parallax-album-top">*/}
        {/*    <img className="in-parallax-album-top-photo" src={"/photos/"+currentAlbum[0].albumPhoto} alt=""/>*/}
        {/*</div>*/}
        <div style={{height:500}}>
            <div>Html style</div>
        </div>
    </Parallax>
);

export default AlbumSiteBackground;