import { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../redux/comment/commentAction';
import { TRootState } from '../../redux/initState';
import { preventDefault } from '../../utils/react/preventDefault';

import styles from './commentform.css';
interface ICommentFormProps {
  refAria: any
}

export function CommentForm({ refAria }: ICommentFormProps) {
  const value = useSelector<TRootState, string>(state => state.commentText)
  const dispatch = useDispatch()

  const onHandleSubmit = (e: FormEvent): void => {
    // console.log(value)
  }

  const changeTextAria = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    dispatch(updateComment(e.target.value))
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
