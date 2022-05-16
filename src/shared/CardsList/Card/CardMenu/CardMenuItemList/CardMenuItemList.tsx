import React from 'react';
import { Icon, EIcons } from '../../../../Icon';
import { BlockIcon, WarningIcon } from '../../../../icons';
import { Text, EColors } from '../../../../Text';
import styles from './cardmenuitemlist.css';
// import {Ic}

interface IMenuItemListProps {
  postId: string
}

export function CardMenuItemList({
  postId
}: IMenuItemListProps) {


  return (
    <ul className={styles.menuItemsList}>

      <li
        className={styles.d_menuItem}
      >
        <Icon name={EIcons.comment} size={16} />
        <Text mobileSize={12} size={14} color={EColors.gray99}>
          Комментарии
        </Text>
      </li>
      <div className={styles.d_divider}></div>

      <li
        className={styles.d_menuItem}
      >
        <Icon name={EIcons.shared} />
        <Text mobileSize={12} size={14} color={EColors.gray99}>
          Поделиться
        </Text>
      </li>
      <div className={styles.d_divider}></div>

      <li
        className={styles.menuItem}
        onClick={() => console.log(postId)}
      >
        <Icon name={EIcons.block} size={16} />
        <Text mobileSize={12} size={14} color={EColors.gray99}>
          Скрыть
        </Text>
      </li>
      <div className={styles.divider}></div>

      <li
        className={styles.d_menuItem}
        onClick={() => console.log(postId)}
      >
        <Icon name={EIcons.save} size={16} />
        <Text mobileSize={12} size={14} color={EColors.gray99}>
          Сохранить
        </Text>
      </li>
      <div className={styles.d_divider}></div>

      <li className={styles.menuItem}>
        <Icon name={EIcons.warning} size={16} />
        <Text mobileSize={12} size={14} color={EColors.gray99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  )
}
