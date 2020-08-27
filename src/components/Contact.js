import React from "react"
import styled from "styled-components"

const Contact = props => (
  <Container target='_blank' href={props.link}>
    <Logo src={props.logo}></Logo>
    <Title>{props.title}</Title>
  </Container>
)

export default Contact

const Container = styled.a`
  position: relative;
  width: 128px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 640px) {
    width: 82px;
  }
`

const Logo = styled.img`
  width: 80px;
  margin: 10px auto 0 auto;
  @media (max-width: 640px) {
    width: 50px;
  }
`

const Title = styled.p`
  font-weight: 500;
  color: black;
  text-align: center;
`