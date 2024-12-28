import React, { useState } from 'react';
import styles from  '../styles/components/Carousel.module.css'

export default function Carousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!images.length) return null;

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.arrowButton} onClick={prevSlide}>
        ‹
      </button>
      
      {/* Відображаємо поточне зображення */}
      <div className={styles.imageWrapper}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      
      <button className={styles.arrowButton} onClick={nextSlide}>
        ›
      </button>
    </div>
  );
}
