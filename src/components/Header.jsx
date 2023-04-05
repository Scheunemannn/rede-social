import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

const Header = (props) => {
  return (
    <div>
        <header className={styles.header}>
            <img src={igniteLogo} alt='logotipo do ignite'/>
            <strong>{props.title}</strong>
        </header>
    </div>
  )
}

export default Header