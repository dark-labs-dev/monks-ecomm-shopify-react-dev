import React, { useState } from 'react'
import { TextToggle, DescriptionText, DescriptionTextContainer, IngredientList, IngredientText } from '../infoUi/styles'
export default function ProductInfo({ title, description, type }) {
    const [descriptionToggle, setDescriptionToggle] = useState(false)
    const [ingredientToggle, setIngredientToggle] = useState(false)
    const [applicationToggle, setApplicationToggle] = useState(false)

    function IngredientListItems({ list }) {
        const ingredients = list;
        const listItems = ingredients.map((ingredient) =>
            <IngredientText key={ingredient}>
                {`${ingredient}, `}
            </IngredientText>
        );
        return (
            <IngredientList >{listItems}</IngredientList>
        );
    }
    return (<>
        {type === 'application' && <DescriptionTextContainer>
           test <TextToggle
                style={{ 'color': applicationToggle && '#8A1B61' }}
                aria-label="More Information"
                onClick={() => setApplicationToggle(!applicationToggle)}>{title}</TextToggle>
            {applicationToggle && <div>{description}</div>}
        </DescriptionTextContainer>
        }

        {type === 'list' && <DescriptionTextContainer>
            <TextToggle
                aria-label="Ingredients"
                style={{ 'color': ingredientToggle && '#8A1B61' }}
                onClick={() => setIngredientToggle(!ingredientToggle)}>{title}</TextToggle>
            {ingredientToggle && <IngredientListItems
                list={description}
            />
            }
        </DescriptionTextContainer>}
    </>
    )
}
