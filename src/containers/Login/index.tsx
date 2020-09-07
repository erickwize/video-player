import React from 'react'
import LoginForm from './Login'
import { IProps } from './Login.typed'

export default function (props: IProps) {
  return <LoginForm {...props} />
}