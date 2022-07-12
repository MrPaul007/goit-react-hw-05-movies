import { NavLink } from "react-router-dom";

import styles from "./header-menu.module.css";

const getLinkClassName = ({ isActive }) => {
    return isActive ? styles.linkActive : styles.link;
}

function Header() {
    return (
     <header className={styles.section}>
         <nav>
             <ul className={styles.menu}>
                 <li>
                    <NavLink className={getLinkClassName} to="/">Home</NavLink>
                 </li>
                 <li>
                    <NavLink className={getLinkClassName} to="/movies">Movies</NavLink>
                 </li>
             </ul>
         </nav>
     </header>
    );
}

export default Header;