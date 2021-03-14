import './home_style.css';
import React, {useEffect, useRef, useState} from "react";
import {Route, Switch} from 'react-router-dom'
import Left_pane from "./Left_pane";
import Main_pane from "./Main_pane";
import {gsap} from 'gsap'
import Not_found_404 from "../not_found/Not_found_404";
import {useHistory} from "react-router";
import User_pane from "./User_pane";
import Browse from "./Browse";
import Bottom_music_player from "./Bottom_music_player";
import Right_pane from "./Right_pane";
import HomeStartPage from "./HomeStartPage";
import SearchSite from "./SearchSite";
import SearchPane from "../navbar/SearchPane";
import AlbumSite from "./AlbumSite";
import ArtistSite from "./ArtistSite";
import PlaylistSite from "./PlaylistSite";


const Home = ({audioEl, logged, music, setMusic, searchValue, setSearchValue}) =>{

    let history = useHistory()
    const[windowHeightMain, setWindowHeightMain] = useState()
    const [pageLoad, setPageLoad] = useState('false')


    useEffect(()=>{
        gsap.to('.Home-container', {opacity:1, duration:0})
        gsap.from('.bottom-pane-container', {top:"110%", duration:1.5})
        gsap.to('.bottom-pane-container', {opacity:1, duration:0})

        if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
            console.info( "This page is reloaded" );
            setMusicFromFetch(sessionStorage.getItem('active_music'))
            audioEl.current.currentTime = sessionStorage.getItem('music_time')
            yourFunction();
        } else {

            let songTime = 1

            console.info( "This page is not reloaded");

            fetch('http://localhost:8080/server_war_exploded/getLastUserListen', {
                method:'POST',
                credentials:'include'
            }).then((res)=>{
                return res.json()
            }).then(data=>{
                songTime=data.songTime
                setMusicFromFetch(data.songId)
                console.log(data)
                audioEl.current.currentTime = songTime
            })

            yourFunction();

            fetch('http://localhost:8080/server_war_exploded/getUserId', {
                method:'POST',
                credentials:'include'
            }).then((res)=>{
                return res.json()
            }).then(data=>{
                sessionStorage.setItem("userId", data)
            })
        }
    }, [])

    function setMainPaneHeight(){
        setWindowHeightMain(window.screen.height - 252)
        document.getElementById('Home-container').style.height = windowHeightMain+'px'
    }

    useEffect(()=>{
        setMainPaneHeight()
        setPageLoad('false')
    }, [{pageLoad}])



    //Music player

    const [isPlaying, setIsPlaying] = useState(false)
    const progressMusicBar = useRef(null)
    const [duration, setDuration] = useState(0)
    const [infiniteSong, setInfiniteSong] = useState(false)
    const [randomSongs, setRandomSongs] = useState(false)
    const [endSong, setEndSong] = useState(false)

    useEffect(()=>{
        if(isPlaying){
            test123()
            audioEl.current.play()
        }else{
            audioEl.current.pause()
        }
    })

    function yourFunction(){
        sessionStorage.setItem('music_time', audioEl.current.currentTime)
        setTimeout(yourFunction, 1000);
    }

    function test123(){
        audioEl.current.addEventListener('timeupdate', function (){
             if(!isNaN(parseFloat((audioEl.current.currentTime/duration)*100).toFixed(2))){
                progressMusicBar.current.value=(parseFloat((audioEl.current.currentTime/duration)*100).toFixed(2))
                setDuration(audioEl.current.duration)
             }
        })
    }

    const nextSong=(isNext, isRandom)=>{
        fetch('http://localhost:8080/server_war_exploded/nextSongServlet?next='+isNext+'&songId='+music.songIndexInAlbum+'&albumId='+music.songAlbumId+'&isRandom='+isRandom, {
            credentials:'include'
        })
            .then((res)=>{
            return res.json()
        })
            .then(data=>{
            setMusicFromFetch(data.songId)
        })
    }

    function setMusicFromFetch(songId){
        fetch('http://localhost:8080/server_war_exploded/getSong?songId='+songId, {
            credentials:'include'
        })
            .then((res)=>{
                return res.json()
            }).then((data)=>{
            console.log(data)
            sessionStorage.setItem('active_music', data.songId)
            setMusic({
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




    return (
        <div >
            <div id='Home-container' className="Home-container" onClick={()=>setPageLoad('true')}>
                <Left_pane music={music}/>
                <Switch>
                    <Route exact path='/home/start'>
                        <HomeStartPage/>
                    </Route>
                    <Route exact path='/home/'>
                        <Main_pane setPageLoad={setPageLoad}/>
                    </Route>
                    <Route exact path="/home/browse">
                        <Browse/>
                    </Route>
                    <Route exact path='/home/user'>
                        <User_pane />
                    </Route>
                    <Route path='/home/album/:id/:songId'>
                        <AlbumSite setMusic={setMusic} music={music}/>
                    </Route>
                    <Route path='/home/album/:id'>
                        <AlbumSite setMusic={setMusic} music={music}/>
                    </Route>
                    <Route path='/home/artist/:id'>
                        <ArtistSite setMusic={setMusic} music={music}/>
                    </Route>
                    <Route path='/home/playlist/:id'>
                        <PlaylistSite setMusic={setMusic} music={music}/>
                    </Route>
                    <Route path="/home/search/">
                        <SearchSite searchValue={searchValue} setSearchValue={setSearchValue} setMusicFromFetch={setMusicFromFetch}/>
                    </Route>
                    <Route exact path="*">
                        <Not_found_404/>
                    </Route>
                </Switch>
                <Right_pane/>
            </div>
            <Bottom_music_player
                music={music}
                audioEl={audioEl}
                test123={test123}
                progressMusicBar={progressMusicBar}
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
                nextSong={nextSong}
                setDuration={setDuration}
                randomSongs={randomSongs}
                setRandomSongs={setRandomSongs}
                infiniteSong={infiniteSong}
                setInfiniteSong={setInfiniteSong}
                setEndSong = {setEndSong}
                endSong = {endSong}
            />
        </div>

    )
}

export default Home;