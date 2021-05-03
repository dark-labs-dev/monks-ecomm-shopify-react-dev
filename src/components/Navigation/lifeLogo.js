import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { DefaultGrid } from './defaultGrid'
import useTimer from "./useTimer";

export default function LifeLogo() {
    const [count, setCount] = useState(0)

    const TitleImage = styled.svg`
    width:100%;
    height:auto;
    padding-top:1rem;
    max-width:250px;
    `

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         let nextState = (count <= 2) ? (count + 1) : 0

    //         setCount(nextState);
    //     }, 2000);
    //     console.log(count)
    //     return () => clearInterval(interval);
    // }, [count]);




    function Grid({ grid, toggleLife }) {
        return (
            <TitleImage viewBox="0 0 744 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                { grid.map((cell, id) => {
                    return (
                        <path d={cell.d} key={id} fill={"black"}
                        // onClick={() => updateLogoSet(`id${index}`, logoIconSet)} 
                        />
                    )
                })}
            </TitleImage >
        )
    }

    return (

        <>
            <Grid
                grid={DefaultGrid}
            />
        </>
    )
}
