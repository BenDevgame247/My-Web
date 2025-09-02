import clsx from "clsx";

import styles from "./layout.module.scss"
import Navbar from "../Navbar/navbar";

export default function Layout({ children }) {
    return (
        <div className={clsx(styles.layout)}>
            <header className={clsx(styles.nav)}><Navbar/></header>
            <main className={clsx(styles.content)}>{children}</main>
            <footer className={clsx(styles.footer)}>2025</footer>
        </div>
    )
}