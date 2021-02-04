import React, { useEffect } from 'react'
import FormConsulta from '../../components/FormConsulta'

import { Container, Footer, Header } from './styles'

interface Props {
  toggleTheme(): void
}

const ConsultaChamado: React.FC<Props> = ({ toggleTheme }) => {
  useEffect(() => {
    document.title = `Portal Operacional - Consultar Chamado`
  }, [])
  return (
    <Container>
      <div className="header">
        <Header toggleTheme={toggleTheme} />
      </div>
      <div className="formulario">
        <FormConsulta />
      </div>
      <Footer />
    </Container>
  )
}

export default ConsultaChamado
