import React, { useEffect, useState } from "react";
import styles from "./CoursesPreviewModePage.module.css";
import { globalUrl } from "../../global";


const CoursesPreviewModePage = () => {
    const [checkedLessons, setCheckedLessons] = useState([]);
    const [totalLessons, setTotalLessons] = useState(0);
    const progressPercentage = (checkedLessons.length / totalLessons) * 100;

    const handleCheckboxChange = (index) => {
        setCheckedLessons((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const [lessons, setLessons] = useState([]);
    const [modules, setModules] = useState([]);
    const [moduleCourseTitle, setmoduleCourseTitle] = useState("");

    useEffect(() => {
    fetch(`${globalUrl.value}/api/course/1/preview`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "ngrok-skip-browser-warning": "true"
        }
    })
        .then((response) => response.json())            
        .then((data) => {
            setLessons(data.lessons[0]);
            setTotalLessons(data.lessons[0].length);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }, []);

    useEffect(() => {
    fetch(`${globalUrl.value}/api/user/1/course/1/preview`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "ngrok-skip-browser-warning": "true"
        }
    })
        .then((response) => response.json())            
        .then((data) => {
            setModules(data.modules);
            setmoduleCourseTitle(data.course_title);
            console.log(data)
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }, []);
    
    return (
        <div className={styles.previewStyles}>
            <div className={styles.previewContainer}>
                <div className={styles.videoSection}>
                    <div className={styles.videoContainer}>
                        <div className={styles.videoPlayer}>
                            <div className={styles.videoDescription}>
                                <img className={styles.playIcon} src="play_arrow.png" />
                                <div className={styles.videoText}>
                                    <h2 className={styles.videoTitle}>Lesson Description</h2>
                                    <p className={styles.videoTextParagraph}>
                                        This lesson covers the basics of quantum mechanics, including key concepts and theories.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.progressBar}>
                            <div className={styles.progressFill}></div>
                        </div>
                        <div className={styles.videoControls}>
                            <div className={styles.videoControlsDiv}>
                                <img src="/pause.svg" />
                                <img src="/sound.svg" />
                                <span className="text-green">00:00:00</span>
                            </div>
                            <div className={styles.videoControlsDiv}>
                                <img src="/closed_caption.svg" />
                                <img src="/aspect_ratio.svg" />
                                <img src="/kid_star.svg" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.lessonInfo}>
                        <h3 className={styles.lessonTitle}>Introduction to Quantum Physics</h3>
                        <span className={styles.viewCount}>1.2M views</span>
                    </div>

                    <div className={styles.lessonInfo}>
                        <div className={styles.creatorInfo}>
                            <div className={styles.avatar}></div>
                            <div className={styles.futureLearn}>
                                <span className="desktop-s-bold text-green">FutureLearn</span>
                                <span className="caption text-green">200K subscribers</span>
                            </div>
                            <button className={styles.subscribeButton}>Subscribe</button>
                        </div>
                        <button className={styles.wishlistButton}>Add to Wishlist</button>
                    </div>
                </div>

                <div className={styles.nextLessons}>
                    <h3 className="desktop-s-bold text-green">Next Lessons</h3>
                    <div className={styles.lessonList}>
                        {lessons.map((lesson, index) => (
                            <div key={index} className={styles.lessonCard}>
                                <div className={styles.lessonThumbnail}></div>
                                <div className={styles.lessonText}>
                                    <h4 className="text-green body-bold">{lesson.lesson_title}</h4>
                                    <span className="caption text-green">{lesson.view_count}</span>
                                    <span className="caption text-green">{lesson.updated_at}</span>
                                    <div className={styles.checkboxContainer}>
                                        <input type="checkbox" className={styles.checkbox} />
                                        <span className="caption text-green">Quantum Academy</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.progressContainer}>
                <h2 className="sub-headline-bold text-green">Course Progress</h2>
                    <div className={styles.courseBox}>
                        <div className={styles.courseHeader}>
                            <p>{moduleCourseTitle}  </p>
                            <div className={styles.progressBar}>
                                <div className={styles.progressTrack}>
                                    <div
                                        className={styles.progressFill}
                                        style={{ width: `${progressPercentage}%`, backgroundColor: "#024F40" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        {lessons.map((lesson, idx) => (
                            <div key={idx} className={styles.courseItem}>
                                <input
                                    type="checkbox"
                                    className={styles.lessonCheckbox}
                                    checked={checkedLessons.includes(idx)}
                                    onChange={() => handleCheckboxChange(idx)}
                                />
                                <span className={styles.lessonTitle}>{lesson.lesson_title}</span>
                                <p className={styles.lessonDescription}>{lesson.lesson_content}</p>
                                <img src="/chevrondown.svg" className={styles.expandIcon} />
                            </div>
                        ))}
                    </div>
                <div className={styles.newsletter}>
                    <h3>Stay updated with the latest in <br /> Quantum Physics</h3>
                    <p>Subscribe to our newsletter</p>
                    <div className={styles.subscription}>
                        <input type="email" placeholder="Email Address" className={styles.input} />
                        <button className={styles.subscribeButton}>Go to Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesPreviewModePage;
