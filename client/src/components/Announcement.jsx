import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Best Games In Best Prices! Winter January Sale!</Container>;
};

export default Announcement;
