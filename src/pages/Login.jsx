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
        <h1>Login</h1>
        <form method="POST" action="/auth/login">
          <div className="input-container">
            <label htmlFor="name">Email</label>
            <input
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

          <button className="btn btn-submit" type="submit">
            Submit
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

export default Register;
