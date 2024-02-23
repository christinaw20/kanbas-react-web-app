import ModuleList from "../Modules/List";
import { FaBan, FaCheckCircle, FaFileImport, FaArrowAltCircleRight, FaBullseye, FaChartBar, FaVolumeUp, FaBell } from "react-icons/fa";
import "./index.css";

function Home() {
    const statusLinks = [
        { label: "Import Existing Content",     icon: <FaFileImport className="fs-2" />             },
        { label: "Import from Commons",         icon: <FaArrowAltCircleRight className="fs-2" />    },
        { label: "Choose Home Page",            icon: <FaBullseye className="fs-2" />               },
        { label: "View Course Stream",          icon: <FaChartBar className="fs-2" />               },
        { label: "New Announcement",            icon: <FaVolumeUp className="fs-2" />               },
        { label: "New Analytics",               icon: <FaChartBar className="fs-2" />               },
        { label: "View Course Notifications",   icon: <FaBell className="fs-2" />                   },
      ];
  return (
    <div style={{display: "flex"}}>
        <div className="col-12 col-lg-9"><ModuleList />
        </div>
      <div className="col-3 status-side d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
        <h5>Course Status</h5> 
        <div className="top-button" style={{ display: "flex" }}>
          <button className="unpublish"><FaBan /> Unpublish</button>
          <button className="published"><FaCheckCircle/> Published</button>
        </div>
        <ul className="status-list">
          {statusLinks.map((link, index) => (
            <li key={index}>
              <button className="status-button">
                  <span className="status-icon">{link.icon}</span>
                  <span className="status-label">{link.label}</span>
              </button> 
              <div className="spacing" style={{ padding: "2px" }}></div>
            </li> 
          ))}
        </ul>
        <h4>To Do</h4>
        <hr/>
        <div className="to-do-list">
          <div className="to-do-item">
            <FaCheckCircle className="to-do-icon" /> <span className="to-do-text"> Grade A1 - ENV + HTML</span> 
          </div>
          <div className="to-do-item">
            <FaCheckCircle className="to-do-icon"/> <span className="to-do-text"> Grade A2 - CSS + BOOTSTRAP</span>
          </div>
        </div>
      </div>
          </div>
  );
}
export default Home;

