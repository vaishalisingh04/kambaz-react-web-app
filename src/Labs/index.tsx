import {Navigate, Route, Routes} from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import TOC from "./TOC";

export default function Labs() {
    return (
        <div>
            <h1>Vaishali Singh</h1>
            <h2>Labs</h2>
            <TOC/>
            <Routes>
                <Route path="/" element={<Navigate to="Lab1"/>}/>
                <Route path="Lab1" element={<Lab1/>}/>
                <Route path="Lab2" element={<Lab2/>}/>
                <Route path="Lab3" element={<h2>Lab 3</h2>}/>
            </Routes>
        </div>
    );
}