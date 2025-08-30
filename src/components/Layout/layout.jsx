import clsx from "clsx";

import styles from "./layout.module.scss"

export default function Layout({ children }) {
    return (
        <div className={clsx(styles.layout)}>
            {children}
        </div>
    )
}