import React, { Component } from 'react'
import { NavItem, FormGroup, Input } from 'reactstrap'
import './SearchBar.css'

const SearchBar = props => {
   return (   
        <div className="row">
           <nav className="navbar navbar-light bg-light row justify-content-start main-navbar">
                    <img className="col-1" src="https://image.freepik.com/free-icon/instagram-logo_318-84939.jpg" alt="Camera"></img>
                    <img className="col-2 border-left" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcBUKxm-jPyGj0Hr0Z1J7kHkjc3WMAwUZ68qPY81ij1rY9v6Gl" alt="Instagram logo"></img>
                        <FormGroup>
                            <Input className="col-3" type="search" name="search" id="SearchBar for instagram" placeholder="Search" className="main-search-field"/>
                        </FormGroup>  
                    </nav>
                        <i className="far fa-compass main-icons"></i>
                        <i className="far fa-heart main-icons"></i>
                        <i className="far fa-user main-icons"></i>
                        </div>
   )
}
export default SearchBar