import React from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export function CardsList() {
  return (
    <div
      className={styles.cardsList}
    >
      <Card />
    </div>
  )
}
