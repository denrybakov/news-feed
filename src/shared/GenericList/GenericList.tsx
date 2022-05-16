import React from 'react';
import styles from './genericlist.css';

interface IItem {
  id: string,
  text: string,
  className?: string,

  onClick: (id: string) => void
}

interface IGenericListProps {
  list: IItem[]
  As?: 'a' | 'li' | 'button' | 'div'
}


export function GenericList({ list, As = 'div' }: IGenericListProps) {
  return (
    <ul
      className={styles.genericList}
    >
      {list.map(({ id, text, className, onClick }) => (
        <As
          key={id}
          className={className}
          onClick={() => onClick(id)}
        >
          {text}
        </As>
      ))}
    </ul>
  )
}


