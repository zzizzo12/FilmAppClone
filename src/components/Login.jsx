import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne
            src="images/cta-logo-one.svg"
            alt="Hulu, Disney and ESPN+"
          />
          <Signup>GET ALL THERE</Signup>
          <DescriptionText>
            Get Premier Access to Raya and the Last Dragon for an additional
            free with a Disney+ subscription. As of 22/04/2021, the price of
            Disney+ and The Disney Bundle will increase by 1$
          </DescriptionText>
          <CTALogoTwo
            src="images/cta-logo-two.png"
            alt="Hulu, Disney, Pixar, Marvel and NatGeo"
          />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  height: 100%;
  backdround-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
    margin-bottom: 2vw;
  max-width: 650px;
    flex-wrap: wrap;
  display: flex;
  flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const Signup = styled.a`
  font-weight: bold;
  background-color: #0063e5;
  color: #f9f9f9;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  max-width: 600px;

  &:hover {
    background-color: #0483ee;
  }
`;

const DescriptionText = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 14px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  max-width: 600px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
