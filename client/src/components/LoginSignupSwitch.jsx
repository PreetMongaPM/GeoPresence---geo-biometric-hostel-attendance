import { useState } from "react";
import LoginTab from "./LoginTab";
import SignupTab from "./SignupTab";

const LoginSignupSwitch = () => {
  const [loginActive, setLoginActive] = useState('login');
  return (
    <div className="login-signup-page">
      <div className="login-side-div">
      {loginActive === 'login' ? (
          <div>Welcome Back!</div>

      ) : (
          <div>Want to avoid long queues!</div>
      )}
      </div>
      {loginActive === 'login' ? <LoginTab setLoginActive={setLoginActive} /> : <SignupTab setLoginActive={setLoginActive} />}
    </div>
  );
};

export default LoginSignupSwitch;
