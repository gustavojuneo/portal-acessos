import React from 'react'
import Dashboard from '../../components/DashBoard'
import Table from '../../components/TableGeral'
import { Container } from './styles'
interface Props {
  toggleTheme(): void
}

const Principal: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Dashboard
      title="Caixa Principal"
      description=""
      picture
      toggleTheme={toggleTheme}
    >
      <Container>
        <div className="table">
          <Table />
        </div>
      </Container>
    </Dashboard>
  )
}

export default Principal
