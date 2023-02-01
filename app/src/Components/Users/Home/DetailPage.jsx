import React from "react";
import styled from "styled-components";

const DetailPage = () => {
  return (
    <Container>
      <Wrapper>
        <TopBox>
          <UserAvatar>
            <img src="/image/ava.png" alt="" />
          </UserAvatar>
          <UserProjDetails>
            <ProjectName>Behance Saas Redesign | Darkmode</ProjectName>
            <UserName>Tahsin Tamanna | follow</UserName>
          </UserProjDetails>
        </TopBox>

        <ButtomBox>
          <ImageBox>
            <img src="/image/test.png" alt="" />
          </ImageBox>
          <DescriptionBox>Description</DescriptionBox>
        </ButtomBox>
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
  background-color: #f9f9f9;
`;
const Wrapper = styled.div`
  width: 85%;
`;

const TopBox = styled.div`
  display: flex;
  margin: 20px 0;
`;

const ButtomBox = styled.div`
  background-color: #fafafa;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  margin-bottom: 50px;
`;

const ImageBox = styled.div`
  width: 100%;
  margin-bottom: 30px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const DescriptionBox = styled.div`
  padding: 20px 0;
  background-color: #ffffff;
`;
const UserAvatar = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: lightgray;
  border: 1px solid #000;
  margin-right: 8px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
const UserProjDetails = styled.div``;
const ProjectName = styled.div`
  font-size: 17px;
  font-weight: 700;
`;
const UserName = styled.div`
  font-size: 13px;
`;
