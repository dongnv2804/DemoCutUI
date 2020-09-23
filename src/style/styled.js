import styled from "styled-components";
import React from "react";
import { Container, Button } from "react-bootstrap";

const ButtonApp = ({ className, children, id, type }) => (
  <Button variant="dark" type={type} id={id} className={className}>
    {children}
  </Button>
);
export const ButtonStyle = styled(ButtonApp)`
  font-size: 18px;
  font-weight: bold;
  font-family: Roboto;
  cursor: pointer;
  color: white;
  padding: 15px 40px;
  background: ${(props) => props.background};
  border: ${(props) => props.border};
`;

ButtonStyle.defaultProps = {
  background: "transparent",
  border: "1px solid white",
};

export const HeadlineLg = styled.h2`
  font-family: Josefin Sans;
  font-size: 60px;
  color: #6a585b;
  font-weight: normal;
`;

export const Headlineunder = styled.h2`
  margin-bottom: 30px;
  text-shadow: 0 1px 0 #fff;
  padding: 0px;
  font-family: Josefin Sans;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  direction: ltr;
  font-size: 40px;
  color: #aba1a3;
`;

export const TitleBanner = styled.h1`
  margin-bottom: 0;
  color: white;
  font-size: 70px;
  font-weight: 400;
`;

export const ContentTitle = styled.h2`
  margin-bottom: 0;
  color: white;
  font-size: 50px;
`;
export const ButtonScroll = styled.div`
  position: absolute;
  margin-top: -20px;
  z-index: 100;
  left: 48.5%;
  border: 0px solid rgb(0, 0, 0);
  background-color: transparent;
  text-align: center;
  border-top-left-radius: 0;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  -moz-box-shadow: 0px 0px 0px #ffffff;
  -webkit-box-shadow: 0px 0px 0px #ffffff;
  box-shadow: 0px 0px 0px #ffffff;
`;

export const DragableHeadlineh4 = styled.h4`
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 25px;
  font-size: 28px;
  color: #393d3e;
`;
export const DragBody = styled.div`
  margin-top: 35px;
  width: 75%;
`;
export const Underline = styled.div`
  height: 1px;
  width: 260px;
  border: 0px solid rgb(0, 0, 0);
  background-color: #e8e5e1;
  margin-left: 45px;
  box-shadow: 0px 0px 0px #ffffff;
  border-top-left-radius: 0;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  text-align: center;
`;

export const UnderlineFooter = styled.div`
  margin: auto;
  margin-top: 60px !important;
  height: 1px;
  width: 960px;
  border: 0px solid rgb(0, 0, 0);
  background-color: #f1593c;
  box-shadow: 0px 0px 0px #ffffff;
`;

export const BodyFooter = styled.div`
  padding-top: 50px;
  text-align: center !important;
`;

export const DragShape = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  height: 110px;
  width: 110px;
  border: 5px solid ${(props) => (props.active ? "#0eb5a3" : "#e8e5e1")};
  background-color: ${(props) => (props.active ? "#11cab6" : " #ffffff")};
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
`;

export const Footer2 = styled.div`
  text-align: center;
  border-top: 1px solid #d6d6d6;
  background-color: #212121;
  height: 20px;
  line-height: 20px;
  width: 100%;
  position: fixed;
  bottom: 0;
  a {
    color: white;
    text-decoration: none;
  }
`;
export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

export const FlexCol25 = styled.div`
  height: 25%;
`;

export const ProfileImg = styled.div`
  margin: auto;
  height: 90px;
  width: 90px;
  border: 0px solid rgb(0, 0, 0);
  background-color: transparent;
  margin-top: -45px;
`;

export const HeadProfie = styled.div`
  text-align: center;
`;

export const NameProfile = styled.h3`
  font-family: Roboto;
  font-weight: bold;
  text-decoration: none;
  font-style: normal;
  text-align: center;
  direction: ltr;
  font-size: 18px;
  color: rgb(0, 0, 0);
`;
export const PositionProfile = styled.h5`
  font-family: Roboto;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  text-align: center;
  direction: ltr;
  font-size: 14px;
  color: #8e8386;
`;

export const HeadlineFooterTop = styled.div`
  h2 {
    font-family: Josefin Sans;
    font-weight: normal;
    text-decoration: none;
    font-style: normal;
    direction: ltr;
    font-size: 50px;
    color: #ffffff;
  }
`;

export const HeadlineFooterBottom = styled.div`
  h2 {
    font-family: Josefin Sans;
    font-weight: normal;
    text-decoration: none;
    font-style: normal;
    direction: ltr;
    font-size: 30px;
    color: #ffffff;
  }
`;

export const ContentFooter = styled.div`
  span {
    color: white;
    font-size: 14px;
  }
  p {
    margin-top: 1;
  }
`;
