import clsx from "clsx"
import { Link } from "react-router"

import logo from "../../assets/LogoDiscord.png"
import styles from "./navbar.module.scss"

export default function Navbar() {
    return (
        <nav className={clsx(styles.navbar)}>
            {/* Menu + logo */}
            <div className={clsx(styles.logo)}>
                <img src={logo} alt="logo" />
            </div>

            {/* search */}
            <div className={clsx(styles.search)}>
                <form role="search">
                    <input type="text" placeholder="Tìm kiếm...."/>
                </form>
            </div>

            {/* avatar user */}
            <div className={clsx(styles.avatar)}>
                <img src={logo} alt="Avatar" />
            </div>

            {/* Menu */}
        </nav>
    )
}