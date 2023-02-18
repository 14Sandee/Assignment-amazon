import React from 'react'
import './CardGrid.css'

export const CardGrid = ({ cardTitle, image1, image2, image3, image4, title1, title2, title3, title4 }) => {
    return (
        <div className='card-block'>
            <div className='card-header'>
                <h3 className='mb-1'>{cardTitle}</h3>
            </div>
            <div className='image-grid'>
                <ImageBlock image={image1} title={title1} />
                <ImageBlock image={image2} title={title2} />
                <ImageBlock image={image3} title={title3} />
                <ImageBlock image={image4} title={title4} />
            </div>
            <div className='footer-block'>
                <p className=''>See all offers</p>
            </div>
        </div>
    )
}


export const ImageBlock = ({ image, title }) => {
    return (
        <div className='image-block'>
            <div className='image-container'>
                <img src={image} alt='banner-1' />
            </div>
            <p className='image-title'>
                {title}
            </p>
        </div>
    )
}