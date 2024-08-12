import { useRef } from 'react'
import api from '../../services/api.js'

import {
  Title,
  Container,
  Input,
  ContainerInputs,
  Form,
  InputLabel,
} from "./styles"

import Button from '../../components/Button'
import TopBackground from '../../components/Button/TopBackgraound/index.jsx'

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser(){

    await api.post('/usuarios', {

      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    })


  }

  return (

    <Container>
      <TopBackground/>

      <Form>
        <Title>Cadastrar Usuario</Title>


        <ContainerInputs>

          <div>
            <InputLabel>
              Nome <span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do Usuario" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade <span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do Usuario" ref={inputAge} />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            Email <span> *</span>
          </InputLabel>
          <Input type="email" placeholder="Email do Usuario" ref={inputEmail} />
        </div>



        <Button type='button' onClick={registerNewUser}>Cadastro Usuario</Button>

      </Form>

    </Container>

  )
}

export default Home
