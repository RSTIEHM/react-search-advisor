import styled from "styled-components";
import {useState} from "react"
import { useSignup } from "../features/authentication/useSignup";

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
  @media (max-width: 575px) {
    width: 90%;
  }
`;



const Register = () => {


  const [formInput, setFormInput] = useState({
    fullName: "",
    email: "",
    password: "",
  })

  const {signup} = useSignup()

  function handleChange(e) {
    setFormInput((prev) => {
      return {
        ...prev, 
        [e.target.name] : e.target.value
      }
    })

  }

  function handleSubmit(e) {
    e.preventDefault()
   onSubmit({fullName, email, password})
  }
  function  onSubmit() {
    signup({fullName, email, password}, {
      onSettled: setFormInput({})
    })
  }
  const {fullName, email, password} = formInput
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
        <h1>Register An Account</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Full Name</label>
            <input
              onChange={(e)=>handleChange(e)}
              id="fullName"
              value={formInput.fullName}
              className="form-input"
              type="text"
              name="fullName"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="input-container">
            <label htmlFor="name">Email</label>
            <input
              onChange={(e)=>handleChange(e)}
              id="email"
              value={formInput.email}
              className="form-input"
              type="text"
              name="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="input-container">
            <label htmlFor="name">Password</label>
            <input
              onChange={(e)=>handleChange(e)}
              id="password"
              value={formInput.password}
              className="form-input"
              type="text"
              name="password"
              placeholder="Enter Your Password"
            />
          </div>


          <button className="btn btn-submit" type="submit">
            Submit
          </button>
          <br />
          <strong>Already have an account?</strong>
          <a className="auth-links" href="/login">
            {" "}
            Login Here
          </a>
        </form>
      </FormSection>
    </FormWrapper>
  );
};

export default Register;
