import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const HomeImg = styled.img`
  width: 400px;
  margin: 0 auto;
  padding: 1rem;
  transform: translateY(-56px);
`;


const Home = () => {
  return (
    <HomeContainer>
      <HomeImg className="home-logo" src="/images/SIG_BIG.png" />
      <NavLink className="home-btn" to={`/advisors`}>
        ENTER
      </NavLink>
    </HomeContainer>
  );
};

export default Home;



