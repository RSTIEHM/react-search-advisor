import { useState } from "react";
import { useLogin } from "../features/authentication/useLogin";
import SpinnerMini from "../ui/SpinnerMini"

const Login = () => {

  const [email, setEmail] = useState("rich@email.com")
  const [password, setPassword] = useState("12341234")

  const {login, isLoading} = useLogin()

  function handlesubmit(e) {
    e.preventDefault()

    if(!email || !password) return 
    login(
      {email, password},
      {onSettled: () => {
        setEmail("")
        setPassword("")
      }}
      )
   
  }

  return (
    <div className="form-wrapper">
      <section className="form-container form-container-register-login">
        <a href="/">
          <img
            className="nav-logo-center"
            src="https://res.cloudinary.com/djangoles/image/upload/v1703936704/sig-logo_dk2s7t.png"
            alt=""
          />
        </a>
        <h1 style={{textAlign: "center", margin: "20px 0"}}>Log in to your account</h1>
        <form onSubmit={handlesubmit}>
          <div className="input-container">
            <label htmlFor="name">Email</label>
            <input
              className="form-input"
              type="text"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="input-container">
            <label htmlFor="name">Password</label>
            <input
              className="form-input"
              type="text"
              name="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <button 
          className="btn btn-submit" 
          type="submit"
          disabled={isLoading}
          >
            {isLoading ? <SpinnerMini /> : "Log In"}
          </button>
          <br />
          <strong>Dont have an account?</strong>
          <a className="auth-links" href="/register">
            {" "}
            Register Here
          </a>
        </form>
      </section>
    </div>
  );
};

export default Login;
