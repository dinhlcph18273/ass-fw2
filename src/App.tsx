import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import * as S from './App.styled' 
import Footer from './components/Footer'

function App() {

  return (
  <S.Container>
     <div>
        <Menu/>
    </div>
    <S.Header>
        <Header/>
    </S.Header>

    <S.Foot>
      <Footer/>
    </S.Foot>
  </S.Container>  
  )
}

export default App
