import React from "react";

const SongListForAdd = (props) =>{

    function addSongToPlaylist(item){
        fetch('http://localhost:8080/server_war_exploded/addSongToPlaylist?songName='+item+"&playlistId="+props.playlistId, {
            method:'POST',
            credentials:'include'
        }).then((res)=>{
            return res.json()
        })
        document.getElementById("add-song-to-playlist-container").style.display="none"
    }

    return  <div>
                {props.songs.map(item=>(
                    <div className="song-for-add-playlist" style={{cursor:"pointer"}} onClick={()=>addSongToPlaylist(item.songId)}>
                        {item.songTitle} - {item.songAutor.map(author=>(
                            author.pseudonym + ", "
                    ))}
                    </div>
                ))}
            </div>
}

export default SongListForAdd;