import styled from "styled-components";
import { useLogin } from "../features/authentication/useLogin";
import SpinnerMini from "../ui/SpinnerMini"
import { useForm } from "react-hook-form";
import FormErrorMsg from "../ui/FormErrorMsg";
import { NavLink } from "react-router-dom";

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




const Login = () => {

  const {register, handleSubmit, reset,  formState} = useForm()
  const {errors} = formState

  const {login, isLoading} = useLogin()

  function onSubmit({email, password}) {
    if(!email || !password) {
      return
    } 
    login(
      {email, password},
      {onSettled: () => {
        reset()
      }}
      )
  }

  return (
    <FormWrapper>
      <FormSection>
        <div style={{display:"block", margin: "0 auto", width: "40%"}}>
          <NavLink  to="/">
            <img
              className="nav-logo-center"
              src="https://res.cloudinary.com/djangoles/image/upload/v1703936704/sig-logo_dk2s7t.png"
              alt=""
            />
          </NavLink>
        </div>

        <h1>Log in to your account</h1>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <label htmlFor="name">Email {errors?.email?.message && <FormErrorMsg text="Email is required"/>}</label>
            <input
              className="form-input"
              type="text"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              {...register("email",{
                required: "This field is required"
              })}
            />
          </div>
          <div className="input-container">
            <label htmlFor="name">Password {errors?.password?.message && <FormErrorMsg text="Password is required"/>}</label>
            <input
              id="password"
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              {...register("password",{
                required: "This field is required"
              })}
            />
          </div>

          <button 
            className="btn btn-submit" 
            type="submit"
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
