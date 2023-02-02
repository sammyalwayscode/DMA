import React from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
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
          <DescriptionBox>
            <DiscriptionBoxHold>
              <ProjectTitle>The Best Design Ever</ProjectTitle>
              <ProjectContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint? Sed
                quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
                rerum voluptates a cumque velit quibusdam sed amet tempora. Sit
                laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim
                commodi iusto libero magni deleniti quod quam consequuntur!
                Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam
                similique ad earum omnis ipsum saepe, voluptas, hic voluptates
                pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
                excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
                Voluptatem quaerat non architecto ab laudantium modi minima sunt
                esse temporibus sint culpa, recusandae aliquam numquam totam
                ratione voluptas quod exercitationem fuga. Possimus quis earum
                veniam quasi aliquam eligendi, placeat qui corporis!
              </ProjectContent>
            </DiscriptionBoxHold>
          </DescriptionBox>
          <LovePublishHold>
            <LoveIcon>
              <AiFillHeart />
            </LoveIcon>
            <ProjectTitleButtom>
              Behance Saas Redesign | Darkmode
            </ProjectTitleButtom>
            <LikesCommentHold>
              <IconNumHold>
                <Icons>
                  <AiFillHeart />
                </Icons>
                <IconsNum>20</IconsNum>
              </IconNumHold>
              <IconNumHold>
                <Icons>
                  <AiFillEye />
                </Icons>
                <IconsNum>413</IconsNum>
              </IconNumHold>
              <IconNumHold>
                <Icons>
                  <FaComment />
                </Icons>
                <IconsNum>12</IconsNum>
              </IconNumHold>
            </LikesCommentHold>

            <PublishDiv>Published: June 15 2020</PublishDiv>
          </LovePublishHold>
          <CommentsDiv>
            <CommentDivHold>
              <PostComments>
                <UserAva>
                  <img src="" alt="" />
                </UserAva>
                <TextAreaBtn>
                  <textarea placeholder="What are your thoughts on this project?" />
                  <AreaBtn>
                    <button>Post a Comment</button>
                  </AreaBtn>
                </TextAreaBtn>
              </PostComments>
              <hr />
              <AllComments>
                <UserComment>
                  <UserCommAva>
                    <img src="" alt="" />
                  </UserCommAva>
                  <UserCommDetails>
                    <UserNameDate>Olorunda Samuel | 2 minutes ago</UserNameDate>
                    <UserMainComment>
                      No highly saturated colors. Brilliant color balance!
                    </UserMainComment>
                  </UserCommDetails>
                </UserComment>
              </AllComments>
            </CommentDivHold>
          </CommentsDiv>
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageBox = styled.div`
  width: 100%;
  /* margin-bottom: 30px; */
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const DescriptionBox = styled.div`
  padding: 40px 0;
  background-color: #ffffff;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  align-items: center;
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

const DiscriptionBoxHold = styled.div`
  width: 80%;
  color: #696969;
  font-size: 20px;
`;

const ProjectTitle = styled.h1``;
const ProjectContent = styled.div``;
const LovePublishHold = styled.div`
  width: 100%;
  height: 290px;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoveIcon = styled.div`
  height: 80px;
  width: 80px;
  background-color: #ff0000;
  font-size: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  cursor: pointer;

  :hover {
    background-color: #da0600;
  }
`;
const ProjectTitleButtom = styled.div`
  margin: 20px 0;
  font-size: 24px;
  font-weight: 700;
`;
const LikesCommentHold = styled.div`
  display: flex;
  color: #959595;
`;
const IconNumHold = styled.div`
  display: flex;
  margin: 0 5px;
  margin-bottom: 25px;
  /* align-items: center; */
  /* background-color: aliceblue; */
`;
const Icons = styled.div`
  margin-right: 3px;
`;
const IconsNum = styled.div`
  font-size: 13px;
  font-weight: 600;
`;
// const ChecksHold = styled.div``;
// const CommentHold = styled.div``;
const PublishDiv = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #959595;
`;

const CommentsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const CommentDivHold = styled.div`
  width: 85%;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 30px 0;
`;
const PostComments = styled.div``;
const UserAva = styled.div``;
const TextAreaBtn = styled.div``;
const AreaBtn = styled.div``;
const AllComments = styled.div``;
const UserComment = styled.div``;
const UserCommAva = styled.div``;
const UserCommDetails = styled.div``;
const UserNameDate = styled.div``;
const UserMainComment = styled.div``;
