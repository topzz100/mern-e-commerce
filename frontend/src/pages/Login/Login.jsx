import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../../redux/features/auth/authSlice'
import { Button, Content, Form, Input, InputWrapper, Links, Title, Wrapper } from './Login.styles'
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const usernameRef = useRef()
  const passwordRef = useRef()

  const { user, isError, isSuccess, message, isLoading} = useSelector((state) => state.auth)

   useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const handleLogin = ((e) => {
    e.preventDefault()
    const newData = {
      username : usernameRef.current.value,
      password: passwordRef.current.value
    }
    dispatch(login(newData))
  })

  return (
      <>
      <Wrapper>
        <Content>
          <Title>
            SIGN IN
          </Title>
          <Form onSubmit={handleLogin}>
            <InputWrapper>
              <Input type= 'text' placeholder='username' ref={usernameRef}/>
              <Input type= 'password' placeholder='password' ref={passwordRef}/>
              
            </InputWrapper>
            
            <Button>
              LOGIN
            </Button>
            <Links>
              <p>FORGOT PASSWORD?</p>
              <Link to={'/register'}>
              <p>CREATE NEW ACCOUNT</p>
              </Link>
            </Links>
{/*             
            <Links>
              <Link href='#'>FOGET PASSWORD?</Link>
              <Link href='#'>CREATE A NEW ACCOUNT</Link>
            </Links> */}
            
          </Form>
        </Content>

      </Wrapper>
    </>
  )
}

export default Login