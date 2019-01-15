import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';
import CommentSection from '../CommentSection/CommentSection.js'
import './PostContainer.css'


const PostContainer = props => {
       return (
           <div>    
                <Card> 
                        <CardTitle key={"friend.text"} className="font-weight-bold"><img className="img-fluid main-image mr-4 rounded-circle my-3" src={props.friends.thumbnailUrl} alt="User"></img> {props.friends.username}</CardTitle>             
                        <CardImg className="img-fluid mw-100 main-image" src={props.friends.imageUrl} alt="Main"/>
                        <CardTitle className="row">
                        <i className="far fa-heart ml-4 col-1"></i><i className="far fa-comment col"></i>
                        </CardTitle>
                        <CardText className="ml-5 font-weight-bold mein-text">{props.friends.likes}</CardText>
                    <CommentSection comments={props.friends.comments} />
                </Card>
                </div>        
       )
    }

export default PostContainer;