import styled from "styled-components"

export const Main = styled.main`
    width: 100%;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const NotfoundContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2rem;    
    width: 100%;
    box-sizing: border-box;
    padding: 2rem;
    margin:2rem;
    position:relative;
    gap:2rem;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-evenly;
      }
`

export const NotfoundTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap: 2rem;

    @media (min-width: 768px) {
        align-items:flex-start;
        height: 40rem;
        justify-content: space-around;
      }
`
export const NotfoundTitle = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 0.035em;
    margin:0;

    @media (min-width: 768px){
        font-size: 84px;
    }
`

export const NotfoundSubtitle = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    font-size: 24px;
    margin:0;

    @media (min-width: 768px){
        font-size: 5.8rem;
        width:10ch;
    }

`

export const BackBtn = styled.button`
    font-size: 2.4rem;
    font-weight: 700;
    width: fit-content;
    height: 4.8rem;
    border-radius: 10px;
    background-color: #FD9951;
    border: none;
    color: #FEFEE3;
    padding: 0 1rem;
    

    &:hover {
        background-color: transparent;
        border: solid 1.5px #FD9951;
        color:  #FD9951;
        cursor: pointer;
    }
`

export const NotfoundImg = styled.img`
    width:15rem;
    border-radius: 2rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    @media (min-width: 768px){
        width: 35rem;
    }
`

