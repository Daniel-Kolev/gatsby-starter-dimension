import React from 'react'
import Image from '../Image/Image'

export default function ImageList ({ images = [], imageSize = '' }) {
    return (
        <>
            <div className='imagelist-container'>
                {images.map((image, key) => <Image key={key} index={key + 1} image={image} enableOverlay height={imageSize} width={imageSize} />)}
            </div>
            {images.length === 0 && <span>No images to display. Sorry :(</span>}
        </>
    )
}