import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/147006726?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jean Peixoto</strong>
                            <time title="24 de Janeiro às 11:05h" dateTime="2025-01-24 11:05:30">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>

                    </header>
                    <p>Muito bom Devon, parabéns!!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
        
                    </button>
                </footer>
            </div>

        </div>
    )
}