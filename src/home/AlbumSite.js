import './album_site_stylesheet.css'
import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import { Parallax } from 'react-parallax';
import AlbumSongList from "./AlbumSongList";


const AlbumSite = (props) =>{
    const[currentAlbum, setCurrentAlbum] = useState('');
    const[albumLoaded, setAlbumLoaded] = useState(false);

    let { id, songId } = useParams();

    console.log(id, songId)

    useEffect(()=>{
        fetch('http://localhost:8080/server_war_exploded/getAlbumServlet?songId='+id, {
            method:'POST',
                credentials:'include'
            }).then((res)=>{
                return res.json()
            }).then(data=>{
                setCurrentAlbum(data)
                console.log(data)
                setAlbumLoaded(true)
            }
        )}, [])


    return  <div id="album-site-container" className="album-site-container">
                {albumLoaded && <Parallax parent={document.getElementById("album-site-container")} style={{height:300}} blur={5} bgClassName="bg-image-album" className="bg-image-album1" bgImage={"/photos/"+currentAlbum[0].albumPhoto} strength={500}>
                                    <div className="in-parallax-album-top">
                                        <img className="in-parallax-album-top-photo" src={"/photos/"+currentAlbum[0].albumPhoto} alt=""/>
                                        <div className="album_name">
                                            <h2>{currentAlbum[0].albumName}</h2>
                                            {currentAlbum[0].mainAuthors.map(author=>(
                                                <p key={author.authorId}>{author.pseudonym}, </p>
                                            ))}
                                        </div>
                                    </div>
                                </Parallax>
                }
                {albumLoaded && <AlbumSongList currentAlbum={currentAlbum} setMusic={props.setMusic} music={props.music} songId={songId} isFromAlbum={true}/>}
            </div>
}

export default AlbumSite;