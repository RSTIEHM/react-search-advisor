const Register = () => {
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

        <form method="POST" action="/auth/register">
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              value=""
              className="form-input"
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="input-container">
            <label htmlFor="name">Email</label>
            <input
              value=""
              className="form-input"
              type="text"
              name="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="input-container">
            <label htmlFor="name">Password</label>
            <input
              className="form-input"
              type="text"
              name="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="input-container">
            <label htmlFor="name">Confirm Password</label>
            <input
              className="form-input"
              type="text"
              name="password_confirm"
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
