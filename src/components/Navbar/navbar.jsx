import clsx from "clsx"
import { Link } from "react-router"

import logo from "../../assets/LogoDiscord.png"
import styles from "./navbar.module.scss"

export default function Navbar() {
    return (
        <>
            {/* Top navbar */}
            <nav className={clsx(styles.topNav)}>
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
            </nav>

            {/* Bottom navbar */}
            <nav className={clsx(styles.botNav)}>

                {/* List */}
                <ul className={clsx(styles.list)}>
                    <li className="item-1">
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li className="item-2">
                        <Link to="tai-lieu">Tài liệu</Link>
                    </li>
                    <li className="item-3">
                        <Link to="dien-dan">Diễn đàn</Link>
                    </li>
                    <li className="item-4">
                        <Link to="bai-tap">Bài tập</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}