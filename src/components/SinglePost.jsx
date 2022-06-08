import React from "react";

const SinglePost = props => {

    return (
        <div className="card mt-3">
            <div className="card-header">
                <img src={props.avatar} className="img-fluid rounded-circle little" alt="..." />
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{props.post}</p>
                    <footer className="blockquote-footer"><cite title="Source Title">{props.name}</cite></footer>
                </blockquote>
            </div>
        </div>
    )

}

export default SinglePost 