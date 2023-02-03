import React from "react";
import styled from "styled-components";

const Share = () => {
  return (
    <Container>
      <Wrapper>
        <UploadsHold>
          <UploadImageDiv>
            <img src="" alt="" />
          </UploadImageDiv>
          <OtherInputDiv>
            <Title>Share One Of your Best Work</Title>
            <InputDiv>
              <span>Project Title</span>
              <input type="text" placeholder="Give your project a title" />
            </InputDiv>
            <InputDiv>
              <span>Project Description</span>
              <textarea placeholder="Tell us about your project" />
            </InputDiv>
            <InputDiv>
              <span>GitHub Repo Link</span>
              <input type="text" placeholder="Link Project to GitHub" />
            </InputDiv>
            <InputDiv>
              <span>Live URL</span>
              <input type="text" placeholder="The Live Link Of Your Project" />
            </InputDiv>
            <InputDiv>
              <span>Live URL</span>
              <input type="text" placeholder="The Live Link Of Your Project" />
            </InputDiv>
          </OtherInputDiv>
        </UploadsHold>
      </Wrapper>
    </Container>
  );
};

export default Share;

const Container = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  min-height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 70%;
  height: 70vh;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-weight: 800;
  margin: 20px 0;
`;
const UploadsHold = styled.div`
  height: 95%;
  width: 98%;
  background-color: aliceblue;
  display: flex;
  border: 1px solid lightgray;
`;
const UploadImageDiv = styled.div`
  width: 400px;
  height: 100%;
  background-color: aqua;
`;
const OtherInputDiv = styled.div`
  width: 520px;
  /* background-color: aquamarine; */
  display: flex;
  overflow: scroll;
  flex-direction: column;
  align-items: center;
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  input {
    height: 35px;
    width: 400px;
    border: 1px solid lightgray;
    outline: none;
    font-family: Montserrat;
    font-weight: 600;
    padding-left: 8px;
  }

  span {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  textarea {
    height: 100px;
    width: 400px;
    resize: none;
    border: 1px solid lightgray;
    outline: none;
    font-family: Montserrat;
  }
`;
