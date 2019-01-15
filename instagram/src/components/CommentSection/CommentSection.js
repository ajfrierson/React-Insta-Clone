import React, { Component } from "react";
import { Card, CardBody, CardText } from 'reactstrap';

class CommentSection extends Component {
    constructor(props) {
    super();
    this.state = {
        comments: props.comments
    }
    }
    render() {
        return (
        <div >
            {this.state.comments.map(comments => {
                return (
                        <div className="blockquote">
                            <span className="font-weight-bold mein-text mb-0 pl-5" key={comments.text}> 
                                {comments.username}</span><span className="mein-text pl-5">{comments.text}</span>
                        </div>
                          
                    )})}
            <div className="input-group input-group-lg my-5">
             <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Add a comment..."></input>            
             <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">...</span>
            </div>
        </div>
        </div>
        )
        
    }
}

export default CommentSection;