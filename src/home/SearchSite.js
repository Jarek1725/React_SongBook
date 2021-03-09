import './search_site_style.css'
import React, {useEffect, useState} from "react";
import SearchItemLists from "./SearchItemLists";
import SearchItemListArtitst from "./SearchItemListArtitst";
import SearchItemListAlbums from "./SearchItemListAlbums";
import SearchItemListPlaylists from "./SearchItemListPlaylists";
import notFoundArtis from '../components/IconsSvg/not_found_artist.svg'
import notFoundSong from '../components/IconsSvg/not_found_song.svg'
import notFoundAlbum from '../components/IconsSvg/not_found_album.svg'
import notFoundPlaylist from '../components/IconsSvg/not_found_playlist.svg'

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
                        {searchSongs.length!==0 && <div className="search_items">
                                                        <SearchItemLists actualList={searchSongs} setMusicFromFetch={props.setMusicFromFetch}/>
                                                    </div>}
                        {searchSongs.length===0 && <div className="search-not-found-container"><img src={notFoundSong} className="search-not-found"  alt=""/> <p>Not found any song</p></div>}
                    </div>
                    <div className="search_songs">
                        <div className="search_title_view_more">
                            <p>Artists</p>
                            <p>Check more</p>
                        </div>
                        {searchArtists.length!==0 && (<div className="search_items">
                                                         <SearchItemListArtitst actualList={searchArtists} setMusicFromFetch={props.setMusicFromFetch}/>
                                                     </div>)
                        }
                        {searchArtists.length===0 && <div className="search-not-found-container"><img src={notFoundArtis} className="search-not-found"  alt=""/> <p>Not found any artist</p></div>}
                    </div>
                </div>
                <div className="search-panels">
                    <div className="search_songs">
                        <div className="search_title_view_more">
                            <p>Albums</p>
                            <p>Check more</p>
                        </div>
                        {searchAlbums.length!==0 && <div className="search_items">
                                                        <SearchItemListAlbums actualList={searchAlbums} setMusicFromFetch={props.setMusicFromFetch}/>
                                                    </div>}
                        {searchAlbums.length===0 && <div className="search-not-found-container"><img src={notFoundAlbum} className="search-not-found"  alt=""/> <p>Not found any artist</p></div>}
                        <div className="search_items">
                            <SearchItemListAlbums actualList={searchAlbums} setMusicFromFetch={props.setMusicFromFetch}/>
                        </div>
                    </div>
                    <div className="search_songs">
                        <div className="search_title_view_more">
                            <p>Playlists</p>
                            <p>Check more</p>
                        </div>
                        {searchPlaylists.length!== 0 && <div className="search_items">
                                                            <SearchItemListPlaylists actualList={searchPlaylists} setMusicFromFetch={props.setMusicFromFetch}/>
                                                        </div>}
                        {searchPlaylists.length=== 0 &&  <div className="search-not-found-container"><img src={notFoundPlaylist} className="search-not-found"  alt=""/> <p>Not found any artist</p></div>}
                    </div>
                </div>
            </div>
}

export default SearchSite