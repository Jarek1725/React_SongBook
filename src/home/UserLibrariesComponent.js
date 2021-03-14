import './user_libraries_component_style.css'
import React from 'react'
import {Link} from "react-router-dom";

const UserLibrariesComponent = (props) =>{
    return props.useLibraries.map(item=>(
            <li className='user-libraries-list-element' key={item.id}>
                <Link to={'/home/playlist/'+item.id}>{item.name}</Link>
            </li>
        )
    )
}

export default UserLibrariesComponent