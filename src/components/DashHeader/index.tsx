import React from 'react'

import { Container, Page, Description } from './styles'

interface Props {
  title: string
  description: string
}

const Header: React.FC<Props> = ({ title, description }) => {
  return (
    <Container>
      <Page>
        <strong>{title}</strong>
      </Page>
      <Description>{description}</Description>
    </Container>
  )
}

export default Header
