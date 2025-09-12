import clsx from "clsx"
import { Link, Outlet } from "react-router"

import styles from "./contentDocs.module.scss"
import Intro from "../contents/intro/intro"
import ProgrammingIntro from "../contents/intro/programming/programmingIntro"
import ProgrammingConcepts from "../contents/concepts/programming/programming"

export default function ContentDocs() {
    return (
            <div className={clsx(styles.content)}>

                {/* Sidebar - List of link director to main documents */}
                <aside className={clsx(styles.sidebar)}>
                    <ul className={clsx(styles.sidebarList)}>

                        <li className={clsx(styles.needDisplayBlock)}>
                            <Link to="gioi-thieu">Giới thiệu</Link>
                        </li>

                        <li className={clsx(styles.list)}>
                            <Link to="programming">Programming</Link>
                            <ul className={clsx(styles.subList)}>

                            </ul>
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
                <div className={clsx(styles.containerContent)}>
                    <Outlet/>    
                </div>


            </div>
    )
}