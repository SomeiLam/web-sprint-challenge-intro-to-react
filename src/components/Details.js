import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const StyledDetails = styled.div`
    color: white;    

    .list {
        font-size: 1.5rem;
        color: #800080;
        text-align: center;
        display: flex;
        justify-content: center;
    }

    ul {
        list-style-type: none;
        text-align: left;
    }
`

const Details = props => {
    const {info} = props;
    console.log(info)
    return (
        <StyledDetails>
            <div className="list">
                <ul>
                    <li>Name: </li>
                    <li>Gender: </li>
                    <li>Height: </li>
                    <li>Mass: </li>
                    <li>Birth year: </li>
                    <li>Hair color: </li>
                    <li>Skin color: </li>
                    <li>Eye color: </li>
                </ul>
                <ul>
                    <li>{info.name}</li>
                    <li>{info.gender}</li>
                    <li>{info.height}</li>
                    <li>{info.mass}</li>
                    <li>{info.birth_year}</li>
                    <li>{info.hair_color}</li>
                    <li>{info.skin_color}</li>
                    <li>{info.eye_color}</li>
                </ul>
            </div>
                
        </StyledDetails>
        
    )
}

export default Details;