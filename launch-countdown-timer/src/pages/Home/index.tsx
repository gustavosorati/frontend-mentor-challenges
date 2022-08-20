import { Countdown } from "../../components/Countdown";
import { useEffect, useState } from "react";
import { HomeContainer, HomeContent } from "./styles";
import backgroundHills from '../../assets/pattern-hills.svg';
import backgroundStars from '../../assets/bg-stars.svg';
import facebook from '../../assets/icon-facebook.svg';
import pinterest from '../../assets/icon-instagram.svg';
import instagram from '../../assets/icon-pinterest.svg';

export function Home() {
    const countdownDate = new Date('2023-01-01').getTime();

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            const now = new Date().getTime();
            const timeleft = countdownDate - now;

            let d = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            let h = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let m = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            let s = Math.floor((timeleft % (1000 * 60)) / 1000);

            setDays(d)
            setHours(h)
            setMinutes(m)
            setSeconds(s)

        }, 1000);

        return () => {
            clearInterval(interval)
        }

    }, [setSeconds, setMinutes, setHours, setDays])

    return (
        <HomeContainer images={[backgroundHills, backgroundStars]}>
            <HomeContent className="HomeContent">

                <h1>We're Launching Soon</h1>

                <section>
                    <Countdown text="days" time={days} type="days"/>
                    <Countdown text="hours" time={hours} type="hours"/>
                    <Countdown text="minutes" time={minutes} type="minutes" />
                    <Countdown text="seconds" time={seconds} type="seconds"/>
                </section>

                
            </HomeContent>

            <footer>
                <div className="social">
                    <img src={facebook} />
                    <img src={pinterest} />
                    <img src={instagram} />
                </div>

                <p>Challenge by Frontend Mentor. Coded By Gustavo Sorati</p>
            </footer>
        </HomeContainer>
    )
}