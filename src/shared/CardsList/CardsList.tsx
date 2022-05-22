import React, { useContext } from 'react';
import { postsContext } from '../context/postsContext';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import { IPosts } from '../../hooks/usePostData';
import { Break } from '../Break';


export function CardsList() {
  const postData = useContext(postsContext)
  return (
    <ul className={styles.cardsList}>
      {
        postData.length === 0
          ? <h1 className={styles.titleVoid}> &#129300; <Break size={20} top />  Хмм... Здесь пока пусто</h1>
          : postData.map((item: IPosts) => (
            <Card
              key={item.id}
              id={item.id}
              author={item.author}
              title={item.title}
              created={item.created}
              thumbnail={item.thumbnail}
              score={item.score}
            />
          ))
      }
    </ul>
  )
}
