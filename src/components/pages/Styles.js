import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
`;

export const Entity = styled.div`
  color: #070707;
  border: 1px solid #070707;
  max-width: 1200px;
  width: 99%;
  margin-bottom: 10px;
  margin: auto;
  &:first-of-type {
    margin-top: 1.5em;
  }
`;
export const Inner = styled.div`
  padding: 75px 40px;
  max-width: 1000px;
  width: 100%;
  margin: auto;
  flex-direction: column;
  display: flex;

  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
`;
export const Question = styled.div`
  font: 25px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  font-weight: normal;
  background: white;
  padding: 0.75em 1.12em;
  align-items: center;

`;
export const Text = styled.p`
  max-height: 1200px;
  font-size: 16px;
  line-height: normal;
  background: white;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  white-space: pre-wrap;
  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
export const Header = styled.h1`
  color: #070707;
  line-height: 1;
  margin-top: 0 !important;
  font-size: 45px;
  margin-bottom: 9px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 33px;
  }

  color: #070707;
`;
export const Footer = styled.p`
  color: #070707;
  line-height: 1;
  margin-top: 0 !important;
  font-size: 40px;
  margin-bottom: 9px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 33px;
  }

  color: #070707;
`;