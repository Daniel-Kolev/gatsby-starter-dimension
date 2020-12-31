import React from 'react'
export default ({ icon = 'paint-brush', onClick}) => {
    const clickable = !!onClick
    return (
        <div className={`logo ${clickable ? 'clickable' : ''}`} onClick={onClick}>
            <span className={`icon fa-${icon}`}></span>
        </div>
    )
}