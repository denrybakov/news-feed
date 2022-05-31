import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { preventDefault } from '../../utils/react/preventDefault';
import { commentContext } from '../context/commentContext';
import styles from './commentform.css';

interface ICommentFormProps {
  refAria: any
}

export function CommentForm({ refAria }: ICommentFormProps) {
  const { value, onChange } = useContext(commentContext)

  const onHandleSubmit = (e: FormEvent): void => {
    console.log(value)
  }

  const changeTextAria = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    onChange(e.target.value)
  }

  return (
    <form
      action=""
      className={styles.form}
      onSubmit={preventDefault(onHandleSubmit)}
    >
      <textarea
        className={styles.input}
        ref={refAria}
        value={value}
        onChange={changeTextAria}
        placeholder={'Оставьте Ваш комментарии'}
        cols={30}
        rows={10}
      />
      <button
        type={'submit'}
        className={styles.button}
      >
        Комментировать
      </button>
    </form>
  )
}
