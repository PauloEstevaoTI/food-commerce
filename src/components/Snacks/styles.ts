import {darken} from 'polished'
import styled from "styled-components";

export const Container = styled.div`

  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1.75rem;

  @media(max-width: 500px ){
    grid-template-columns: 1fr;
  }

  .snack{
    position: relative;
    background-color: ${({theme}) => theme.colors.black};
    padding: 1.75rem 1.5rem;
    border-radius: 4px;

    h2{
      margin-bottom: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
      color: ${({theme}) => theme.colors.white};

    }

    img {
      object-fit: cover;
      width: 100%;
      height: 11.25rem;
      border-radius: 4px;
      margin-bottom: .375rem;
    }

    p{
      font-size: .875rem;
      color: ${({theme}) => theme.colors.white};
    }

    div{
      margin-top: .875rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      strong{
        font-size: 2rem;
        font-weight: 500;
        color: ${({theme}) => theme.colors.white};
      }

      button{
        background-color: ${({theme}) => theme.colors.red};
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        font-weight: bold;

        svg{
        stroke: ${({theme})=>theme.colors.white};
        width: 1.5rem;
        height: 1.5rem;

      }

      &:hover{
        background: ${darken(.1, '#AA2424')};
      }

      }



    }

  }

`
