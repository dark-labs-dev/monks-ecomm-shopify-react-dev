import React, { useState } from 'react'
import { TextToggle, DescriptionText, DescriptionTextContainer, } from '../ProductRow/styles'

export default function InfoUi({ title, description, type }) {
    const [descriptionToggle, setDescriptionToggle] = useState(false)
    const [ingredientToggle, setIngredientToggle] = useState(false)

    function IngredientList({ list }) {
        const ingredients = list;
        const listItems = ingredients.map((ingredient) =>
            <li key={ingredient}>
                {ingredient}
            </li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

    return (<>
        {type === 'description' && <DescriptionTextContainer>
            <TextToggle
                aria-label="More Information"
                onClick={() => setDescriptionToggle(!descriptionToggle)}>{title}</TextToggle>
            {descriptionToggle && <DescriptionText>
                {description}
            </DescriptionText>
            }
        </DescriptionTextContainer>
        }

        {type === 'list' && <DescriptionTextContainer>
            <TextToggle
                aria-label="Ingredients"
                onClick={() => setIngredientToggle(!ingredientToggle)}>{title}</TextToggle>
            {ingredientToggle && <IngredientList
                list={description}
            />
            }
        </DescriptionTextContainer>}
    </>
    )
}
