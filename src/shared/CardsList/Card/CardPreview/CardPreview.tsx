import React from 'react';
import styles from './cardpreview.css';

interface ICardPreview {
  thumbnail: string
}

const IMG = 'https://upload.wikimedia.org/wikipedia/commons/d/dc/No_Preview_image_2.png'

export function CardPreview({ thumbnail }: ICardPreview): JSX.Element {
  return (
    <div className={styles.preview}>

      <img
        className={styles.previewImg}
        src={!thumbnail.includes('http') ? IMG : thumbnail}
        alt="preview"
      />

    </div>
  );
}

