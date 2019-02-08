import React from 'react'

const Comment = ({authorPic, authorName, date, text }) => {
    return (
        <div className="comment">
            <a className="avatar">
                <img src={authorPic} />
            </a>
            <div className="content">
                <a className="author">{authorName}</a>
                <div className="metadata">
                    <span className="date">{date}</span>
                </div>
                <div className="text">
                    {text}
                </div>
                <div className="actions">
                    <a className="reply">Reply</a>
                </div>
            </div>
        </div>
    )
}

export default Comment