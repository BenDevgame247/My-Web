import clsx from "clsx"


import Layout from "../Layout/layout"
import styles from "../Layout/layout.module.scss"

export default function Navbar() {
    return (
        <Layout>
            <nav className={clsx(styles.navbar)}>
                <ul>
                    <li>Hello!</li>
                </ul>
            </nav>
        </Layout>
    )
}