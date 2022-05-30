import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../../redux/features/auth/authSlice'
import { Button, Content, Form, Input, InputWrapper, Links, Text, Title, Wrapper } from './Register.styles'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const userNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const cPasswordRef = useRef()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)


  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/login')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const handleRegister = (e) => {
     e.preventDefault()

    if (passwordRef.current.value !== cPasswordRef.current.value) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        firstname: firstNameRef.current.value,
        lastname: lastNameRef.current.value,
        username: userNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      }

      dispatch(register(userData))
    }
  }


  return (
    <>
      <Wrapper>
        <Content>
          <Title>
            CREATE AN ACCOUNT
          </Title>
          <Form onSubmit={handleRegister}>
            <InputWrapper>
              <Input type= 'text' placeholder='first name' ref = {firstNameRef}/>
              <Input type= 'text' placeholder='last name' ref = {lastNameRef}/>
              <Input type= 'text' placeholder='usernname' ref = {userNameRef}/>
              <Input type= 'email' placeholder='email' ref = {emailRef}/>
              <Input type= 'password' placeholder='confirm' ref = {passwordRef}/>
              <Input type= 'password' placeholder='confirm password' ref = {cPasswordRef}/>
            </InputWrapper>
            <Text>
              By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </Text>
            <Button>
              CREATE
            </Button>
            <Links>
              <Link to={'/login'}>
                <p>LOGIN</p>
              </Link>
            </Links>
          </Form>
        </Content>

      </Wrapper>
    </>
  )
}

export default Register