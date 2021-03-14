import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const SearchItemLists = (props) =>{

    function handleNewSong(e){
        props.setMusicFromFetch(e)
    }


    return (
        props.actualList.map(item=>(
            <div key={item.albumId} className="search-song-item">
                <div className="song_cover">
                    <img src={'/photos/'+item.albumPhoto} alt="" className="album_album_cover_search_pane"/>
                    {/*<p id={"song_to_start_"+item.songId} onClick={()=>handleNewSong(item.songId)} className="image_start_play"><FontAwesomeIcon icon={faPlay} /></p>*/}
                </div>
                <div className="search-song-title">
                    <div className="artist_search_name"><b><Link to={'/home/album/'+item.albumId}>{item.albumName}</Link></b></div>
                </div>
            </div>
        ))
    )
}

export default SearchItemLists;