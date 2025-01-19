import React from 'react'
import "./Loading.css"

const Loading = ({ count }) => {
    return (
        <div className="loading container">
            {
                Array(count).fill().map((_, inx) => (
                    <div key={inx} className="loading__image to-left">
                        <div className="loading__title to-leftt"></div>
                    </div>
                ))
            }
        </div>
    )
}

export default Loading