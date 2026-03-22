const MarkYourAttendance = ({handleOnClick})=>{

  return (
    <div className="mark-your-attendance">
    <button onClick={handleOnClick} className="mark-your-attendance-btn">Mark Your Attendance</button>
    </div>
  );
}

export default MarkYourAttendance;