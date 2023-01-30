import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import styled from "styled-components";
const Home = () => {
  return (
    <Container>
      <Wrapper>
        <DisplayCards>
          <ImageDiv>
            <img src="" alt="" />
          </ImageDiv>
          <NameLikeDiv>
            <Top>The Git Guildians...</Top>
            <LikeComment>
              <LikeHold>
                <Icon>
                  <AiFillHeart />
                </Icon>
                <LikeNum>20</LikeNum>
              </LikeHold>
              <CommentHold>
                <Icon>
                  <FaComment />
                </Icon>
                <CommentNum>34</CommentNum>
              </CommentHold>
            </LikeComment>
          </NameLikeDiv>
        </DisplayCards>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 85%;
`;
const DisplayCards = styled.div``;
const ImageDiv = styled.div``;
const NameLikeDiv = styled.div``;
const Top = styled.div``;
const LikeComment = styled.div``;
const LikeHold = styled.div``;
const Icon = styled.div``;
const LikeNum = styled.div``;
const CommentHold = styled.div``;
const CommentNum = styled.div``;
