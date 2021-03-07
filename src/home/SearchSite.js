import './search_site_style.css'
import React, {useEffect, useState} from "react";
import SearchItemLists from "./SearchItemLists";
import SearchItemListArtitst from "./SearchItemListArtitst";

const SearchSite = (props) =>{

    const[searchSongs, setSearchSongs] = useState([
    ])
    const[searchArtists, setSearchArtists] = useState([])
    const[searchPlaylists, setSearchPlaylists] = useState([])
    const[searchAlbums, setSearchAlbums] = useState([])

    useEffect(()=>{
        if(sessionStorage.getItem("search").length>0){
            fetch('http://localhost:8080/server_war_exploded/handleSearch?songId='+sessionStorage.getItem("search"), {
                credentials:'include'
            }).then((res)=>{
                return res.json()
            }).then(data=>{
                console.log(data)
                setSearchSongs(data.songs)
                setSearchAlbums(data.albumList)
                setSearchArtists(data.authors)
                setSearchPlaylists(data.emptyLibraries)
            })
        }
    }, [props.searchValue], [])

    function TestFunction(){
        console.log("Songs")
        console.log(searchSongs)
        console.log("Albums")
        console.log(searchAlbums)
        console.log("Playlist")
        console.log(searchPlaylists)
        console.log("Artists")
        console.log(searchArtists)
    }

    return  <div className="search-container">
                <div className="header-text">
                    <h2>Top results for "{sessionStorage.getItem("search")}"</h2>
                </div>
                <div className="search-panels">
                    <div className="search_songs">
                        <div className="search_title_view_more">
                            <p>Songs</p>
                            <p>Check more</p>
                        </div>
                        <div className="search_items">
                            <SearchItemLists actualList={searchSongs} setMusicFromFetch={props.setMusicFromFetch}/>
                        </div>
                    </div>
                    <div className="search_songs">
                        <div className="search_title_view_more">
                            <p>Artists</p>
                            <p>Check more</p>
                        </div>
                        <div className="search_items">
                            <SearchItemListArtitst actualList={searchArtists} setMusicFromFetch={props.setMusicFromFetch}/>
                        </div>
                    </div>
                </div>
        <button onClick={()=>console.log(searchArtists)}>Test</button>
            </div>
}

export default SearchSite