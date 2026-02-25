import "./App.css";
import StudentData from "./components/StudentData";
import Attendance from "./components/Attendance";
import AttendanceStatusInfo from "./components/AttendanceStatusInfo";
import { useEffect, useState } from "react";
import useGeoLocator from "./utils/useGeoLocator";

const App = () => {
  const [step, setStep] = useState("location");
  const isInside = useGeoLocator();
  //it is custom hook
  // const verifyBiometric = useBiometricChecker();

  // useEffect(() => {
  //   if (isInside) {
  //     setStep("biometric");
  //   }
  // }, [isInside]);

  return (
    <div>
      {isInside ? (
        <div className="hostel-attendance">
          <h2>My Hostel Attendance</h2>
          <StudentData />
          <Attendance />
          <AttendanceStatusInfo />
        </div>
      ):<h1>Get inside your hostel area!</h1>}
    </div>
  );
};

export default App;
