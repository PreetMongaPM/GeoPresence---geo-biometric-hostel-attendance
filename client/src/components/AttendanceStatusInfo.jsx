const AttendanceStatusInfo = () => {
  return (
    <div className="attendance-status-info">
      <h4>Attendance Status Info</h4>
      <div>
        <span className="present-status">P</span>: Present
      </div>
      <div>
        <span className="absent-status">A</span>: Absent
      </div>
      <div>
        <span className="night-pass-leave-status">L</span>: Night Pass Leave
      </div>
    </div>
  );
};

export default AttendanceStatusInfo;
