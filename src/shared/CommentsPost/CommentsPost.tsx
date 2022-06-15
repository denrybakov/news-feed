import { hoursToWord } from '../../utils/react/hoursToWord';
import { CardControl } from '../CardsList/Card/CardControl';
import { EIcons, Icon } from '../Icon';
import { EColors, Text } from '../Text';

import styles from './commentspost.css';

interface ICommentsPostProps {
  id: string
  authorPost: string
  created: number
  answerHandler: (key: string) => void
}

export function CommentsPost({
  id,
  authorPost,
  created,
  answerHandler
}: ICommentsPostProps) {

  const defaultAvatar = 'https://ustanovkaos.ru/wp-content/uploads/2022/02/06-psevdo-pustaya-ava.jpg'
  let time = new Date(created * 1000).getHours()

  return (
    <div className={styles.comment} data-id={id}>
      <div className={styles.commentControl}>
        <CardControl />
      </div>

      <div className={styles.commentHead}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src={defaultAvatar}
            alt="avatar"
          />
          <a className={styles.username} href="#user-url">{authorPost}</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {time} {hoursToWord(time, ['час', 'часа', 'часов'])} назад
        </span>
      </div>

      <div className={styles.commentText}>
        Text comment... slfkjsdlkfsdkfnsdkjfnsdkjfnskdjfnksjn
      </div>

      <div className={styles.commentBtns}>
        <button className={styles.btn2} onClick={() => answerHandler(authorPost)}>
          <Icon name={EIcons.comment} size={16} />
          <Text size={14} color={EColors.gray99} mobileSize={12}>
            Ответить
          </Text>
        </button>
        <button className={styles.btn2}>
          <Icon name={EIcons.shared} size={16} />
          <Text size={14} color={EColors.gray99} mobileSize={12}>
            Поделиться
          </Text>
        </button>
        <button className={styles.btn2}>
          <Icon name={EIcons.warning} size={16} />
          <Text size={14} color={EColors.gray99} mobileSize={12}>
            Пожаловаться
          </Text>
        </button>
      </div>

      <div></div>
    </div>
  );
}
