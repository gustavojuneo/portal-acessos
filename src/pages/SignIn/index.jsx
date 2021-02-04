import React, { useRef, useEffect, useState } from 'react'
import { useAuth } from '../../contexts/auth'
import * as Yup from 'yup'
import componentDidMount from '../../assets/js/componentDidMount'
import { LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha'
import { Container, Form, Buttons, Button, Input } from './styles'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const SignIn = ({ message }) => {
  componentDidMount()
  const formRef = useRef(null)
  const { signIn, loginError } = useAuth()
  const [type, setType] = useState('password')

  async function handleEye() {
    setType('text')
  }
  async function handleSlash() {
    setType('password')
  }

  async function doSubmit(data, { reset }) {
    const user_captcha = document.getElementById('captcha').value

    try {
      formRef.current.setErrors({})
      const schema = await Yup.object().shape({
        mat: Yup.string().required('A matricula é obrigatória!'),
        password: Yup.string().required('A senha é obrigatória!'),
        captcha: Yup.string().required('O valor é obrigatório!')
      })
      if (validateCaptcha(user_captcha) === true) {
        await signIn(data)
      } else {
        alert('O valor digitado está incorreto')
        document.getElementById('captcha').value = ''
      }
      await schema.validate(data, {
        abortEarly: false
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {}
        err.inner.forEach(error => {
          errorMessages[error.path] = error.message
        })
        formRef.current.setErrors(errorMessages)
      }
    }
  }
  // else {
  //   alert('Captcha Does Not Match');
  //   document.getElementById('captcha').value = "";
  // }
  useEffect(() => {
    document.title = `Faça seu Login`
  }, [])
  return (
    <Container>
      <div className="column left">
        <div className="login-form center">
          <div className="img-vivo">
            <h1>Uncontrol</h1>
          </div>
          <div className="form-control">
            <Form ref={formRef} onSubmit={doSubmit}>
              <Input name="mat" id="mat" placeholder="Usuario de Rede"></Input>
              <Input
                name="password"
                id="password"
                placeholder="Senha de Rede"
                type={type}
              >
                {type === 'password' ? (
                  <FaEye onClick={handleEye} />
                ) : (
                  <FaEyeSlash onClick={handleSlash} />
                )}
              </Input>
              <LoadCanvasTemplate />
              <Input
                name="captcha"
                id="captcha"
                placeholder="Insira o texto acima"
                type="text"
              ></Input>
              <span className="error-message">{loginError}</span>
              <Buttons>
                <Button type="submit">Entrar</Button>
              </Buttons>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  )
}
export default SignIn
