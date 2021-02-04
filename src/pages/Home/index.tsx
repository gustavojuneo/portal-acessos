import React, { useRef, useState, useEffect, useContext } from 'react'
import { FormHandles } from '@unform/core'
import ImageInput from '../../components/ImageInput'
import {
  Container,
  Form,
  Input,
  Header,
  Button,
  Footer,
  Select,
  NewIncidentBox,
  NewInc
} from './styles'
import api from '../../services/api'
import { massivo } from '../../assets/js/options'
import darkImg from '../../assets/images/darkBanner.svg'
import lightImg from '../../assets/images/Banner.svg'
import { ThemeContext } from 'styled-components'

interface Props {
  toggleTheme(): void
  storageMat: string
  resImg: SVGElement
}

const Home: React.FC<Props> = ({ toggleTheme, ...rest }) => {
  const [img, setImg] = useState('')
  const [system, setSystem] = useState([])
  const [type, setType] = useState([])
  const [on, setOn] = useState(false)
  const { title } = useContext(ThemeContext)
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState('')
  const [sheet, setSheet] = useState('')
  const [resImg, setResimg] = useState<Props | any>(null)
  const formRef = useRef<FormHandles>(null)
  async function validaTheme() {
    if (title === 'dark') {
      setImg(darkImg)
    } else {
      setImg(lightImg)
    }
  }

  async function handleSubmit(data: any) {
    if (!data.file) {
      const { data: response } = await api.post('/insert/data', data)
      setMessage(response.status_message)
      setResimg(response.img)
    }
    if (data.file) {
      const fd = new FormData()
      fd.append('file', data.file, data.name)
      fd.append('requisitante', data.requisitante)
      fd.append('sistema', data.sistema)
      fd.append('massivo', data.massivo)
      fd.append('tipo', data.tipo)
      fd.append('matricula', data.matricula)
      fd.append('espelho', data.espelho)
      const { data: response } = await api.post('/insert', fd, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      setMessage(response.status_message)
      setSheet(response.data)
    }
  }

  async function handleMass(value: string) {
    if (value === 'Sim') {
      setOn(true)
    } else {
      setOn(false)
    }
  }
  const [mat, setMat] = useState('')
  useEffect(() => {
    document.title = `Portal Operacional - Home`
    const storageMat = sessionStorage.getItem('mat')?.toString()
    setMat(`${storageMat}`)

    const getSystems = async () => {
      const response = await api.get('/getSystems')
      setSystem(response.data)
    }
    const getTypes = async () => {
      const response = await api.get('/getTypes')
      setType(response.data)
    }

    getSystems()
    getTypes()
  }, [])

  return (
    <Container onLoad={validaTheme} {...rest}>
      <div className="header">
        <Header toggleTheme={toggleTheme} />
      </div>
      <div className="main center">
        <img src={img} alt="Banner" className="banner" />
      </div>
      <div className="form center">
        <Form
          encType="multipart/form-data"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <Input
            name="requisitante"
            placeholder="Requisitante"
            defaultValue={mat}
            disabled
          ></Input>
          <Select
            name="tipo"
            placeholder="Tipo de solicitação"
            options={type}
          ></Select>
          <Select
            name="sistema"
            placeholder="Sistema"
            options={system}
          ></Select>
          <Select
            name="massivo"
            placeholder="Massivo?"
            options={massivo}
            getOptionValue={({ id }: any) => id}
            onChange={({ value }: any) => handleMass(value)}
          ></Select>
          {!on && <Input name="matricula" placeholder="Login"></Input>}
          <Input name="espelho" placeholder="Login espelho"></Input>
          {on === true && (
            <div>
              <Button type="">Planilha exemplo</Button>
            </div>
          )}
          {on === true && (
            <div>
              <ImageInput name="file">Enviar planilha</ImageInput>
            </div>
          )}

          <Button
            type="submit"
            onClick={() => {
              setShowModal(true)
            }}
          >
            Abrir chamado
          </Button>
          <NewIncidentBox show={showModal}>
            <div
              className="background"
              onClick={() => {
                setShowModal(false)
              }}
            ></div>
            <button
              onClick={() => {
                setShowModal(false)
              }}
            ></button>
            <NewInc message={message} />
          </NewIncidentBox>
        </Form>
      </div>
      <Footer />
    </Container>
  )
}

export default Home
