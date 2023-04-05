import React from 'react'

import styles from './Sidebar.module.css'

import { PencilLine } from '@phosphor-icons/react'
import Avatar from './Avatar'

const Sidebar = (props) => {
  return (
    <div>
        <aside className={styles.sidebar}>
            <img className={styles.cover}
             src="https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>
            <div className={styles.profile}>
              <Avatar
              src="https://scontent.fnvt9-1.fna.fbcdn.net/v/t1.18169-9/18739783_1322263481183522_6588591587610884196_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=G8C5dj9vknYAX8BbWRp&_nc_ht=scontent.fnvt9-1.fna&oh=00_AfANsACwZKUdRleeQDeM7Pqm_RsUq56COG8qNmuRaMTsKA&oe=645246CC"/>
              <strong>Duduco</strong>
              <span>Malandro em tempo integral</span>
            </div>
            <footer>
              <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
              </a>
            </footer>
        </aside>
    </div>
  )
}

export default Sidebar