import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'
import PeopleIcon from '@mui/icons-material/People';

const ContainerHeader = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;

`
const Image = styled.img`
  width: 50%;

`


const Header = () => {
    return (
        <div>
        <ContainerHeader>
        <Image src={logo}></Image>    
        <PeopleIcon sx={{ fontSize: 40 }}/>
        </ContainerHeader>  
        </div>
    )
}

export default Header
