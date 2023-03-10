import { memo } from "react";
import styled from "styled-components";

export const SideBarRegister = memo(() => {
  const handleClick = () => {
    window.location.href = "/new/student";
  };

  return (
    <Wrapper onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 11h6m-3 -3v6" />
      </svg>
      <Title>新入生</Title>
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
