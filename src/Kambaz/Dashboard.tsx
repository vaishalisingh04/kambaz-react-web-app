import {Link} from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboardd</h1>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses (05)</h2>
            <hr/>
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kambaz/Courses/1234/Home">
                        <img src="/images/unit11.jpg" width={300}/>
                        <div>
                            <h5>
                                CS1111 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer Unit1
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kambaz/Courses/1234/Home">
                        <img src="/images/unit22.jpg" width={300}/>
                        <div>
                            <h5>
                                CS2222 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer Unit2
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kambaz/Courses/1234/Home">
                        <img src="/images/unit33.jpg" width={300}/>
                        <div>
                            <h5>
                                CS3333 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer Unit 3
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kambaz/Courses/1234/Home">
                        <img src="/images/unit44.jpg" width={300}/>
                        <div>
                            <h5>
                                CS4444 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer Unit4
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kambaz/Courses/1234/Home">
                        <img src="/images/React.png" width={300}/>
                        <div>
                            <h5>
                                CS5555 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer Unit5
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
