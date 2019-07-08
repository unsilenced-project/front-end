import styled, { keyframes } from "styled-components";
import { FaRegWindowClose } from "react-icons/fa";
import {
  primary,
  danger,
  secondary,
  pale_green,
  black
} from "../../styled/variables";

const animatetop = keyframes`
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
`;
export const Backdrop = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 1900;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: ${props => (props.width ? props.width : "40%")};
  @media screen and (max-width: 500px) {
    width: 96%;
  }
  border: none;
  box-shadow: 0 1px 1.5rem rgba(0, 0, 0, 0.1);
  -webkit-animation-name: ${animatetop};
  -webkit-animation-duration: 0.2s;
  animation-name: ${animatetop};
  animation-duration: 0.2s;
  z-index: 2000;
  display: ${props => (props.show ? "block" : "none")};
`;

export const Header = styled.div`
  padding: 1rem;
  background: ${pale_green};
  color: white;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  color: white;
  margin: 0;
  padding: 0;
  font-size: 2.5rem;
`;
export const CloseButton = styled(FaRegWindowClose)`
  color: white;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: ${secondary};
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Body = styled.div`
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  color: ${black};
  p {
    text-align: center;
    padding: 1rem;
  }
`;

export const Footer = styled.div`
  padding: 1rem;
  background: ${pale_green};
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
`;

const Button = styled.button`
  background: coral;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.6rem;
  transition: background-color 650ms;
`;

export const ContinueBtn = styled(Button)`
  background-color: ${primary};
  margin-right: 0.8rem;
  &:hover {
    background: white;
    color: ${primary};
    border: 2px solid ${primary};
  }
`;
export const CancelBtn = styled(Button)`
  background-color: ${danger};
  &:hover {
    background: white;
    color: ${danger};
    border: 2px solid ${danger};
  }
`;
