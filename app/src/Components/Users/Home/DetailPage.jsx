import React from "react";
import styled from "styled-components";

const DetailPage = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Detail Page</h1>
      </Wrapper>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 85%;
`;
