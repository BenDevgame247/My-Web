import { Link } from "react-router";
import clsx from "clsx";
import Layout from "../Layout/layout";
// import publicStyles from "../Layout/layout.module.scss"
import styles from "./navbar.module.scss"
import logo from "../../assets/LogoDiscord.png"
import Home from "../../pages/Home/home";

export default function Navbar() {
    return (
        <Layout>
            {/* Top navbar */}
            <header className={clsx(styles.header)}>
                {/* logo */}
                <img src={logo} alt="Logo" />

                {/* Search bar */}
                <form className={clsx(styles.search)} role="search">
                    <input type="text" placeholder="Tìm kiếm"/>
                </form>

                {/* Avatar user */}
                <div className={clsx(styles.avatar)}>
                    {/* Ảnh */}
                    <img src={logo} alt="Logo"/>
                </div>
            </header>

            {/* Content */}
            <main className={clsx(styles.main)}>
                <Home />
            </main>

            {/* Bottom navbar - Menu list */}
            <footer className={clsx(styles.footer)}>
                <div className={clsx(styles.list)}>
                    <ul>
                        <li className="item-1">
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li className="item-2">
                            <Link to="">Tài liệu</Link>
                        </li>
                        <li className="item-3">
                            <Link to="">Bài tập</Link>
                        </li>
                        <li className="item-4">
                            <Link to="">Thông tin</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </Layout>
    )
}