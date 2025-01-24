import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author , publishedAt}){

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="24 de Janeiro às 11:05h" dateTime="2025-01-24 11:05:30">
                    Publicado há 1h
                    </time>
            </header>

            <div className={styles.content}>
           
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder="Deixe um cometário"
                />
                <footer>
                     <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}