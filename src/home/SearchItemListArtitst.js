import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const SearchItemLists = (props) =>{

    function handleNewSong(e){
        props.setMusicFromFetch(e)
    }

    return props.actualList.map(item=>(
        <div key={item.authorId} className="search-artist">
            <div className="song_cover">
                <div className="image_div">
                    <img className="artist_profile_photo" src={'/photos/profile_photos/'+item.profilePhoto} alt=""/>
                    <p id={"song_to_start_"+item.songId} onClick={()=>handleNewSong(item.songId)} className="image_start_play"><FontAwesomeIcon icon={faPlay} /></p>
                </div>
            </div>
                <div className="artist_name_search">
                    <div className="artist_search_name"><Link to={'/home/artist/'+item.authorId}><b>{item.pseudonym}</b></Link></div>
                </div>
        </div>
    ))
}

export default SearchItemLists;