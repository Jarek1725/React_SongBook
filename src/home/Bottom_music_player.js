import './bottom_music_player_style.css'
import React, {useEffect, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from "@fortawesome/free-regular-svg-icons/faHeart";
import {faBackward, faForward, faPause, faPlay, faStepBackward, faStepForward} from "@fortawesome/free-solid-svg-icons";

const Bottom_music_player = (props) =>{

    function onClickHandle(){
        props.nextSong()
        // props.setDuration(document.getElementById('music_audio').duration)
    }
    function onClickHandle2(){
        // props.handleSetDuration()
        props.setDuration(document.getElementById('music_audio').duration)
        props.setIsPlaying(!props.isPlaying)
    }

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

    return  <div className="bottom-pane-container" >
                <audio id='music_audio' src={props.music} ref={props.audioEl} />
                <div className="bottom-pane-left">
                    <div className='bottom-pane-left-title-div'><p className='bottom-pane-left-title'>Nie mam czasu</p><FontAwesomeIcon icon={faHeart} className='song-heart'/></div>
                    <div className='bottom-pane-left-artist'><p className='song_bottom_artist'>Taco Hemingway, </p><p className='song_bottom_artist'>CatchUp</p></div>
                </div>
                <div className="bottom-pane-center">
                    <div className="bottom-icon-container">
                        <button className="bottom-play-backward">
                            <FontAwesomeIcon icon={faBackward} />
                        </button>
                        <button className="bottom-play-music" onClick={()=>onClickHandle2()}>
                            <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
                        </button>
                        <button className="bottom-play-forward" onClick={()=>onClickHandle()}>
                            <FontAwesomeIcon icon={faForward} />
                        </button>
                    </div>
                    <div className="bottom-track_position-center">
                        <progress id="load_position" ref={props.progressMusicBar} value="0" max="100"/>
                    </div>
                </div>
                <div className="bottom-pane-right">
                    <p className='follow_congratulate_bottom'>Follow the artist</p><p className='follow_congratulate_bottom'>Congratulate the artist</p>
                </div>
            </div>
}

export default Bottom_music_player;