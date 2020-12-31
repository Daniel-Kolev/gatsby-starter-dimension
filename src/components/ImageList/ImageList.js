import React from 'react'
import Image from '../Image/Image'

export default function ImageList ({ images = [] }) {
    return (
        <>
            <div className='imagelist-container'>
                {images.map((image, key) => <Image key={key} index={key + 1} image={image} enableOverlay />)}
            </div>
            {images.length === 0 && <span>No images to display. Sorry :(</span>}
        </>
    )
}