import React, { useEffect, useState } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import { Container } from './styles'
import api from '../../services/api'
import { MinhaCaixa } from '../../assets/js/TableColumns'

interface DataProps {
  massivo: string
  matricula: string
}

const Table: React.FC = () => {
  const [pagination] = useState(true)
  const [data, setData] = useState<DataProps | any>([])
  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/mydata/closed')
      setData(response.data)
    }
    getData()
  }, [])

  const gridStyle = {
    minHeight: 750,
    backgroundColor: 'none'
  }

  const columns = MinhaCaixa

  return (
    <Container>
      <ReactDataGrid
        dataSource={data}
        pagination={pagination}
        columns={columns}
        idProperty="id"
        style={gridStyle}
      />
    </Container>
  )
}

export default Table
