import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import { Parallax } from 'react-parallax';
import AlbumSongList from "./AlbumSongList";
import ArtistAlbums from "./ArtistAlbums";


const ArtistSite = (props) =>{

    const[albumList, setAlbumList] = useState('')
    const[author, setAuthor] = useState('')
    const[songList, setSongList] = useState('')
    const[artistLoaded, setArtistLoaded] = useState(false)

    const { id } = useParams()

    useEffect(()=>{
        fetch('http://localhost:8080/server_war_exploded/getArtistServlet?artistId='+id, {
            method:'POST',
            credentials:'include'
        }).then((res)=>{
            return res.json()
        }).then(data=>{
            console.log(data)
            setAlbumList(data.albumList)
            setAuthor(data.author)
            setSongList(data.songList)
            if(data.albumList!=''){
                setArtistLoaded(true)
            }
        }
        )}, [])

    return <div className="album-site-container" id="album-site-container">

        {artistLoaded && <Parallax parent={document.getElementById("album-site-container")} style={{height:300}} blur={5} bgClassName="bg-image-album" className="bg-image-album1" bgImage={"/photos/"+albumList[0].albumPhoto} strength={500}>
            <div className="in-parallax-album-top">
                <div className="artist_image_container">
                    <img className="in-parallax-album-top-photo" src={"/photos/profile_photos/"+author.profilePhoto} alt=""/>
                </div>
                <div className="album_name">
                    <h2 className="autor_album_h2" style={{fontSize:46}}>{author.pseudonym}</h2>
                </div>
            </div>
        </Parallax>
        }
        <div className="artist-popular-songs-container">
            <h3 style={{margin: "15px 0px 0px 10px"}}>Popular songs</h3>
            {artistLoaded && <AlbumSongList currentAlbum={songList} setMusic={props.setMusic} music={props.music} isFromAlbum={false}/>}
        </div>
        <div className="artist-albums-container">
            <h3 style={{margin: "15px 0px 0px 10px"}}>Albums</h3>
            {artistLoaded && <ArtistAlbums albums={albumList}/>}
        </div>
    </div>
}

export default ArtistSite;