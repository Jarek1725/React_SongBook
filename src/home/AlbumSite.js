import React from "react";
import {useParams} from "react-router";

const AlbumSite = (props) =>{
    let { id } = useParams();

    console.log(id)

    return <div>{id}</div>
}

export default AlbumSite;