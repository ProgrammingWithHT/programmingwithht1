'use client'
import React, { useRef } from 'react'

const DayNightMode = () => {
    const moonGet = useRef(null);
    const sunGet = useRef(null);
    var flag = false
    const setColor = () => {
        if (flag === false) {
            moonGet.current.style.display = 'none'
            sunGet.current.style.display = 'block'

            flag = true
            document.documentElement.style.setProperty('--blue', 'red');
            document.documentElement.style.setProperty('--navbackcolor', '#222327');
            document.documentElement.style.setProperty('--yellow', 'rgb(255, 0, 0)');
            document.documentElement.style.setProperty('--azure', 'rgb(0, 0, 0)');
            document.documentElement.style.setProperty('--white', 'rgb(0, 0, 0)');
            document.documentElement.style.setProperty('--back', 'rgb(255, 255, 255)');
            document.documentElement.style.setProperty('--aliceblue', 'rgb(0, 0, 0)');
            document.documentElement.style.setProperty('--backColor', 'white');
            document.documentElement.style.setProperty('--textcolor', 'white');
            document.documentElement.style.setProperty('--blue', 'red');
            document.documentElement.style.setProperty('--red', '#0582ff');
            document.documentElement.style.setProperty('--nightBackgroundImageColor1', 'rgb(255 255 255 / 90%)');
            document.documentElement.style.setProperty('--nightBackgroundImageColor2', 'rgb(255 255 255 / 3%)');
            document.documentElement.style.setProperty('--nightBackgroundImageColor3', 'transparent');
            document.documentElement.style.setProperty('--nightBackgroundImageColor4', 'rgba(0, 0, 0, 0.10)');
            document.documentElement.style.setProperty('--nightBackgroundSize', '11rem');
        } else {
            sunGet.current.style.display = 'none'
            moonGet.current.style.display = 'block'
            flag = false
            document.documentElement.style.setProperty('--yellow', 'yellow');
            document.documentElement.style.setProperty('--blue', '#0582ff');
            document.documentElement.style.setProperty('--azure', 'azure');
            document.documentElement.style.setProperty('--white', 'white');
            document.documentElement.style.setProperty('--back', 'black');
            document.documentElement.style.setProperty('--darkblue', 'darkblue');
            document.documentElement.style.setProperty('--aliceblue', 'aliceblue');
            document.documentElement.style.setProperty('--backColor', 'rgb(3, 2, 27)');
            document.documentElement.style.setProperty('--navbackcolor', '#fff');
            document.documentElement.style.setProperty('--textcolor', 'black');
            document.documentElement.style.setProperty('--nightBackgroundImageColor1', 'rgba(255,255,255,0.05)');
            document.documentElement.style.setProperty('--nightBackgroundImageColor2', 'rgba(255,255,255,0.05)');
            document.documentElement.style.setProperty('--nightBackgroundImageColor3', 'transparent');
            document.documentElement.style.setProperty('--nightBackgroundImageColor4', 'transparent');
            document.documentElement.style.setProperty('--nightBackgroundSize', 'auto');
        }
    }
    return (
        <a href="#1" className="topHeaderA" onClick={setcolor}>

            <svg className="moonget" ref={moonGet} fill="#fff" version="1.1" id="Capa_1" width="8rem" height="8rem" viewBox="0 0 45.74 45.74"><g><g><g><g><g><path d="M12.2,15.267c0-3.322,0.896-6.43,2.448-9.113c0.376-0.649-0.191-1.451-0.918-1.265       C5.35,7.041-0.711,14.961,0.067,24.179c0.736,8.701,7.768,15.803,16.463,16.617c6.033,0.565,11.517-1.811,15.221-5.848       c0.5-0.546,0.073-1.432-0.666-1.401c-0.196,0.009-0.395,0.013-0.594,0.013C20.389,33.56,12.2,25.371,12.2,15.267z" /></g></g><g><path d="M23.144,5.6l0.917,2.633l2.788,0.061c0.354,0.008,0.498,0.456,0.218,0.669l-2.221,1.687l0.805,2.669      c0.104,0.338-0.279,0.614-0.568,0.414l-2.292-1.59l-2.29,1.59c-0.29,0.201-0.669-0.076-0.569-0.414l0.805-2.669l-2.221-1.687      c-0.28-0.213-0.134-0.661,0.218-0.669l2.788-0.061L22.44,5.6C22.556,5.267,23.027,5.267,23.144,5.6z" /></g><g><path d="M40.26,26.44l0.881,2.53l2.679,0.057c0.389,0.009,0.549,0.502,0.24,0.737l-2.134,1.621l0.772,2.564      c0.111,0.371-0.309,0.677-0.627,0.454l-2.201-1.527l-2.2,1.527c-0.318,0.223-0.739-0.083-0.626-0.454l0.772-2.564l-2.133-1.621      c-0.31-0.234-0.149-0.729,0.238-0.737l2.679-0.057l0.884-2.53C39.612,26.074,40.131,26.074,40.26,26.44z" /></g><g><path d="M39.926,8.098l1.325,3.799l4.021,0.086c0.452,0.01,0.639,0.584,0.278,0.858l-3.204,2.434l1.162,3.853      c0.131,0.433-0.356,0.788-0.729,0.529l-3.306-2.294l-3.305,2.294c-0.372,0.259-0.86-0.097-0.729-0.529l1.161-3.853l-3.205-2.434      c-0.358-0.273-0.172-0.849,0.279-0.858l4.022-0.086l1.324-3.799C39.173,7.672,39.776,7.672,39.926,8.098z" /></g></g></g></g></svg>
            <svg className="sunget" ref={sunGet} width="8rem" height="8rem" viewBox="0 0 64 64"><defs></defs><title>sun</title><g id="sun">

                <path style={{ fill: '#ff927d' }} d="M37.69,5.1h0a6.33,6.33,0,0,1,11,4.56h0a6.33,6.33,0,0,0,6.64,6.64h0a6.33,6.33,0,0,1,4.56,11h0a6.32,6.32,0,0,0,0,9.38h0a6.33,6.33,0,0,1-4.56,11h0a6.33,6.33,0,0,0-6.64,6.64h0a6.33,6.33,0,0,1-11,4.56h0a6.32,6.32,0,0,0-9.38,0h0a6.33,6.33,0,0,1-11-4.56h0a6.33,6.33,0,0,0-6.64-6.64h0a6.33,6.33,0,0,1-4.56-11h0a6.32,6.32,0,0,0,0-9.38h0a6.33,6.33,0,0,1,4.56-11h0A6.33,6.33,0,0,0,17.3,9.66h0a6.33,6.33,0,0,1,11-4.56h0A6.32,6.32,0,0,0,37.69,5.1Z" />
                <circle style={{ fill: '#fff35f', stroke: '#54596e', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2px' }} cx="33" cy="32" r="22" />
                <path className="cls-3" style={{ opacity: 0.15 }} d="M33,48A22,22,0,0,1,11.21,29,22.78,22.78,0,0,0,11,32a22,22,0,0,0,44,0,22.78,22.78,0,0,0-.21-3A22,22,0,0,1,33,48Z" />
                <circle style={{ fill: '#54596e' }} cx="22" cy="23" r="2" />
                <circle style={{ fill: '#54596e' }} cx="44" cy="23" r="2" />
                <path style={{ fill: '#54596e' }} d="M40,31.18c0-1.57-14-1.57-14,0v0C26,33.86,29.13,36,33,36s7-2.14,7-4.79Z" />
                <ellipse style={{ fill: '#ff927d' }} cx="33" cy="33" rx="3" ry="1" /></g></svg>

        </a>
    )
}

export default DayNightMode