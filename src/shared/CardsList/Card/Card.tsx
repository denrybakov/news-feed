import React from 'react';
import styles from './card.css';
import { CardControl } from './CardControl';
import { CardMenu } from './CardMenu';
import { CardPreview } from './CardPreview';
import { CardText } from './CardText';

export interface ICardProps {
  id: string
  author: string
  title: string
  created: number
  thumbnail: string
  score: number
}

export function Card({
  id,
  author,
  title,
  created,
  thumbnail,
  score
}: ICardProps) {

  return (
    <li className={styles.card} data-id={id}>
      <CardText author={author} title={title} created={created} />
      <CardPreview thumbnail={thumbnail} />
      <CardMenu />
      <CardControl score={score} />
    </li>
  )
}
