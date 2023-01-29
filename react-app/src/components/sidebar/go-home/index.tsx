import { BiWalk } from "react-icons/bi";
import { memo } from "react";
import styled from "styled-components";

export const SideBarGoHome = memo(() => {
  const handleClick = () => {
    window.location.href = "/welcome";
  };

  return (
    <Wrapper onClick={handleClick}>
      <BiWalk size={48}></BiWalk>
      <Title>下校</Title>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  /* padding-left: -6px;
  padding-right: -6px; */
  margin-bottom: 24px;
  display: flex;
  justify-content: space-evenly;

  :hover {
    cursor: pointer;
    color: blue;
  }
`;

const Title = styled.h2`
  height: 48px;
`;