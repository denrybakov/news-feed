import React from 'react';
import styles from './genericlist.css';

interface IItem {
  id: string,
  text: string,
  className?: string,
  As?: 'a' | 'li' | 'button' | 'div'
  onClick: (id: string) => void
}

interface IGenericListProps {
  list: IItem[]
}


export function GenericList({ list }: IGenericListProps) {
  return (
    <ul
      className={styles.genericList}
    >
      {list.map(({ As = 'div', id, text, className, onClick }) => (
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


