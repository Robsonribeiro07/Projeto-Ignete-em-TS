
import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-Logo.svg'
export function Header()
{

    return(
        <strong className={styles.header}>
            <img src={igniteLogo} alt="logo tipo do ignite" />
        </strong>
        
    )
}