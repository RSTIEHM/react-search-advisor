
import LogoutButton from "../features/authentication/Logout";
import {renderAuth} from "../utils/helpers"
import styled from "styled-components";


const Navbar = () => {
  let rendered = renderAuth()

  const NavbarContainer = styled.div`
      background-color: rgba(195, 188, 188, 0.194);
      box-shadow: 10px 5px 10px rgba(128, 128, 128, 0.354);
  `

  const Navbar = styled.div`
    padding: 0.5rem 3.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 620px) {
    flex-direction: column;
  }
  `
  
  return (
    <NavbarContainer>
      <Navbar>
      
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
            <p>Hi Chip</p>
          </>
          )}

        </div>
      </Navbar>
    </NavbarContainer>
  );
};

export default Navbar;
