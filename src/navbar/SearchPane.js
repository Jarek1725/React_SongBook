import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Redirect, useHistory} from "react-router";

const SearchPane = (props) =>{

    let history = useHistory()

    const [searchValue, setSearchValue] = useState('')

    const handleSearch = event =>{
        setSearchValue(event.target.value)
    }

    const handleSearchClick = e =>{
        props.setSearchValue(searchValue)
        sessionStorage.setItem("search", searchValue)
        history.push('/home/search')
    }

    return  <div className="navbar-right">
                <input
                    type="text"
                    className="searchPanel"
                    placeholder="Search..."
                    onChange={handleSearch}
                />
                <FontAwesomeIcon onClick={handleSearchClick} icon="search" />
            </div>

}

export default SearchPane;