import {useState} from "react"
import { useSignup } from "../features/authentication/useSignup";

const Register = () => {

  // const [email, setEmail] = useState("rich@email.com")
  // const [password, setPassword] = useState("12341234")

  const [formInput, setFormInput] = useState({
    fullName: "",
    email: "",
    password: "",
  })

  const {signup, isLoading} = useSignup()

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
    <div className="form-wrapper">
      <section className="form-container form-container-register-login">
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
          <strong>Already a member?</strong>
          <a className="auth-links" href="/login">
            {" "}
            Login Here
          </a>
        </form>
      </section>
    </div>
  );
};

export default Register;
