import './user_libraries_component_style.css'
import React from 'react'

const UserLibrariesComponent = (props) =>{
    return props.useLibraries.map(item=>(
            <li className='user-libraries-list-element' key={item.id}>
                {item.name}
            </li>
        )
    )
}

export default UserLibrariesComponent