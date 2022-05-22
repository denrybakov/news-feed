import React from 'react';
import styles from './cardtext.css';
import { hoursToWord } from '../../../../utils/react/hoursToWord'

interface ICardTextProps {
  author: string
  title: string
  created: number
}

export function CardText({
  author,
  title,
  created
}: ICardTextProps): JSX.Element {

  created = new Date(created * 1000).getHours()
  const defaultAvatar = 'https://ustanovkaos.ru/wp-content/uploads/2022/02/06-psevdo-pustaya-ava.jpg'

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src={defaultAvatar}
            alt="avatar"
          />
          <a className={styles.username} href="#user-url">{author}sdf</a>
        </div>

        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {created} {hoursToWord(created, ['час', 'часа', 'часов'])} назад</span>
      </div>

      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>{title}</a>
      </h2>
    </div>
  );
}
