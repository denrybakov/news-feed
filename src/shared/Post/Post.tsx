import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useOutsideModal } from '../../hooks/useOutsideModal';
import { replyComment } from '../../redux/comment/commentAction';
import { CommentForm } from '../CommentForm';
import { CommentsPost } from '../CommentsPost';

import styles from './post.css';

interface IPostProps {
  id: string
  subreddit: string
  onClose: () => void
}

export function Post({ id, subreddit, onClose }: IPostProps) {
  const [comments, setComments] = useState([])
  // const [authorPost, setAuthorPost] = useState({})
  const [loading, setLoading] = useState(true)
  const { ref } = useOutsideModal(onClose)
  const dispatch = useDispatch()
  const refAria = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    axios(`https://api.reddit.com/r/${subreddit}/comments/${id}`)
      .then(res => res.data.map((item: any) => item.data.children))
      .then((res) => {
        // setAuthorPost(prev => ({ ...prev, ...res[0].map((item: any) => item.data)[0] }))
        setComments(res[1].slice(0, 5).map((item: any) => item.data))
      })
      .catch(console.log)
    setLoading(false)
    return () => {
      dispatch(replyComment(''))
    }
  }, [])

  const answerHandler = (name: string): void => {
    refAria.current?.focus()
    dispatch(replyComment(name + ', '))
  }

  const node = document.querySelector('#modal_root')
  if (!node) return null

  return createPortal((
    <div className={styles.modal} ref={ref}>
      <h2>Следует отметить ...</h2>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit repudiandae maiores tempora voluptas culpa! Repellat unde dolorem, fugit dolore officiis excepturi soluta? Culpa maxime architecto blanditiis nobis fuga excepturi temporibus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, rerum odit, excepturi recusandae, explicabo accusamus assumenda perspiciatis cumque at nostrum placeat illum nihil pariatur quisquam labore ad minima atque vel?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, maxime assumenda sed corporis dignissimos ea quibusdam et suscipit, ut nisi voluptates sapiente tempore delectus facilis aliquam a, cumque iusto ratione?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nisi voluptate nesciunt eveniet quam, temporibus, minima nulla, odio qui dolore est rerum molestiae magni quibusdam maxime optio omnis aliquam. Fugit.</p>
      </div>
      {
        !loading && comments.length > 1
          ? <React.Fragment>
            <CommentForm refAria={refAria} />
            {
              comments.map((item: any) =>
                <CommentsPost
                  key={item.id}
                  id={item.id}
                  authorPost={item.author}
                  created={item.created}
                  answerHandler={answerHandler}
                />)
            }</React.Fragment>
          : <div style={{ textAlign: 'center', marginTop: '50px' }}>Здесь пока ничего нет</div>
      }
    </div>),
    node
  )
}
