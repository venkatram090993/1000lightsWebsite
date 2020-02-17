import React from "react"
import styled from "@emotion/styled"

const Img = styled("img")`
  display: block;
`

const Wrapper = styled("div")`
  display: flex;
  width: 40%;
  margin: 10;

  @media only screen and (max-width: 767px) {
    width: 40%;
  }

  @media only screen and (max-width: 50rem) {
    width: 40%;
  }

  @media only screen and (max-width: 425px){
      width: 50%;
  }
`

const Images = ({ src }) => {
  return (
    <Wrapper>
      <Img src={src} />
    </Wrapper>
  )
}

export default Images
