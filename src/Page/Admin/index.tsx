import React from 'react'
import * as S from "./Admin.styled"
import { Layout } from 'antd';
import Head from './components/Header';
const { Header, Footer, Sider, Content } = Layout;

type Props = {}

const Admin = (props: Props) => {
  return (
    <S.Container>
      <Head/>

    </S.Container>
  )
}

export default Admin