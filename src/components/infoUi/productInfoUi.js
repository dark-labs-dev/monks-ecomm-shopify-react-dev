import React, { useState } from 'react'
import { TextToggle, DescriptionText, DescriptionTextContainer, IngredientList, IngredientText } from '../ProductRow/styles'
import DescriptionInfoUi from './descriptionInfoUi';
export default function ProductInfoUi({ title, description, type }) {
    const [descriptionToggle, setDescriptionToggle] = useState(true)
    const [ingredientToggle, setIngredientToggle] = useState(true)
    const [applicationToggle, setApplicationToggle] = useState(true)

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
        {type === 'description' && <DescriptionTextContainer>
            <TextToggle
                style={{ 'color': descriptionToggle && '#8A1B61' }}
                aria-label="More Information"
                onClick={() => setDescriptionToggle(!descriptionToggle)}>{title}</TextToggle>
            {descriptionToggle && <DescriptionInfoUi description={description} />}
        </DescriptionTextContainer>
        }

        {type === 'application' && <DescriptionTextContainer>
            <TextToggle
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
