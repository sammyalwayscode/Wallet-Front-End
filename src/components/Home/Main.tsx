import styled from "styled-components";
import Board from "./Board/Board";
import SideBar from "./SideBar/SideBar";

const Main = () => {
  return (
    <Container>
      <SideBar />
      <Board />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
`;
