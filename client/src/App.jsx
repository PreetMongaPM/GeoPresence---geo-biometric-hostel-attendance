import "./App.css";
import StudentData from "./components/StudentData";
import Attendance from "./components/Attendance";
import AttendanceStatusInfo from "./components/AttendanceStatusInfo";
import GeoLocator from "./components/GeoLocator";

const App = () => {
  return (
    <div className="hostel-attendance">
      <h2>My Hostel Attendance</h2>
      <StudentData />
      <Attendance />
      <AttendanceStatusInfo />
      <GeoLocator/>
    </div>
  );
};

export default App;
