import styled from "styled-components";
import Overview from "./Overview/Overview";

const Board = () => {
  return (
    <Container>
      <Overview />
    </Container>
  );
};

export default Board;

const Container = styled.div`
  background-color: darkred;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  width: calc(100vw - 250px);
`;
