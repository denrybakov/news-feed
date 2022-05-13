import React from 'react';
import styles from './card.css';
import { CardControl } from './CardControl';
import { CardMenu } from './CardMenu';
import { CardPreview } from './CardPreview';
import { CardText } from './CardText';

export function Card() {
  return (
    <ul
      className={styles.card}
    >
      <CardText />
      <CardPreview />
      <CardMenu />
      <CardControl />
    </ul>
  )
}
