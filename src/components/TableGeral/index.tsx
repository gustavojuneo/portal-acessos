import React, { useEffect, useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import { CaixaGeral, valueFilter, check } from '../../assets/js/TableColumns'
import '@inovua/reactdatagrid-community/index.css'
import { Container, Button } from './styles'
import api from '../../services/api'

const Table: React.FC = () => {
  const columns = CaixaGeral
  const [pagination] = useState(true)
  const [data, setData] = useState([])
  const [selected, setSelected] = useState({})
  const defaultFilterValue: any = valueFilter
  const [filterValue, setFilterValue] = useState(defaultFilterValue)

  useEffect(() => {
    const getData = async (filterValue: any) => {
      const response = await api.get('/data')
      setData(response.data)
    }
    getData(filterValue)
  }, [filterValue])

  async function getUpdatedList() {
    const response = await api.get('/data')
    setData(response.data)
  }
  const toArray = (selected: any) =>
    Object.keys(selected).map((id: any) => id * 1)

  async function handleClick() {
    await api.put(`/atribuir`, toArray(selected))
    getUpdatedList()
  }

  const onSelectionChange = useCallback(({ selected }) => {
    setSelected(selected)
  }, [])

  const gridStyle = {
    minHeight: 750,
    backgroundColor: 'none'
  }
  return (
    <Container>
      <ReactDataGrid
        selected={selected}
        checkboxColumn={check}
        onSelectionChange={onSelectionChange}
        dataSource={data}
        pagination={pagination}
        columns={columns}
        idProperty="id"
        style={gridStyle}
        defaultFilterValue={defaultFilterValue}
        onFilterValueChange={setFilterValue}
      />
      <div className="button">
        <Button onClick={handleClick}>Atribuir a mim</Button>
      </div>
    </Container>
  )
}

export default Table
