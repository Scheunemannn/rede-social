import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import Avatar from './Avatar'

export const Comment = ({ content, onDeleteComment }) => {

    function handleDeleteComment () {
        onDeleteComment(content)   
    }

  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false}
        src="https://scontent.fnvt9-1.fna.fbcdn.net/v/t1.18169-9/18739783_1322263481183522_6588591587610884196_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=G8C5dj9vknYAX8BbWRp&_nc_ht=scontent.fnvt9-1.fna&oh=00_AfANsACwZKUdRleeQDeM7Pqm_RsUq56COG8qNmuRaMTsKA&oe=645246CC"
        />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Duduco</strong>
                        <time title='03 de Abril às 10:05' dateTime='2023-04-11 10:05'>Publicado há 1h</time>
                    </div>
                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24}/>
                    </button>
                </header>
                <p>{content}</p>

            </div>

            <footer>
                <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                </button>
            </footer>

        </div>
    </div>
  )
}
