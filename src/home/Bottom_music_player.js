import './bottom_music_player_style.css'
import React, {useEffect, useRef, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from "@fortawesome/free-regular-svg-icons/faHeart";
import {
    faBackward,
    faForward, faInfinity,
    faPause,
    faPlay,
    faRandom,
    faStepBackward,
    faStepForward
} from "@fortawesome/free-solid-svg-icons";
import {gsap} from "gsap";

const Bottom_music_player = (props) =>{

    function onClickHandle(isNext){
        if(document.getElementById('bottom-play-infinite').style.color !== 'white'){
            props.audioEl.current.currentTime = 0
            props.audioEl.current.play()
        }
        else if(document.getElementById('bottom-play-random').style.color==='white'){
            props.nextSong(isNext, 'false')
        }
        else{
            props.nextSong(isNext, 'true')
        }
    }
    function onClickHandle2(){
        props.setDuration(document.getElementById('music_audio').duration)
        props.setIsPlaying(!props.isPlaying)
    }

    useEffect(()=>{
        if(props.audioEl.current.duration!=null){
            let durationTimeInSeconds = Math.round(props.audioEl.current.duration)
            let minutes = Math.floor(durationTimeInSeconds/60)
            let seconds = Math.round(durationTimeInSeconds-minutes*60)

            if(!isNaN(seconds)){
                if(seconds<10){
                    seconds = '0'+seconds
                }
                document.getElementById('track-time-duration').innerText=`${minutes}:${seconds}`
            }
        }

    },[props.audioEl.current.duration])


    function setMusicTimeBottomPane(){
        if(props.audioEl.current.duration!=null){
            let durationTimeInSeconds = Math.round(props.audioEl.current.currentTime)
            let minutes = Math.floor(durationTimeInSeconds/60)
            let seconds = Math.round(durationTimeInSeconds-minutes*60)

            if(!isNaN(seconds)){
                if(seconds<10){
                    seconds = '0'+seconds
                }
                document.getElementById('track-time-expired').innerText=`${minutes}:${seconds}`
                if((props.progressMusicBar.current.value)===100){
                    document.getElementById('bottom-play-forward').click()
                }
                setTimeout(setMusicTimeBottomPane, 1000);
            }
        }
    }

    //
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         console.log(document.getElementById('bottom-play-infinite').style.color)
    //         if((props.progressMusicBar.current.value)===100){
    //             if(document.getElementById('bottom-play-infinite').style.color !== 'white'){
    //                 props.audioEl.current.currentTime = 0
    //                 props.audioEl.current.play()
    //             }else{
    //             }
    //         }
    //     }, 1000)
    //     return()=>clearInterval(interval)
    // }, [])



    useEffect(()=>{
    }, [props.infiniteSong])

    useEffect(()=>{
        setMusicTimeBottomPane()
    }, [])

    useEffect(()=>{
        let howManyArtist = props.music.songAuthor.length
        document.getElementById('bottom-pane-left-artist').innerHTML = ""
        console.log(props.music.songAuthor)
        for(let i=0;i<howManyArtist;i++){
            if(i===howManyArtist-1){
                document.getElementById('bottom-pane-left-artist').innerHTML += "<p class='song_bottom_artist'>"+props.music.songAuthor[i].pseudonym+"</p>"
            }else{
                document.getElementById('bottom-pane-left-artist').innerHTML += "<p class='song_bottom_artist'>"+props.music.songAuthor[i].pseudonym+", </p>"
            }
        }
    }, [props.music])


    useEffect(()=>{
        let scrollPos = document.getElementById('load_position');
        scrollPos.addEventListener('click', function (e) {
            let bounds = this.getBoundingClientRect();
            let max = bounds.width
            let pos = e.pageX - bounds.left;
            let dual = Math.round(pos / max * 100);

            props.audioEl.current.currentTime = (dual*props.audioEl.current.duration)/100

            console.log((dual*props.audioEl.current.duration)/100);
        })
    }, [])

    return  <div className="bottom-pane-container" id="bottom-pane-left">
                <audio id='music_audio' src={props.music.songSource} ref={props.audioEl} ></audio>
                <div className="bottom-pane-left" >
                    <div className='bottom-pane-left-title-div'><p className='bottom-pane-left-title'>{props.music.songTitle}</p><FontAwesomeIcon icon={faHeart} className='song-heart'/></div>
                    <div id='bottom-pane-left-artist' className='bottom-pane-left-artist'>
                    </div>
                </div>
                <div className="bottom-pane-center">
                    <div className="bottom-icon-container">
                        <button id='bottom-play-infinite' style={{color : props.infiniteSong ? "#6c63ff" : "white"}} onClick={()=>props.setInfiniteSong(!props.infiniteSong)} className="bottom-play-backward">
                            <FontAwesomeIcon icon={faInfinity} />
                        </button>
                        <button className="bottom-play-backward" onClick={()=>onClickHandle('previous')}>
                            <FontAwesomeIcon icon={faBackward} />
                        </button>
                        <button className="bottom-play-music" onClick={()=>onClickHandle2()}>
                            <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
                        </button>
                        <button id='bottom-play-forward' className="bottom-play-forward" onClick={()=>onClickHandle('next')}>
                            <FontAwesomeIcon icon={faForward} />
                        </button>
                        <button id='bottom-play-random' style={{color : props.randomSongs ? "#6c63ff" : "white"}} onClick={()=>props.setRandomSongs(!props.randomSongs)} className="bottom-play-forward">
                            <FontAwesomeIcon icon={faRandom} />
                        </button>
                    </div>
                    <div className="bottom-track_position-center">
                        <p id='track-time-expired' className='track-timers'>2:22</p> <progress  id="load_position" ref={props.progressMusicBar} value="0" max="100"/> <p id='track-time-duration' className='track-timers'>3:16</p>
                    </div>
                </div>
                <div className="bottom-pane-right">
                    <p className='follow_congratulate_bottom'>Follow the artist</p><p className='follow_congratulate_bottom'>Congratulate the artist</p>
                </div>
            </div>
}

export default Bottom_music_player;