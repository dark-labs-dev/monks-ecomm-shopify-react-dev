import React from 'react'

export default function DescriptionInfoUi({description}) {
    return (
        <div>
           <h2> {description.descriptionTitle}</h2>
            
            <h3>Top Notes</h3>
            
            <p>{description.descriptionTopNote}</p>
            
            <h3>Base Notes</h3>
            
            <p>{description.descriptionHeartNote}</p>
            
            <h3>Top Notes</h3>
            
            <p>{description.descriptionBaseNote}</p>
        </div>
    )
}
