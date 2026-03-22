import "./App.css";
import StudentData from "./components/StudentData";
import Attendance from "./components/Attendance";
import AttendanceStatusInfo from "./components/AttendanceStatusInfo";
import { useEffect, useState } from "react";
import useGeoLocator from "./utils/useGeoLocator";
import MarkYourAttendance from "./components/MarkYourAttendance";
import LoginSignupSwitch from "./components/LoginSignupSwitch";


const App = () => {
  const [step, setStep] = useState("location");
  const isInside = useGeoLocator();
  const handleOnClick = () => {
    fetchData();
  };

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/api/biometric/register");
    const data = await response.json();
    console.log(JSON.stringify(data));
    
  };
  //it is custom hook
  // const verifyBiometric = useBiometricChecker();

  // useEffect(() => {
  //   if (isInside) {
  //     setStep("biometric");
  //   }
  // }, [isInside]);

  return (
    <div className="app">
      <LoginSignupSwitch/>
      {(false && isInside) ? (  //placed false for testing login/signup
        <div className="hostel-attendance">
          <h2>My Hostel Attendance</h2>
          <StudentData />
          <MarkYourAttendance handleOnClick={handleOnClick} />
          <Attendance />
          <AttendanceStatusInfo />
        </div>
      ) : (
        <></>
        // <h1>Get inside your hostel area!</h1>
      )}
    </div>
  );
};

export default App;
