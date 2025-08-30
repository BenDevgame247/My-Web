import clsx from "clsx"
import { Link } from "react-router"

import logo from "../../assets/LogoDiscord.png"
import styles from "./navbar.module.scss"

export default function Navbar() {
    return (
        <nav className={clsx(styles.navbar)}>
            {/* Menu + logo */}
            <button className={clsx(styles.logoBtn)} aria-label="Mở menu">
                <img src={logo} alt="logo" />
            </button>

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

            {/* Sub menu */}
            <div className={clsx(styles.subMenu)}>
                <ul>
                    <li>
                        <Link to = "/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to = "tai-lieu">Tài liệu</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}