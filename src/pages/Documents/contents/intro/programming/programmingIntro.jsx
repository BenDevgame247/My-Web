import clsx from "clsx"

import styles from "./programmingIntro.module.scss"

export default function ProgrammingIntro() {
    return (
        <div className={clsx(styles.container)}>
            <section className={clsx(styles.header)}>
                <h2 className={clsx(styles.tittle)}>Hello</h2>
            </section>
        </div>
    )
}