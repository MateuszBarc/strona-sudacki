import Header from '../components/Header';
import styles from "../styles/galeria.module.css";
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import LightBox from '@/components/LightBox';

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
                <LightBox />
            </main>
        </div >
    );
};

export default Galeria;