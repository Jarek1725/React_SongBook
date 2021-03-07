import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";

const SearchItemLists = (props) =>{

    function handleNewSong(e){
        props.setMusicFromFetch(e)
    }

    return props.actualList.map(item=>(
                <div key={item.songId} className="search-song-item">
                    <div className="song_cover">
                        <img src={'/photos/'+item.albumPhoto} alt="" className="album_cover_search_pane"/>
                        <p id={"song_to_start_"+item.songId} onClick={()=>handleNewSong(item.songId)} className="image_start_play"><FontAwesomeIcon icon={faPlay} /></p>
                    </div>
                    <div className="search-song-title">
                        <div className="song_title_search"><b>{item.songTitle}</b></div>
                        <div className="song_artists_search">{item.songAutor.map(item=>(
                            item.pseudonym+", "
                        ))}</div>
                    </div>
                </div>
            ))
}

export default SearchItemLists;