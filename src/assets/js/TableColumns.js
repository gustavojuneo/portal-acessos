import Logo from '../../assets/images/uncontrol.svg'
import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox'

export const check = CheckBox

export const ball = [
  { value: 'purple', label: 'Aleixo' },
  { label: 'gold', value: '' }
]
export const ballPurple = Logo
export const CaixaGeral = [
  { name: 'id', header: 'ID', defaultVisible: false },
  {
    name: 'color',
    header: '',
    width: 10,
    render: ({ value }) =>
      value === 'gold' ? (
        <div
          style={{
            borderRadius: '50%',
            backgroundColor: 'rgb(255,191,0)',
            display: 'flex',
            width: 10,
            height: 10,
            marginLeft: 8
          }}
        ></div>
      ) : (
        <div
          style={{
            borderRadius: '50%',
            backgroundColor: '#8257e6',
            display: 'flex',
            width: 10,
            height: 10,
            marginLeft: 8
          }}
        ></div>
      )
  },
  { name: 'nchamado', header: 'Numero do chamado' },
  { name: 'requisitante', header: 'Requisitante' },
  { name: 'group', header: 'Grupo' },
  { name: 'tipo', header: 'Tipo de solicitação' },
  { name: 'status', header: 'Status' },
  { name: 'created', header: 'Aberto em' }
]

export const MinhaCaixa = [
  { name: 'id', header: 'ID', editable: false, defaultVisible: false },
  {
    name: 'color',
    header: '',
    width: 10,
    render: ({ value }) =>
      value === 'gold' ? (
        <div
          style={{
            borderRadius: '50%',
            backgroundColor: 'rgb(255,191,0)',
            display: 'flex',
            width: 10,
            height: 10,
            marginLeft: 8
          }}
        ></div>
      ) : (
        <div
          style={{
            borderRadius: '50%',
            backgroundColor: '#8257e6',
            display: 'flex',
            width: 10,
            height: 10,
            marginLeft: 8
          }}
        ></div>
      )
  },
  { name: 'nchamado', header: 'Numero do chamado', editable: false },
  { name: 'requisitante', header: 'Requisitante', editable: false },
  { name: 'sistema', header: 'Sistema', editable: false },
  { name: 'tipo', header: 'Tipo de solicitação', editable: false },
  { name: 'massivo', header: 'Solicitação Massiva?', editable: false },
  {
    name: 'matricula',
    header: 'Beneficiario',
    editable: true
  },
  { name: 'espelho', header: 'Espelho', editable: false },
  { name: 'created', header: 'Aberto em', editable: false },
  { name: 'desc', header: 'Descrição' },
  { name: 'status', header: 'Status', editable: false }
]
const shouldComponentUpdate = () => true
export const Relatorio = [
  { name: 'id', header: 'ID', defaultVisible: false, shouldComponentUpdate },
  {
    name: 'color',
    header: '',
    width: 10,
    render: ({ value }) =>
      value === 'gold' ? (
        <div
          style={{
            borderRadius: '50%',
            backgroundColor: 'rgb(255,191,0)',
            display: 'flex',
            width: 10,
            height: 10,
            marginLeft: 8
          }}
        ></div>
      ) : (
        <div
          style={{
            borderRadius: '50%',
            backgroundColor: '#8257e6',
            display: 'flex',
            width: 10,
            height: 10,
            marginLeft: 8
          }}
        ></div>
      )
  },
  {
    name: 'nchamado',
    header: 'Numero do chamado',
    type: 'string',
    shouldComponentUpdate
  },
  {
    name: 'requisitante',
    header: 'Requisitante',
    type: 'string',
    shouldComponentUpdate
  },
  {
    name: 'group',
    header: 'Grupo do requisitante',
    type: 'string',
    shouldComponentUpdate
  },
  {
    name: 'tipo',
    header: 'Tipo de solicitação',
    type: 'string',
    shouldComponentUpdate
  },
  {
    name: 'massivo',
    header: 'Solicitação Massiva?',
    type: 'string',
    shouldComponentUpdate
  },
  {
    name: 'matricula',
    header: 'Beneficiario',
    type: 'string',
    shouldComponentUpdate
  },
  { name: 'status', header: 'Status', type: 'string', shouldComponentUpdate },
  {
    name: 'created',
    header: 'Aberto em',
    type: 'string',
    shouldComponentUpdate
  },
  {
    name: 'responsavel',
    header: 'Responsavel pelo chamado',
    type: 'string',
    shouldComponentUpdate
  }
]

