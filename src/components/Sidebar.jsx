import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                />
            <div className={styles.profile}>
                <img src="https://avatars.githubusercontent.com/u/147006726?v=4"/>

                <strong>Jean Peixoto</strong>
                <span>Analista de Sistemas Jr</span>
            </div>

            <footer>
                <a href="#">
                    Editar o seu perfil
                </a>
            </footer>
        </aside>
    );
}