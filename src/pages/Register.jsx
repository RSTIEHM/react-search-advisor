import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSignup } from "../features/authentication/useSignup";
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


const Register = () => {

  const {register, handleSubmit, reset,  formState} = useForm()
  const {errors} = formState

  const {signup} = useSignup()

  function onSubmit({fullName, email, password}) {
    signup({fullName, email, password}, {
      onSettled: () => {
        reset()
      }
    })
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

        <h1>Register An Account</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <label htmlFor="name">Full Name {errors?.fullName?.message && <FormErrorMsg text="Name is required"/>}</label>
            <input
              id="fullName"
              className="form-input"
              type="text"
              name="fullName"
              placeholder="Enter Your Full Name"
              {...register("fullName",{
                required: "This field is required"
              })}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email {errors?.email?.message && <FormErrorMsg text="Email is required"/>}</label>
            <input
              id="email"
              className="form-input"
              type="text"
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


          <button className="btn btn-submit" type="submit">
            Register
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
