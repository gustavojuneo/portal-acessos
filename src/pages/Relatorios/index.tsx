import React from 'react'
import Dashboard from '../../components/DashBoard'
import Table from '../../components/Relatorios'
import { Container } from './styles'
interface Props {
  toggleTheme(): void
}

const AllData: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Dashboard
      title="Relatórios"
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

export default AllData
