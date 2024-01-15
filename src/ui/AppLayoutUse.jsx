import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Navbar from "./Navbar";


const StyledAppLayout = styled.div`
    /* display: grid;
    height: 100vh;
    grid-template-columns: 26rem 1fr;  
    grid-template-rows: auto 1fr; */
`;

const Main = styled.main`
    /* background-color: var(--color-grey-50);
    padding: 4rem 4.8rem 6.4rem; */
`;

const AppLayoutUse = () => {
  return (
    <StyledAppLayout>
      <Navbar />
        <Main>
           <Outlet />
        </Main>
    </StyledAppLayout>
  )
}

export default AppLayoutUse