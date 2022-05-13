import React from 'react';
import styles from './cardpreview.css';

export function CardPreview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/users/1763872/screenshots/18171777/media/a636581ee85a9d5fa7e63d35f93dc0b3.jpg?compress=1&resize=1200x900&vertical=top"
        alt="preview"
      />
    </div>
  );
}
