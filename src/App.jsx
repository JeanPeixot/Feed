import {Post} from './Post';

import './styles.css';

 export function App() {
  return (
    <div>
    <Post 
        author="Jean Peixoto" 
        content= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus repellat harum unde sapiente sed atque saepe, possimus, dicta nisi fugit tempore magni quaerat maiores fugiat. Debitis corporis dolorum quae perspiciatis."   
     />
    <Post
        author="Romero Brito"
        content="Um novo comentário"
    />

    </div>
  )
}

