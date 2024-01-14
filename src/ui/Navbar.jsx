import { Navigate } from "react-router-dom";
const Navbar = () => {
  return (
    <section className="navbar-container">
      <div className="navbar-section">
        <a href="/advisors">
          {" "}
          <img
            className="nav-logo"
            src="/images/sig-logo_dk2s7t.png"
            alt=""
          />
        </a>

        <div className="auth-nav-links">
          {/* <p className="bold">Welcome</p> */}
          <a className="btn-auth" href="/advisors/create">
            Create
          </a>
          <form method="POST" action="/auth/logout">
            <button className="btn-auth" type="submit">
              Logout
            </button>
          </form>
          <a className="btn-auth" href="/login">
            Login
          </a>
          <a className="btn-auth" href="/register">
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
