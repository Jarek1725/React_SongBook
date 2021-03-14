import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

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
                        <div className="song_title_search"><b><Link to={'/home/album/'+item.songAlbum+"/"+item.songId}>{item.songTitle}</Link></b></div>
                        <div className="song_artists_search">{item.songAutor.map(artist=>(
                            <Link to={'/home/artist/'+artist.authorId}>{artist.pseudonym + ", "}</Link>
                        ))}</div>
                    </div>
                </div>
            ))
}

export default SearchItemLists;