export const valueFilter = [
  {
    name: 'nchamado',
    type: 'string',
    operator: 'contains',
    value: '',
    header: 'nchamado'
  },
  {
    name: 'requisitante',
    type: 'string',
    operator: 'contains',
    value: '',
    header: 'requisitante'
  },
  {
    name: 'group',
    type: 'string',
    operator: 'contains',
    value: '',
    header: 'group'
  },
  {
    name: 'tipo',
    type: 'string',
    operator: 'contains',
    value: '',
    header: 'tipo'
  },
  {
    name: 'massivo',
    type: 'string',
    operator: 'contains',
    value: '',
    header: 'massivo'
  },
  {
    name: 'matricula',
    header: 'Beneficiario',
    type: 'string',
    operator: 'contains',
    value: ''
  },
  {
    name: 'status',
    header: 'Status',
    type: 'string',
    operator: 'contains',
    value: ''
  },
  {
    name: 'created',
    type: 'string',
    operator: 'contains',
    value: '',
    header: 'created'
  },
  {
    name: 'responsavel',
    type: 'string',
    operator: 'contains',
    value: '',
    header: 'responsavel'
  },
  {
    name: 'name',
    header: 'Nome',
    type: 'string',
    value: '',
    operator: 'contains'
  },
  {
    name: 'matricula',
    header: 'Matricula',
    type: 'string',
    value: '',
    operator: 'contains'
  },
  {
    name: 'cargo',
    header: 'Cargo',
    type: 'string',
    value: '',
    operator: 'contains'
  },
  {
    name: 'email',
    header: 'E-mail',
    type: 'string',
    value: '',
    operator: 'contains'
  },
  {
    name: 'super_id',
    header: 'Perfil',
    type: 'string',
    value: '',
    operator: 'contains'
  },
  {
    name: 'color',
    header: '',
    type: 'string',
    value: '',
    operator: 'contains'
  }
]

export const users = [
  {
    name: 'id',
    header: 'ID',
    defaultVisible: false,
    shouldComponentUpdate,
    editable: false
  },
  {
    name: 'name',
    header: 'Nome',
    type: 'string',
    shouldComponentUpdate,
    editable: false
  },
  {
    name: 'matricula',
    header: 'Matricula',
    type: 'string',
    shouldComponentUpdate,
    editable: false
  },
  {
    name: 'email',
    header: 'E-mail',
    type: 'string',
    shouldComponentUpdate,
    editable: false
  },
  {
    name: 'cargo',
    header: 'Cargo',
    type: 'string',
    shouldComponentUpdate,
    editable: false
  },
  {
    name: 'group',
    header: 'Grupo',
    type: 'string',
    shouldComponentUpdate,
    editable: false
  },
  {
    name: 'super_id',
    header: 'Perfil',
    type: 'string',
    shouldComponentUpdate,
    editable: true
  }
]

export const systems = [
  {
    name: 'id',
    header: 'ID',
    defaultVisible: false,
    shouldComponentUpdate,
    editable: false
  },
  {
    name: 'label',
    header: 'Nome do Sistema',
    defaultVisible: true,
    shouldComponentUpdate,
    editable: false
  }
]

export const checkboxColumn = {
  renderCheckbox: (checkboxProps, cellProps) => {
    const { onChange, checked } = checkboxProps

    const background = !checked ? '#313943' : '#7986cb'
    const border = checked === false ? '2px solid #7C8792' : '2px solid #7986CB'

    return (
      <div
        style={{
          cursor: 'pointer',
          background,
          borderRadius: '50%',
          height: '24px',
          width: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border,
          fontSize: 12,
          color: checked === false ? 'inherit' : '#E8E8E8'
        }}
        onClick={e => {
          e.stopPropagation()
          onChange(!checked)
        }}
      >
        {checked === false ? '' : checked === true ? 'X' : '--'}
      </div>
    )
  }
}
