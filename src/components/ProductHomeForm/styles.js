import styled from '@emotion/styled'

export const Button = styled.button`
    font-weight: light;
    padding:0;
    margin;
    font-size:.5rem;
}
`

export const PurchaseButton = styled.button`
    font-weight: bold;
    padding:0;
    margin;
    background:#000;
    color:#fff;
    text-decoration: none;
    padding:.2rem 1rem;
    border:solid .15rem #000;
    &:hover{
      background:#fff;
      color:#000;
    }`

export const Input = styled.input`
    font-size:1rem;
    border:none;
    background:transparent;
    text-align:center;
    max-width:100px
    font-weight: bolder;
    padding:0;
    margin;
}
`

export const PurchaseUi = styled.div`
    font-size:1rem;
    border:none;
    background:transparent;
    text-align:center;
    display:flex;
    align-items: center;
    justify-content: left;
    margin:1.5rem 0;
}
`

export const PurchaseText = styled.button`
    font-size:1rem;
    background:none;
    border:none;
    text-decoration:underline;
    &:hover {
        color: white;
      }

}
`
