import styled, { css } from "styled-components";
import {
  primary_color,
  white_color,
  mobile_width,
  gray_color
} from "../../components/generalStyles/variables";
import { flexColum } from "../../components/generalStyles/reusables";

export const Section = styled.section`
  background: ${primary_color};
  ${flexColum};
  padding: 4rem 1rem;
  color: darken(${white_color}, 10%);
`;
export const Container = styled.div`
  width: 70%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const Article = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  border: 1px solid ${gray_color};
  padding: 2rem;
  margin: 2rem auto;
  border-radius: 6px;
  transition: 1s all;
  &:hover {
    transform: scale(1.01);
  }
  @media (max-width: 500px) {
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 2rem auto;
    padding: 2rem;
  }
`;

export const TextBox = styled.div`
  width: 80%;
  ${mobile_width};
`;
export const P = styled.p`
  line-height: 1.5;
  text-align: justify;
  font-size: 1.3rem;
  color: ${white_color};
`;
export const Image = styled.img`
  border-radius: 50%;
  border: 4px solid ${gray_color};
  width: 100px;
  height: 100px;
  @media (max-width: 500px) {
    margin-bottom: 1rem;
  }
`;
