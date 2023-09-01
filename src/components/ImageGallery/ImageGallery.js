import React from 'react';
import { ImageGalleryUl, ImageGalleryItem} from './ImageGallery.styled'
function ImageGallery({ images }) {
    return (
        <ul className={ImageGalleryUl}>
            {images.map(image => (
                <li key={image.id} className={ImageGalleryItem}>
                    <img src={image.webformatURL} alt="" />
                </li>
            ))}
        </ul>
    );
}

export default ImageGallery;
