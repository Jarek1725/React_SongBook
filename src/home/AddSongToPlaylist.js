import React, {useState} from "react";
import SearchPane from "../navbar/SearchPane";
import SongListForAdd from "./SongListForAdd";

const AddSongToPlaylist = (props) =>{

    const [searchedSongAddPlaylist, setSearchedSongAddPlaylist] = useState('')
    const [dataLength, setDataLength] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
    }

    const handleChange = event =>{
        fetch('http://localhost:8080/server_war_exploded/searchSongOnlyForPlaylists?songName='+event.target.value, {
            method:'POST',
            credentials:'include'
        }).then((res)=>{
            return res.json()
        }).then(data=>{
            setSearchedSongAddPlaylist(data)
            if(searchedSongAddPlaylist.length>0){
                setDataLength(true)
            }else{
                setDataLength(false)
            }
        })
    }

    return  (<div id="add-song-to-playlist-container">
                <h4>Add Song</h4>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="addSongPlaylistInput" placeholder="Search Song" onChange={handleChange}/>
                    {dataLength && <SongListForAdd songs={searchedSongAddPlaylist} playlistId={props.playlistId}/>}
                </form>
            </div>)
}

export default AddSongToPlaylist;