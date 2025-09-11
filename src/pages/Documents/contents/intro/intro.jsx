import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

import styles from "./intro.module.scss"

export default function Intro() {
    return (
        <div className={clsx(styles.container)}>

            <div className={clsx(styles.intro)}>

                <h2 className={clsx(styles.needPadding, styles.needFontS, styles.needCenter)}>📘 Giới thiệu 📘</h2>
                <p className={clsx(styles.needCss)}>
                    <ul>
                        <li>
                            Chào mừng bạn đến với <b>Kho tài liệu</b> của chúng tôi. Nơi đây có tất cả tài liệu của các ngôn ngữ lập trình phổ biến.
                        </li>
                        <li>
                            <b>Kho tài liệu</b> này được chúng tôi cố gắng tổng hợp lại một cách dễ hiểu và ngắn ngọn nhất.
                        </li>
                        <li>
                            Giúp các bạn từng bước đi từ <b>căn bản ngôn ngữ lập trình</b>
                            <FontAwesomeIcon icon={faArrowRightLong} className={clsx(styles.needSpace)}/>
                            đến các lĩnh vực chuyên sâu hơn trong ngành CNTT.
                        </li>
                        <li>
                            Hiện tại, nội dung chính tập trung vào:
                            <ul className={clsx(styles.needPaddingLeft)}>
                                <li>
                                    Giải thích khái niệm <b>Programming (Lập trình).</b>
                                </li>
                                <li>
                                    Làm quen với các <b>ngôn ngữ lập trình phổ biến</b> (Python, C, Javascript, ...).
                                </li>
                                <li>
                                    Học cấu trúc cơ bản: biến, kiểu dữ liệu, hàm, vòng lặp, điều kiện, ....
                                </li>
                                <li>
                                    Thực hành với ví dụ nhỏ và bài tập.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </p>

                <div className={clsx(styles.needBorderBottom)}></div>

                <h2 className={clsx(styles.needPadding, styles.needFontS, styles.needCenter)}>🎯 Mục tiêu 🎯</h2>
                <p className={clsx(styles.needCss)}>
                    <ul>
                        <li>
                            Nắm chắc <b>nguyên lý lập trình</b> (tư duy, thuật toán, cấu trúc dữ liệu).
                        </li>
                        <li>
                            Có nền tảng để học tiếp các mảng: Web, Database, AI, Mobile, Game.
                        </li>
                        <li>
                            Biết cách đọc code, viết code đơn giản và gỡ lỗi.
                        </li>
                    </ul>
                </p>

                <div className={clsx(styles.needBorderBottom)}></div>

                <h2 className={clsx(styles.needPadding, styles.needFontS, styles.needCenter)}>Hướng đi tiếp theo</h2>
                <p className={clsx(styles.needCss)}>
                    <ul>
                        <li>
                            Sau khi nắm vững được kiến thức về <b>ngôn ngữ lập trình</b>, bạn có thể chọn các hướng đi như sau:
                            <ul className={clsx(styles.needPaddingLeft)}>
                                <li >
                                    <b>Cơ sở dữ liệu (Database):</b> SQL, NoSQL, ORM.
                                </li>
                                <li>
                                    <b>Mạng máy tính & API:</b> HTTP, REST, WebSocket.
                                </li>
                                <li>
                                    <b>Phát triển Website:</b> Front-end (React, Vue, ...), Back-end (Node.js, Django, Spring, ...).
                                </li>
                                <li>
                                    <b>AI & Data:</b> Python, ML, xử lý dữ liệu.
                                </li>
                                <li>
                                    <b>Mobile:</b> Android (Kotlin), IOS (Swift), cross-platform (Flutter, React Native).
                                </li>
                                <li>
                                    <b>Game:</b> Unity, Unreal, Roblox Studio, Minecraft modding, Godot.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </p>

                <div className={clsx(styles.needBorderBottom)}></div>

                <h2 className={clsx(styles.needPadding, styles.needFontS, styles.needCenter)}>Lựa chọn của bạn</h2>
                <p className={clsx(styles.needCss)}>
                    <ul>
                        <li>
                            Nếu bạn chưa biết chọn ngôn ngữ nào. Chúng tôi có một vài lựa chọn cho bạn:
                            <ul className={clsx(styles.needPaddingLeft)}>
                                <li>
                                    <b>Python: </b>dễ học, mạnh về Data hoặc AI.
                                </li>
                                <li>
                                    <b>Javascript: </b>bắt buộc cho Web.
                                </li>
                                <li>
                                    <b>Java hoặc C#: </b>nền tảng vững, dùng cho enterprise và game.
                                </li>
                                <li>
                                    <b>C hoặc C++: </b>tốt cho hệ thống và tối ưu
                                </li>
                            </ul>
                        </li>
                        <li>
                            Nếu bạn là người mới hoàn toàn, chúng tôi khuyên bạn nên bắt đầu với <b>ngôn ngữ lập trình C hoặc C++</b>.
                        </li>
                    </ul>
                </p>

                <div className={clsx(styles.needBorderBottom)}></div>
            </div>

            <div className={clsx(styles.btnHandle)}>
                <form role="btn" >
                    <button className={clsx(styles.btn)}>
                        <Link to="gioi-thieu">Về trước</Link>
                    </button>
                </form>

                <form role="btn" >
                    <button className={clsx(styles.btn)}>
                        <Link to="programming">Tiếp theo</Link>
                    </button>
                </form>
            </div>
        </div>
    )
}