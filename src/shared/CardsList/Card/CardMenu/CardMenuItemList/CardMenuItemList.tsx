import React from 'react';
import { BlockIcon, WarningIcon } from '../../../../icons';
import styles from './cardmenuitemlist.css';

interface IMenuItemListProps {
  postId: string
}

export function CardMenuItemList({
  postId
}: IMenuItemListProps) {


  return (
    <ul className={styles.menuItemsList}>
      <li
        className={styles.menuItem}
        onClick={() => console.log(postId)}
      >
        <BlockIcon />
        <span>Скрыть</span>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem}>
        <WarningIcon />
        <span>Пожаловаться</span>
      </li>
    </ul>
  )
}
