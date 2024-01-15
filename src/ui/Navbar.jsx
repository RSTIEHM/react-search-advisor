
import LogoutButton from "../features/authentication/Logout";
import {renderAuth} from "../utils/helpers"
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

const Navbar = () => {
  let rendered = renderAuth()

  const {isLoading, user, isAuthenticated} = useUser();

  function getFirstName(str) {
    return str.split(" ")[0]
  }



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
      
        <NavLink to="/advisors">
          {" "}
          <img
            className="nav-logo"
            src="/images/sig-logo_dk2s7t.png"
            alt=""
          />
        </NavLink>

        <div className="auth-nav-links">
          {rendered ? (
        <>
          {!isLoading && isAuthenticated ? (
            <div className="user-icon">
                         Hello, {getFirstName(user.user_metadata.fullName)}
              <img src="./user.png" alt="" />
   
            </div>
          ) : "Loading..."}
          <p></p>
          <NavLink className="btn-auth" to="/advisors/create">
            Create
          </NavLink>
          <LogoutButton />

        </>
        ) : (
          <>

            <NavLink className="btn-auth" to="/login">
              Login
            </NavLink>
            <NavLink className="btn-auth" to="/register">
              Register
            </NavLink>
          </>
          )}

        </div>
      </Navbar>
    </NavbarContainer>
  );
};

export default Navbar;
