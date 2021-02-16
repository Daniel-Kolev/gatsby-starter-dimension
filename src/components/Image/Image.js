import React from 'react'
//import Skeleton from 'react-loading-skeleton';

export default function Image ({ image: { media_url = '', permalink = '', caption = '', altText = ''} = {}, size = 'thumbnail', index, enableOverlay = false, height, width}) {
    // to-do: move to adaptor
    const getImageCaption = () => {
        return caption.replace('Продава се!', '').trim()
    }
    const onImageClick = (e) => {
        
    }
    const getImageProperties = () => {
        const imageProperties = {
            src: media_url,
            alt: altText
        }

        if (height) imageProperties.height = height
        if (width) imageProperties.width = width
        return imageProperties
    }


    return (
        <div
            className='image-container' 
            onClick={onImageClick} 
        >
            <img {...getImageProperties()}/>
            {enableOverlay && caption && (
                <div className='image-container-overlay'>
                    {getImageCaption()}
                </div>
            )
        }
        </div>
    )
}