import React from "react";
import {Link} from "react-router-dom";

const AlbumSongList = (props) =>{

    function setNewSong(song){

        fetch('http://localhost:8080/server_war_exploded/getSong?songId='+song.songId, {
            credentials:'include'
        })
            .then((res)=>{
                return res.json()
            }).then((data)=>{
            console.log(data)
            sessionStorage.setItem('active_music', data.songId)
            props.setMusic({
                albumName: data.albumName,
                albumPhoto: '/photos/'+data.albumPhoto,
                songAuthor: data.songAutor,
                songId: data.songId,
                songIndexInAlbum: data.songIndexInAlbum,
                songSource:'/music/'+data.songSource,
                songTitle: data.songTitle,
                songAlbumId:data.songAlbum
            })
        })
    }

    return  <div className="songs-container" >
                <div id="song-index-album" className="song-album-list">
                    # &nbsp; &nbsp;
                    {props.currentAlbum.map(song=>(
                        <p key={song.songId}>{song.songIndexInAlbum} &nbsp; &nbsp;</p>
                    ))}
                </div>
                <div id="song-title-album" className="song-album-list">
                    Title
                    {props.currentAlbum.map(song=>(
                        <p key={song.songId}> <span className="start-music-album" title="Play" onClick={()=>setNewSong(song)}>{song.songTitle} </span>  - {song.songAutor.map(artist=>((<Link to={"/home/artist/"+artist.authorId} key={artist.authorId}>{artist.pseudonym}, </Link>)))}</p>
                    ))}
                </div>
                <div id="song-listeners-album" className="song-album-list">
                    Listeners
                    {props.currentAlbum.map(song=>(
                        <p key={song.songId}>{song.popularity}</p>
                    ))}
                </div>

            </div>
}

export default AlbumSongList;