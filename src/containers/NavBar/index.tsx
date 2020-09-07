import React from 'react'
import NavBar from './NavBar';
import { IProps } from './NavBar.typed';

export default function (props: IProps) {
  return <NavBar {...props} />;
}