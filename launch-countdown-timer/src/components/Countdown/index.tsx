import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { CountdownContainer, CountdownWrapper, Line, LineBottom } from "./styles";

interface CountdownProps {
    text: string
    time: number
    type: string
}

export function Countdown({text, time, type}: CountdownProps) {
    const formatedTime = new Intl.NumberFormat('pt-BR', {
        style: 'decimal',
        minimumIntegerDigits: 2
    }).format(time)


    useEffect(() => {
        const countdown = document.getElementById(type);

        countdown?.querySelector('.topFlip')?.animate(
            [
                {
                    transform: 'rotateX(0deg)', 
                    transformStyle: 'preserve-3d'
                }, 
                {
                    transform: 'rotatex(90deg)',  
                    boxShadow: '0 5px 10px 0 rgba(0,0,0,0.8)',
                    transformStyle: 'preserve-3d'
                }
            ],
            {duration:250,fill:'forwards'});

        countdown?.querySelector('.middle')?.animate(
            [
                {
                    transform: 'rotateX(0deg)',
                    transformStyle: 'preserve-3d'

                }, 
                {
                    transform: 'rotatex(90deg)',
                    transformStyle: 'preserve-3d'
                }
            ],
            {duration: 250 });

            // ===============
        countdown?.querySelector('.bottomFlip')?.animate([{transform: 'rotateX(90deg)'},{transform:' rotatex(0deg)'}],{ delay: 250, duration:250, fill:'forwards', easing: 'ease-out'});

    }, [time]);


    return (
        <CountdownContainer>
            <CountdownWrapper className="countdown" id={type}>
                <div className="section">
                    <div className="top">{formatedTime}</div>
                    <div className="top topFlip" >{formatedTime}</div>
                </div>

                <Line className={'middle'}/>
                <LineBottom className={'middleBottom'}/>

                <div className="section">
                    <div className="bottom">{formatedTime}</div>
                    <div className={`bottom bottomFlip`}>{formatedTime}</div>
                </div>
            </CountdownWrapper>

            <p>{text}</p>
        </CountdownContainer>

    )
}