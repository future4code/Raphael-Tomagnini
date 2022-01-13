import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Buttons from './Buttons'

const BodyContainer = styled.div`
   
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items:center;

`
const ImagePerfil = styled.img`
    height: 70%;
    width: 70%;

`


const Body = () => {

const [perfil, setPerfil] = useState({});    

useEffect(()=>{
    mostraPerfil()

},[])    

const mostraPerfil = () => {
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
    .then((res)=>{
    setPerfil(res.data.profile) 

    })
    .catch((err)=>{
        console.log(err)
    })

}
    return (
        <BodyContainer>
            <p>{perfil.name}</p>

        {/* {mostraPerfil()} */}
        <ImagePerfil src={perfil.photo}></ImagePerfil>
            <p>{perfil.bio}</p>
            
            <Buttons mostraPerfil={mostraPerfil}/>

        </BodyContainer>
    )
}

export default Body
