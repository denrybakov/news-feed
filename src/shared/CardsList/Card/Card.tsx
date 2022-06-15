
import styles from './card.css';
import { CardControl } from './CardControl';
import { CardMenu } from './CardMenu';
import { CardPreview } from './CardPreview';
import { CardText } from './CardText';

export interface ICardProps {
  id: string
  author: string
  title: string
  created: number
  thumbnail: string
  score: number
  subreddit: string
}

export function Card({
  id,
  author,
  title,
  created,
  thumbnail,
  score,
  subreddit
}: ICardProps) {

  return (
    <li className={styles.card} data-id={id}>
      <CardText id={id} author={author} title={title} created={created} subreddit={subreddit} />
      <CardPreview thumbnail={thumbnail} />
      <CardMenu />
      <CardControl score={score} />
    </li>
  )
}
