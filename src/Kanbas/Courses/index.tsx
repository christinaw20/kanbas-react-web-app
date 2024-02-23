import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import "./index.css";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div className="wd-courses">
        <h1 className="course-display-heading d-none d-sm-none d-md-block">
        <HiMiniBars3/> {course?.name} {course?.number}
        <IoIosArrowForward style={{ color: "grey" }}/> <span className="page" style={{ color: "black"}}>{pathname.split('/')[4]}</span>
        </h1>
    <div style={{ display: "flex"}}>
      <CourseNavigation />
      <div style={{width: "100%"}}>
        <div
          className="overflow-y-scroll bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Courses;
