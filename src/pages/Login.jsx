import styled from "styled-components";
import { useState } from "react";
import { useLogin } from "../features/authentication/useLogin";
import SpinnerMini from "../ui/SpinnerMini"

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const FormSection = styled.section`
  max-width: 685px;
  width: 80%;
  min-width: 300px;
  margin:100px auto 65px auto;
  border-radius: 10px;
  border: 1px solid #aaaaaa9f;
  background-color: #d3dedd4d;
  box-shadow: 10px 5px 10px rgba(128, 128, 128, 0.173);
  padding: 2rem 2rem 2rem 2rem;
`;




const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // const [email, setEmail] = useState("rich@email.com")
  // const [password, setPassword] = useState("12341234")

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
    <FormWrapper>
      <FormSection>
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
      </FormSection>
    </FormWrapper>
  );
};

export default Login;
