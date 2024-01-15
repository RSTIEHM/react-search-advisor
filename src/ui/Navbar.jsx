
import LogoutButton from "../features/authentication/Logout";
import {renderAuth} from "../utils/helpers"

const Navbar = () => {
  let rendered = renderAuth()

  
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
      {rendered ? (
        <>
            <p>Hi Dougie!!</p>
          <a className="btn-auth" href="/advisors/create">
            Create
          </a>
          <LogoutButton />
        </>
        ) : (
          <>
            <a className="btn-auth" href="/login">
              Login
            </a>
            <a className="btn-auth" href="/register">
              Register
            </a>
          </>
          )}





        </div>
      </div>
    </section>
  );
};

export default Navbar;
