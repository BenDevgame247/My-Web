import clsx from "clsx"
import { Link } from "react-router"

import styles from "./contentDocs.module.scss"
import GettingStart from "../contents/gettingStart"

export default function ContentDocs() {
    return (
            <div className={clsx(styles.content)}>

                {/* Sidebar - List of link director to main documents */}
                <aside className={clsx(styles.sidebar)}>
                    <ul className={clsx(styles.sidebarList)}>
                        <li className={clsx(styles.s)}>
                            <Link to="khai-niem-lap-trinh">Giới thiệu</Link>
                            {/* <ul className={clsx(styles.subList)}>
                                <li>
                                    <Link to="">Khái niệm lập trình</Link>
                                </li>
                            </ul> */}
                        </li>
                        <li>
                            <Link to="docs-c">Tài liệu C</Link>
                        </li>
                        <li className={clsx(styles.list)}>
                            <Link to="docs-html">Tài liệu HTML</Link>
                            <ul className={clsx(styles.subList)}>
                                <li>
                                    <Link to="">HTML là gì?</Link>
                                </li>
                                <li>
                                    <Link to="">Attribute</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </aside>

                {/* Box Content - this is a main content of documents of programing language */}
                <div className={clsx(styles.boxContent)}>
                    <GettingStart/>
                </div>
            </div>
    )
}