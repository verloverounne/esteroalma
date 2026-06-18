import React, { useEffect } from 'react';
import { useModalStore } from '../store/modalStore';
import styles from './TourModal.module.css';

export default function TourModal(): JSX.Element | null {
  const { isOpen, closeModal } = useModalStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeModal}>×</button>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!4v1717614068565!6m8!1m7!1sCAoSLEFGMVFpcE03Vnd6YkhuX1BfUGpBUnZfTjU0b0NnOTIydml2d3J2Z29Yd0JS!2m2!1d-27.9174152!2d-57.2917711!3f324.7820464878479!4f10!5f0.7820865974627469" 
          title="Tour Virtual"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
