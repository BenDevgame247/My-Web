import clsx from "clsx"
import { Link } from "react-router"

import Layout from "../Layout/layout"
import styles from "./navbar.module.scss"
import logo from "../../assets/LogoDiscord.png"

export default function Navbar() {
    return (
        <Layout>
            {/* Home */}
            <div className={clsx(styles.header)}>
                {/* Logo */}
                <div className={clsx(styles.logo)}>
                    <img src={logo} alt="logo" />
                </div>

                {/* Menu chính */}
                <div className={clsx(styles.menu)}>
                    <ul>
                        <li>
                            <Link to ="/">Trang chủ</Link>
                        </li>
                        <li>
                            <Link to ="">Tài liệu</Link>
                        </li>
                        <li>
                            <Link to ="">Bài tập</Link>
                        </li>
                        <li>
                            <Link to ="">Thông tin</Link>
                        </li>
                    </ul>
                </div>

                {/* Thanh tìm kiếm */}
                <div className={clsx(styles.searchBar)}>
                    <form className={clsx(styles.search)} role="search">
                        <input type="text" placeholder="Tìm kiếm" />
                    </form>
                </div>
            </div>
        </Layout>
    )
}