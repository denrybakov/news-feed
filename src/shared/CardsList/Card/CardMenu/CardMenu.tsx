import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../icons';
import { CardMenuItemList } from './CardMenuItemList';
import styles from './cardmenu.css';
import { EColors, Text } from '../../../Text';

export function CardMenu() {

  const button = (
    <button className={styles.menuButton}>
      <MenuIcon />
    </button>
  )


  return (
    <div className={styles.menu}  >
      <Dropdown button={button} isOpen>
        <div className={styles.dropdown}>
          <CardMenuItemList postId='sdffs' />
          <button className={styles.closeButton}>
            <Text mobileSize={12} size={14} color={EColors.gray66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
