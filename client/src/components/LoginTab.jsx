import signuplogo from '../assets/sign-up.png'
const LoginTab = ({setLoginActive}) => {
  return (
    <div className="login-signup-form">
      <div className="login-signup-tab-header">
        <h1 className="giofence-heading">GioFence</h1>
      <div onClick={()=>setLoginActive('signup')} className="signup-switch"> <img src={signuplogo} alt="" width={12} height={12} />Sign Up</div>
      </div>
      <h2 className="login-heading">Login </h2>
      <form action="post">
        <div className="input-field-div">
          <input type="text" id="uid" name="uid" placeholder="UID" required />
        </div>
        <br />
        <div className="input-field-div">
          <input
            type="text"
            id="password"
            minLength={100}
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <br />
        <button className=" input-field-div sign-up-btn">Log in</button>
      </form>
    </div>
  );
};

export default LoginTab;
