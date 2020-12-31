import React from 'react'
//import Skeleton from 'react-loading-skeleton';

export default function Image ({ image: { media_url = '', permalink = '', caption = ''} = {}, size = 'thumbnail', index, enableOverlay = false}) {
    // to-do: move to adaptor
    const getImageCaption = () => {
        return caption.replace('Продава се!', '').trim()
    }
    const onImageClick = (e) => {
        
    }
    return (
        <div
            className='image-container' 
            onClick={onImageClick} 
        >
            <img src={media_url} alt={`Картина ${index}`}/>
            {enableOverlay && caption && (
                <div className='image-container-overlay'>
                    {getImageCaption()}
                </div>
            )
        }
        </div>
    )
}