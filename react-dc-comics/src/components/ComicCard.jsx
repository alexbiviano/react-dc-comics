import React from 'react'

const ComicCard = (props) => {
    return (
        <div className="comic-card">
            <img src={props.src} alt="" />
            <h4>{props.title}</h4>
        </div>
    )
}

export default ComicCard