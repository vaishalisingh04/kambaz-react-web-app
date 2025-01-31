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
                {[
                    {
                        week: "Week 1",
                        objectives: [
                            "Introduction to the course",
                            "Learn what is Web Development",
                            "Overview of key technologies: HTML, CSS, JavaScript"
                        ]
                    },
                    {
                        week: "Week 2",
                        objectives: [
                            "Understanding HTML structure",
                            "Building basic web pages",
                            "Introduction to semantic HTML"
                        ]
                    },
                    {
                        week: "Week 3",
                        objectives: [
                            "Introduction to CSS",
                            "Applying styles to HTML elements",
                            "Understanding the box model and layout techniques"
                        ]
                    },
                    {
                        week: "Week 4",
                        objectives: [
                            "JavaScript basics: variables, data types, and functions",
                            "Manipulating the DOM with JavaScript",
                            "Handling user events"
                        ]
                    },
                    {
                        week: "Week 5",
                        objectives: [
                            "Advanced JavaScript: ES6 features",
                            "Asynchronous JavaScript (Promises & Async/Await)",
                            "Fetching data from APIs"
                        ]
                    }
                ].map((module, index) => (
                    <li key={index} className="wd-module">
                        <div className="wd-title">{module.week}</div>
                        <ul className="wd-lessons">
                            <li className="wd-lesson">
                                <span className="wd-title">LEARNING OBJECTIVES</span>
                                <ul className="wd-content">
                                    {module.objectives.map((objective, objIndex) => (
                                        <li key={objIndex} className="wd-content-item">{objective}</li>
                                    ))}
                                </ul>
                            </li>
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
