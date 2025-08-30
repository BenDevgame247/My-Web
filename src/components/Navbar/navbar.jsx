import clsx from "clsx"

import Layout from "../Layout/layout"
import styles from "../Layout/layout.module.scss"

export default function Navbar() {
    return (
        <div>
            <Layout>
                <nav className={clsx(styles)}>

                </nav>
            </Layout>
        </div>
    )
}