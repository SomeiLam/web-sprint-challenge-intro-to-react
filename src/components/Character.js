// Write your Character component here
import React, { useState } from 'react';
import Details from './Details';
import styled, { keyframes } from 'styled-components';

const fontKf = keyframes`
    0% {
        text-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white, 1px 1px 1px white,
        0 0 3px white, 0 0 8px white, 0 0 16px white,
        0 0 10px #FF9E9E, 0 0 20px #FF9E9E, 0 0 40px #FF9E9E, 0 0 60px #FF9E9E, 0 0 80px #FF9E9E, 0 0 100px #FF9E9E;
    }
    50% {
        text-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white, 1px 1px 1px white,
        0 0 5px white, 0 0 12px white, 0 0 22px white,
        0 0 20px #FF9E9E, 0 0 30px #FF9E9E, 0 0 60px #FF9E9E, 0 0 80px #FF9E9E, 0 0 100px #FF9E9E, 0 0 150px #FF9E9E;
    }
    100% {
        text-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white, 1px 1px 1px white,
        0 0 3px white, 0 0 8px white, 0 0 16px white,
        0 0 10px #FF9E9E, 0 0 20px #FF9E9E, 0 0 40px #FF9E9E, 0 0 60px #FF9E9E, 0 0 80px #FF9E9E, 0 0 100px #FF9E9E;
    }
`

const buttonKf = keyframes`
    25%{transform: translateX(-25px) translateY(-35px);
            width: 15px;
            height: 15px;}
    50% {transform: translateX(-55px) translateY(-30px);
            width: 5px;
            height: 5px;}
    75% {transform: translateX(-85px) translateY(-35px);
            width: 15px;
            height: 15px;}
`

const StyledCharacter = styled.div`
    width: 90%;
    margin: 0 auto;

    .container {
        display: flex;
    }


    p {
        font-size: 1.5rem;
        font-family: "Georgia", "Palatino", serif;
        text-transform: uppercase;
        display: block;
        height: auto;
        text-align: center;
        
    }

    .character-div {
        color: #FFD700;
        width: 80%;
        border: 1px white dotted;
        border: 5px dotted #FF9E9E;
        border-radius: 40px 40px 40px 40px;
        margin: 5% 0 0 10%;
        animation: ${fontKf} 3s infinite;
    }

    .button-container {
        margin-top: 5%;
    }

    .myButton {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }

    button {
        width: 50px;
        height: 50px;
        cursor: pointer;
        font-size: 20px;
        font-family: 'Staatliches', cursive;
        background: #ffc421;
        opacity: .8;
        border-radius: 40px 40px 40px 40px;
        border: 2px solid black;
        box-shadow: 0px 0px 0px rgba(0,0,0,0.4);
        transition: 500ms;
    }
    
    button:after {
        content: '';
        position: absolute;
        transform: translateX(50px) translateY(0px);
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: transparent;
        box-shadow: 0px 0px 50px transparent;
        transition: 500ms;
    }
    
    button:hover {
        transform: translateY(-20px);
        box-shadow: 0px 10px 10px rgba(0,0,0,0.4);
    }
    
    button:hover:after {
        background: white;
        box-shadow: 0px 0px 20px #ffc421, 0px 0px 30px #ffc421, inset 0px 0px 10px #ffc421;
        animation: ${buttonKf} 1s infinite linear;
    }

    button:focus {
        outline: none;
    }

`



const Character = props => {
    const [show, setShow] = useState(false);
    const { info } = props;

    const buttonHandler = () => {
        if (show) {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    return (    
            <StyledCharacter>
                <div className="container">
                    <div className="character-div">
                        <p>{info.name}</p>
                        {show && <Details 
                            info={info}/>}
                    </div>
                    <div className="button-container">
                        <button className="myButton" 
                            onClick={ () => { buttonHandler() } }>
                                {show ? '-' : '+'}
                            </button>
                    </div>
                </div>
            </StyledCharacter>
    )
}

export default Character;