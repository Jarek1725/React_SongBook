import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const SearchItemListsPlaylists = (props) =>{

    function handleNewSong(e){
        props.setMusicFromFetch(e)
    }

    return props.actualList.map(item=>(
        <div key={item.id} className="search-playlist-item">
            <div className="artist_search_name"><b><Link to={'/home/playlist/'+item.id}>{item.name}</Link></b></div>
                <div className="playlist_genres">
                    {item.genres.map(genre=>(
                        genre+', '
                    ))}
                </div>
        </div>
    ))
}

export default SearchItemListsPlaylists;