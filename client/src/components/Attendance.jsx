import { useState } from "react";

const Attendance = () => {

  const [attendanceStatus, setAttendanceStatus] = useState()
  return ( 
    <div className="attendance">
      <table className="attendance-table">
        <thead>
          <tr className="attendance-table-header">
            <th>Date</th>
            <th>Attendance Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>14/02/2026</td>
            <td>{attendanceStatus}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;

//P in Green, A in Red, L in Yellow
