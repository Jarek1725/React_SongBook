import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import AlbumSongList from "./AlbumSongList";
import imageEmpty from "../components/IconsSvg/not_found_album.svg"
import AddSongToPlaylist from "./AddSongToPlaylist";

const PlaylistSite = (props) =>{

    const[playlistActual, setPlaylistActual] = useState('')
    const[playlistLoaded, setPlaylistLoaded] = useState(false);

    let { id } = useParams();

    useEffect(()=>{
        fetch('http://localhost:8080/server_war_exploded/getPlaylistServlet?playlistId='+id, {
            method:'POST',
            credentials:'include'
        }).then((res)=>{
            return res.json()
        }).then(data=>{
            setPlaylistActual(data)
            console.log(data)
            setPlaylistLoaded(true)
            console.log(playlistActual)
        }
        )}, [id])


    function handleFollow(){
        fetch('http://localhost:8080/server_war_exploded/followPlaylistServlet?playlistId='+id, {
            method:'POST',
            credentials:'include'
        })
    }

    function handleAddSong(){
        document.getElementById("add-song-to-playlist-container").style.display="block"
    }

    return <div>
        {playlistLoaded && <div className="playlist_top_container"><p>Playlist creator: {playlistActual.creator_id.login}</p>
                                {sessionStorage.getItem("userId")=== playlistActual.creator_id.id &&
                                <p style={{cursor:"pointer"}} onClick={()=>handleAddSong()}>Add song</p>}
                                <p style={{cursor:"pointer"}} onClick={()=>handleFollow()}>Follow</p>
                            </div>}
        {playlistLoaded && playlistActual.songList.length!==0 && <AlbumSongList currentAlbum={playlistActual.songList} setMusic={props.setMusic} music={props.music} songId={0} isFromAlbum={false}/>}
        {playlistLoaded &&  <AddSongToPlaylist playlistId={id}/>}
        {playlistLoaded && playlistActual.songList.length===0 && <div style={{textAlign:"center", height:"300px"}}><img style={{marginBottom:"30px",marginTop:"70px",textAlign:"center", height:"300px"}} src={imageEmpty} alt=""/><p>This playlist is empty</p></div>}
    </div>
}

export default PlaylistSite;