import React, {useState} from "react";

const AddPlaylist = () =>{

    const[playlistName, setPlaylistName] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        fetch('http://localhost:8080/server_war_exploded/createPlaylist?playlistName='+playlistName, {
            method:'POST',
            credentials:'include'
        }).then((res)=>{
            return res.json()
        })
        document.getElementById("create-playlist").style.display="none"

    }
    
    
    return <div id="create-playlist">
        <p>Create Playlist</p>
        <form onSubmit={handleSubmit}>
            <input type="text" id="addSongPlaylistInput" style={{marginTop:"50px"}} placeholder="Playlist name" value={playlistName} onChange={(e)=>setPlaylistName(e.target.value)}/> <br/> <br/>
            <input type="submit" value="Create"/>
        </form>
    </div>
}

export default AddPlaylist;