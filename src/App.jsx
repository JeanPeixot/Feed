import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
      <Sidebar />
        <main>
          <Post
            author="Jean Peixoto"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus repellat harum unde sapiente sed atque saepe, possimus, dicta nisi fugit tempore magni quaerat maiores fugiat. Debitis corporis dolorum quae perspiciatis."
          />
          <Post author="Romero Brito" 
          content="Um novo comentário" />
        </main>
      </div>
    </div>
  );
}
