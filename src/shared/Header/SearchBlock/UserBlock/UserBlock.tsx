import styles from './userblock.css';

import { Break } from '../../../Break';
import { AnonIcon } from '../../../icons/AnonIcon';
import { Text, EColors } from '../../../Text';


interface IUserBlockProps {
  avatarSrc?: string
  username?: string
  loading?: boolean
}

const API = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`

export function UserBlock({
  avatarSrc,
  username,
  loading
}: IUserBlockProps) {
  return (
    <a
      className={styles.userBox}
      href={API}
    >
      <div className={styles.avatarBox}>
        {
          avatarSrc
            ? <img className={styles.avatarImg} src={avatarSrc} alt="" />
            : <AnonIcon />
        }
      </div>

      <div className={styles.username}>
        <Break size={12} />
        {
          loading ? (
            <Text size={20} color={EColors.gray99}>{username || 'Загрузка...'}</Text>
          ) : (
            <Text size={20} color={EColors.black}>{username || 'Аноним'}</Text>
          )
        }
      </div>
    </a>
  );
}
