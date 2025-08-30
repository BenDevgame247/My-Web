import clsx from "clsx"
import styles from "./navbar.module.scss"

export default function Navbar() {
    return (
        <nav className={clsx(styles.navbar)}>
            <ul className={clsx(styles.menu)}>
                <li>
                    <a href="/">Trang chủ</a>
                </li>
            </ul>
        </nav>
    )
}