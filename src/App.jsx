import Header from "./components/Header";
import Sidebar from './components/Sidebar'
import { Post } from "./components/Post";

// autor? { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://scontent.fnvt9-1.fna.fbcdn.net/v/t1.18169-9/18739783_1322263481183522_6588591587610884196_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=G8C5dj9vknYAX8BbWRp&_nc_ht=scontent.fnvt9-1.fna&oh=00_AfANsACwZKUdRleeQDeM7Pqm_RsUq56COG8qNmuRaMTsKA&oe=645246CC',
      name: 'Eduardo Henrique Francisco',
      role: 'Web Developer'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nesciunt a odio velit excepturi sequi? 🚀'},
        {type: 'link', content: 'https://github.com/Scheunemannn'},
    ],
    publishedAt: new Date('2023-04-02 10:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://scontent.fnvt9-1.fna.fbcdn.net/v/t1.18169-9/18739783_1322263481183522_6588591587610884196_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=G8C5dj9vknYAX8BbWRp&_nc_ht=scontent.fnvt9-1.fna&oh=00_AfANsACwZKUdRleeQDeM7Pqm_RsUq56COG8qNmuRaMTsKA&oe=645246CC',
      name: 'Gabriel Lucindo',
      role: 'Corretor de Imóveis'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragrahp', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nesciunt a odio velit excepturi sequi? 🚀'},
        {type: 'link', content: 'https://github.com/Scheunemannn'},
    ],
    publishedAt: new Date('2023-04-03 10:00:00')
  }
  
]

import './Global.css'
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header
      linkheader=''
      title='Site do Duduco'
      />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post =>{
            return (
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>
    </div>
  );
}

export default App