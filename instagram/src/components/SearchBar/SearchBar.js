import React, { Component } from 'react'
import { NavItem, FormGroup, Input } from 'reactstrap'
import './SearchBar.css'

const SearchBar = props => {
   return (   
        <div className="row">
           <nav className="navbar navbar-light bg-light row justify-content-start mein-navbar">
                    <img className="col-1" src="https://github.com/LambdaSchool/React-Insta-Clone/blob/ryan-solution/instagram/src/assets/instacam.png?raw=true" alt="Camera"></img>
                    <img className="col-2 border-left" src="https://github.com/LambdaSchool/React-Insta-Clone/blob/ryan-solution/instagram/src/assets/insta.png?raw=true" alt="Instagram logo"></img>
                        <FormGroup>
                            <Input className="col-3" type="search" name="search" id="SearchBar for instagram" placeholder="Search" className="mein-search-field"/>
                        </FormGroup>  
                    </nav>
                        <i className="far fa-compass mein-icons"></i>
                        <i className="far fa-heart mein-icons"></i>
                        <i className="far fa-user mein-icons"></i>
                        </div>
   )
}
export default SearchBar