import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

// KeyFrames for tooltip animation
const fadeIn = keyframes`
 from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
`

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  color: #cccccc; /* Poor contrast - light gray on light background */
  @media (force-colors: active) {
    color: WindowText;
  }
`

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`

const Input = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  background-color: #f0f0f0; /* Light background */
  color: #e0e0e0; /* Very light gray text - poor contrast */
  &:focus {
    border-color: #007bff;
  }
`

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #f5f5f5; /* Light gray text */
  background-color: #e8e8e8; /* Light gray background - poor contrast */
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:focus {
    border: 4px solid #ccc;
    border-radius: 5px;
    transition: border 0.2s ease;
    background-color: #d0d0d0; /* Still poor contrast */
  }
`

const ToolTip = styled.span`
  position: absolute;
  top: -35px;
  left: 0;
  background-color: #f8f8f8; /* Light background */
  color: #d0d0d0; /* Light gray text - poor contrast */
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  white-space: nowrap;
  z-index: 10;
  &:before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 10px;
    border-width: 5px;
    border-style: solid;
    border-color: #f8f8f8 transparent transparent transparent; /* Light border */
  }
`

const InputWithTooltip = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  &:hover ${ToolTip} {
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeIn} 0.3s ease;
  }
`

const ErrorMessage = styled.span<{ visible: boolean }>`
  color: #ffcccc; /* Light red - poor contrast */
  font-size: 16px;
  margin-top: 6px;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease;
  &:hover {
    border: 1px solid #ffcccc; /* Light red border */
  }
`

export const LoginForm: React.FC<{}> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const validateEmail = (value: string) => {
    console.log('validateEmail', value)
    return value.includes('@')
  }

  const validatePassword = (value: string) => {
    console.log('validateEmail', value)
    return value.length >= 16
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(false)
    if (!validateEmail(email) || !validatePassword(password)) {
      console.log('Invalid email or password')
      setError(true)
    }
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWithTooltip>
        <Label htmlFor="email">Email</Label>
        <ToolTip id="emailtooltip" aria-description="email tooltip">
          Enter a valid email address
        </ToolTip>
        <InputWrapper>
          <Input
            id="email"
            name="email"
            required
            aria-required="true"
            aria-label="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={(e) => console.log('focus', e.target)}
          />
        </InputWrapper>
      </InputWithTooltip>
      <InputWithTooltip>
        <Label htmlFor="password">Password</Label>
        <ToolTip id="tooltip-password" aria-description="password tooltip">
          Must be at least 16 characters long
        </ToolTip>
        <InputWrapper>
          <Input
            id="password"
            name="password"
            required
            aria-required="true"
            aria-label="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={(e) => console.log('focus', e.target)}
          />
        </InputWrapper>
      </InputWithTooltip>
      <SubmitButton type="submit">Login</SubmitButton>
      <ErrorMessage
        visible={error}
        aria-description="login status"
        id="login-status"
        aria-label="login-status"
      >
        Invalid email or password. Check the email and password requirements and try again.
      </ErrorMessage>
    </FormWrapper>
  )
}
