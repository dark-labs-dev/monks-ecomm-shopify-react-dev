import styled from '@emotion/styled'
import { breakpoints, colors } from '../../utils/styles'

export const GridRow = styled.div`
  display: grid;
  grid-template-column: repeat(1, 1fr);
  gap: 2.5rem;
  padding:0 1rem;
  padding-top:250px;
  @media (max-width: ${breakpoints.l}px) {
  padding: 250px  1rem 0 1rem;
  }
  @media (max-width: ${breakpoints.s}px) {
    padding: 300px  1rem 0 1rem;
    }
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom:solid 1px #fff;
`

export const Title = styled.h2`
  font-size: 1rem;
  text-align: left;
  margin:0;
  padding:0;
`


export const PriceTag = styled.h2`
  font-size: 1rem;
  text-align: left;
  margin:0;
  padding:0;
  padding-bottom:0.5rem;
  // :before {
  //   content: '- ';
}
`

export const DescriptionTextContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: start;
}`

export const DescriptionText = styled.div`
font-size:.7em;

}`

export const TextToggle = styled.button`
  display:flex;
  justify-content:center;
  cursor:pointer;
  font-size:1rem;
  text-decoration:NONE;  
  align-items: center;   
  width: max-content;
  margin:.5rem 0;
  padding:0;
  &:hover{
    color:${colors.color1};
  }`

export const DotToggle = styled.span`
}`

export const IngredientText = styled.p`

}`

// export const QuantityNum = styled.p`

// }`

// export const QuantityText = styled.p`

// }`

// export const Purchase = styled.p`

// }`