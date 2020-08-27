import React from "react"
import styled from "styled-components"

const ExperienceCell = props => (
  <Container>
    <a target='_blank'  href={props.link}>
    <TopWrapper>
      <Logo src={props.image}></Logo>
      <Time>{props.time}</Time>
    </TopWrapper>
    <DetailsWrapper>
      <Company>{props.company}</Company>
      <Position>{props.position}</Position>
      <Details>{props.details}</Details>
    </DetailsWrapper>
    </a>
  </Container>
)
export default ExperienceCell

const Container = styled.div`
  width: 70%;
  margin: 40px auto;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 640px) {
    width: 90%;
    margin: 40px auto;
  }
`
const TopWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`

const Time = styled.p`
  color: rgba(255, 255, 255);
  background: rgba(0, 0, 0, 1.0);
  padding: 20px;
  border-bottom-left-radius: 20px;
  margin: 0;
  font-size: 18px;
  font-weight: 700;
`

const Logo = styled.img`
  height: 50px;
  margin: 20px 20px 0px;
`
const Company = styled.h3`
  color: black;
  margin: 0;
  font-size: 30px;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`
const Position = styled.h3`
  color: black;
  font-size: 28px;
  margin-top: 10px;
  font-weight: 200;
  @media (max-width: 640px) {
    font-size: 18px;
  }
`

const DetailsWrapper = styled.div`
  margin: 10px 24px 40px 24px;
`
const Details = styled.p`
  color: rgba(0, 0, 0, 0.8);
  margin: 0;
  font-size: 20px;
  font-weight: 430;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`