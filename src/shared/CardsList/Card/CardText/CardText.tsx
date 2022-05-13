import React from 'react';
import styles from './cardtext.css';

export function CardText(): JSX.Element {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="https://cdn.dribbble.com/userupload/2671176/file/original-2adfa2595e746b75fcd316b3241594ef.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1200x900"
            alt="avatar"
          />
          <a className={styles.username} href="#user-url">Дмитрий Гришин</a>
        </div>

        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          4 часа назад</span>
      </div>

      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>Следует отметить, что новая модель организационной деятельности...</a>
      </h2>
    </div>
  )
}
