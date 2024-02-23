import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaDesktop, FaRegArrowAltCircleRight, FaRegQuestionCircle} from "react-icons/fa";

function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",     icon: <FaInbox className="fs-2" />},
    { label: "History",   icon: <FaRegClock className="fs-2" />},
    { label: "Studio",   icon: <FaDesktop className="fs-2" />},
    { label: "Commons",   icon: <FaRegArrowAltCircleRight className="fs-2" />},
    { label: "Help",   icon: <FaRegQuestionCircle className="fs-2" />},
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation d-none d-sm-none d-md-block">
      <li className="wd-logo">
        <Link to={'https://www.northeastern.edu/'}> 
        <div className="wd-icon-logo">
        <img className="img" src="https://instructure-uploads.s3.amazonaws.com/account_145230000000000001/attachments/949/NU_MonoLVX_RGB_RW.png" alt="logo" />
          </div> </Link>
      </li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> 
          <div>{link.icon}</div> 
          <div>{link.label}</div> </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;

