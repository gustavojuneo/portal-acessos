import React, { useEffect, useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import { Container, Button } from './styles'
import api from '../../services/api'
import { MinhaCaixa } from '../../assets/js/TableColumns'

interface DataProps {
  massivo: string
  matricula: string
}

const Table: React.FC = () => {
  const [pagination] = useState(true)
  const [data, setData] = useState<DataProps | any>([])
  const [selected, setSelected] = useState<DataProps | any>({})
  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/mydata')
      setData(response.data)
    }
    getData()
  }, [])

  async function getUpdatedList() {
    const response = await api.get('/mydata')
    setData(response.data)
  }
  const toArray = (selected: any) =>
    Object.keys(selected).map((id: any) => id * 1)

  async function handleClick() {
    await api.post(`/fechar`, toArray(selected))
    getUpdatedList()
  }

  const onSelectionChange = useCallback(({ selected }) => {
    setSelected(selected)
  }, [])

  const sel = Object.values(selected)
    .map((massivo: any) => massivo.massivo)
    .toString()
  const sel2 = Object.values(selected)
    .map((matricula: any) => matricula.matricula)
    .toString()
  const download = () => {
    if (selected) {
      if (sel === 'Sim') {
        const downloadEmployeeData = () => {
          fetch(`http://localhost:3333/uploads/${sel2}`).then(response => {
            response.blob().then(blob => {
              let url = window.URL.createObjectURL(blob)
              let a = document.createElement('a')
              a.href = url
              a.download = `${sel2}`
              a.click()
            })
            //window.location.href = response.url;
          })
        }
        downloadEmployeeData()
      }
    }
  }

  const onEditComplete = useCallback(
    ({ value, columnId, rowIndex }) => {
      const edit = [...data]
      edit[rowIndex] = Object.assign({}, edit[rowIndex], {
        [columnId]: value
      })
      api.put(`/edit-row`, edit[rowIndex])
      setData(edit)
      getUpdatedList()
    },
    [data]
  )

  const gridStyle = {
    minHeight: 750,
    backgroundColor: 'none'
  }

  const columns = MinhaCaixa

  return (
    <Container>
      <ReactDataGrid
        selected={selected}
        checkboxColumn
        onSelectionChange={onSelectionChange}
        editable={true}
        onEditComplete={onEditComplete}
        dataSource={data}
        pagination={pagination}
        columns={columns}
        idProperty="id"
        style={gridStyle}
      />
      <div className="button">
        <Button onClick={handleClick}>Fechar chamado</Button>
        {sel === 'Sim' && <Button onClick={download}>Download</Button>}
      </div>
    </Container>
  )
}

export default Table
