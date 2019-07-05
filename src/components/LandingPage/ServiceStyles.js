import styled, { css } from "styled-components";
import {
  white_color,
  primary_color,
  black_color
} from "../../components/generalStyles/variables";
import {
  flexColum,
  transition,
  mobileWidth
} from "../../components/generalStyles/reusables";
import { FaComment } from "react-icons/fa";

const iconStyle = css`
  color: ${primary_color};
`;

export const HandsFa = styled(FaComment)`
  ${iconStyle};
`;

export const ServicesContainer = styled.section`
  ${flexColum};
  width: 100%;
  margin: auto;
  padding: 3rem 0;
  background-color: ${white_color};
`;

export const Services = styled.div`
  width: 70%;
  ${flexColum};
  flex-direction: row;
  justify-content: space-between;
  color: ${black_color};
  margin: auto;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    width: 100%;
    padding: 1.5rem;
  }
`;

export const Service = styled.div`
  width: 46%;
  padding: 1rem;
  ${mobileWidth};
  transition: all 1s;
  article {
    ${flexColum};
    width: 100%;
    h3 {
      font-size: 1.6rem;
      color: ${black_color};
      padding-top: 0.7rem;
      text-align: center;
      position: relative;
      padding-bottom: 1rem;

      &::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 30%;
        background-color: ${primary_color};
        bottom: 0;
        right: 20px;
      }

      &:hover {
        color: ${primary_color};
        ${transition};
      }
    }
    p {
      line-height: 1.3;
      position: relative;
      margin: 1em auto;
      width: 100%;
      max-height: 200px;
      font-size: 1.2rem;
      overflow: hidden;
      -webkit-transition: max-height 0.5s ease;
      transition: max-height 0.5s ease;
      text-align: justify;
      &.show-all {
        max-height: 100%;
      }
    }
  }
`;
// export const ToggleBtn = styled.a`
//   font-size: 1.3rem;
//   padding: 0.8rem 1rem;
//   width: 100px;
//   border: 2px solid ${primary_color};
//   background: white;
//   border-radius: 6px;
//   color: ${primary_color};
//   text-decoration: none;
//   transition: all 1s;
//   &:hover {
//     text-decoration: none;
//     width: 150px;
//     background: ${primary_color};
//     color: white;
//   }
// `;
