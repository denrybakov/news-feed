import React, { useState } from 'react';
import styles from './cardtext.css';
import { hoursToWord } from '../../../../utils/react/hoursToWord'
import { Post } from '../../../Post';

interface ICardTextProps {
  id: string
  author: string
  title: string
  created: number
}

export function CardText({
  id,
  author,
  title,
  created
}: ICardTextProps): JSX.Element {
  const [isModal, setIsModal] = useState(false)
  const defaultAvatar = 'https://ustanovkaos.ru/wp-content/uploads/2022/02/06-psevdo-pustaya-ava.jpg'

  created = new Date(created * 1000).getHours()

  const onClickTitle = (id: string): void => {
    // console.log('titleClick', id)
    setIsModal(true)
  }

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

      <h2 className={styles.title} onClick={() => onClickTitle(id)}>
        <a href="#post-url" className={styles.postLink}>{title}</a>
        {
          isModal && (
            <Post id={id} onClose={() => setIsModal(false)} />
          )
        }
      </h2>
    </div>
  );
}
