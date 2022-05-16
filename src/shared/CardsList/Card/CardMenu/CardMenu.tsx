import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../icons';
import { CardMenuItemList } from './CardMenuItemList';
import styles from './cardmenu.css';

export function CardMenu() {

  const button = (
    <button className={styles.menuButton}>
      <MenuIcon />
    </button>
  )


  return (
    <div className={styles.menu}>
      <Dropdown button={button} isOpen>
        <div className={styles.dropdown}>
          <CardMenuItemList postId='werr' />
          <button className={styles.closeButton}>
            Закрыть
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
