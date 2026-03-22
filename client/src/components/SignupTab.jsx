import loginlogo from "../assets/login.png";
import { useState } from "react";
import Select from "react-select";

const SignupTab = ({setLoginActive}) => {
  const [selected, setSelected] = useState(null);
  const options = [
    { value: "Zakir-A", label: "Zakir-A" },
    { value: "Zakir-B", label: "Zakir-B" },
    { value: "Zakir-C", label: "Zakir-C" },
    { value: "Zakir-D", label: "Zakir-D" },
  ];
  return (
    <>
      <div className="login-signup-form">
        <div className="login-signup-tab-header">
          <h1 className="giofence-heading">GioFence</h1>
          <div className="signup-switch" onClick={()=>setLoginActive('login')}>
            <img src={loginlogo} width={12} height={12} alt="" />
            Log In
          </div>
        </div>
        <h2 className="login-heading">Sign Up</h2>
        <form action="post">
          <div className="input-field-div">
            <input type="text" id="uid" name="uid" placeholder="UID" required />
          </div>
          <br />
          <div className="input-field-div">
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Create Password"
              required
            />
          </div>
          <br />
            <Select
              className="select-hostel"
              options={options}
              value={selected}
              onChange={setSelected}
              placeholder="Select Hostel"
              isSearchable={true}
            />
          <button className=" input-field-div sign-up-btn">Sign up</button>
        </form>
      </div>
    </>
  );
};

export default SignupTab;
