import Header from '../components/Header';
import styles from "../styles/galeria.module.css";
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const Galeria = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = [
        '/galeria1.jpeg',
        '/galeria2.jpeg',
        '/galeria3.JPG',
        '/galeria4.JPG',
        '/galeria5.JPG',
        '/galeria6.JPG',
    ];

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };


    return (
        <div>
            <Header />
            <main>
                <h1 className={styles.naglowek}>Galeria</h1>
                <div className={styles.gallery}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Obraz ${index + 1}`}
                            className={styles.galleryImage}
                            onClick={() => openLightbox(index)}
                        />
                    ))}
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                    />
                )}
            </main>
        </div >
    );
};

export default Galeria;