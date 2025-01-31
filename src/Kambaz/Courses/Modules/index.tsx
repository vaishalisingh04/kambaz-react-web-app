import { Navigate, Route, Routes } from "react-router";

export default function Modules() {
    return (
        <div>
            {/* Control Buttons */}
            <div className="wd-controls">
                <button className="wd-button">Collapse All</button>
                <button className="wd-button">View Progress</button>
                <select className="wd-button">
                    <option>Publish All</option>
                </select>
                <button className="wd-button">+ Module</button>
            </div>

            <h1 className="wd-header">Course Modules</h1>
            <p className="wd-description">
                Explore the weekly learning objectives and materials to guide you through the course.
            </p>
            <ul id="wd-modules">
                {[{
                    week: "Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda",
                    objectives: [
                        "Introduction to the course",
                        "Learn what is Web Development"
                    ],
                    readings: [
                        "Full Stack Developer - Chapter 1 - Introduction",
                        "Full Stack Developer - Chapter 2 - Creating User"
                    ],
                    slides: [
                        "Introduction to Web Development",
                        "Creating an HTTP server with Node.js",
                        "Creating a React Application"
                    ]
                },
                    {
                        week: "Week 1, Lecture 2 - Formatting User Interfaces with HTML",
                        objectives: []
                    }].map((module, index) => (
                    <li key={index} className="wd-module">
                        <div className="wd-title">{module.week}</div>
                        <ul className="wd-lessons">
                            {module.objectives.length > 0 && (
                                <li className="wd-lesson">
                                    <span className="wd-title">LEARNING OBJECTIVES</span>
                                    <ul className="wd-content">
                                        {module.objectives.map((objective, objIndex) => (
                                            <li key={objIndex} className="wd-content-item">{objective}</li>
                                        ))}
                                    </ul>
                                </li>
                            )}
                            {module.readings && module.readings.length > 0 && (
                                <li className="wd-lesson">
                                    <span className="wd-title">READING</span>
                                    <ul className="wd-content">
                                        {module.readings.map((reading, readIndex) => (
                                            <li key={readIndex} className="wd-content-item">{reading}</li>
                                        ))}
                                    </ul>
                                </li>
                            )}
                            {module.slides && module.slides.length > 0 && (
                                <li className="wd-lesson">
                                    <span className="wd-title">SLIDES</span>
                                    <ul className="wd-content">
                                        {module.slides.map((slide, slideIndex) => (
                                            <li key={slideIndex} className="wd-content-item">{slide}</li>
                                        ))}
                                    </ul>
                                </li>
                            )}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function Courses() {
    return (
        <div id="wd-courses">
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<h3>Home</h3>} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<h3>Assignments</h3>} />
                <Route path="Assignments/:aid" element={<h3>Assignment Editor</h3>} />
            </Routes>
        </div>
    );
}
