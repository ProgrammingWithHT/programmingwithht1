import React, { useEffect, useRef } from 'react'


const Home = () => {

  const navRef = useRef<HTMLLIElement>(null!);
  const navRef1 = useRef<HTMLLIElement>(null!);
  const navRef2 = useRef<HTMLLIElement>(null!);
  const navRef3 = useRef<HTMLLIElement>(null!);
  const navRef4 = useRef<HTMLLIElement>(null!);
  const moonGet = useRef<SVGSVGElement>(null!);
  const sunGet = useRef<SVGSVGElement>(null!);

  const useNavRef =()=>{
    navRef1.current.classList.remove('active')
    navRef2.current.classList.remove('active')
    navRef3.current.classList.remove('active')
    navRef4.current.classList.remove('active')
    navRef.current.classList.add('active')
  }
  const useNavRef1 =()=>{
    navRef.current.classList.remove('active')
    navRef2.current.classList.remove('active')
    navRef3.current.classList.remove('active')
    navRef4.current.classList.remove('active')
    navRef1.current.classList.add('active')
  }
  const useNavRef2 =()=>{
    navRef.current.classList.remove('active')
    navRef1.current.classList.remove('active')
    navRef3.current.classList.remove('active')
    navRef4.current.classList.remove('active')
    navRef2.current.classList.add('active')
  }
  const useNavRef3 =()=>{
    navRef.current.classList.remove('active')
    navRef1.current.classList.remove('active')
    navRef2.current.classList.remove('active')
    navRef4.current.classList.remove('active')
    navRef3.current.classList.add('active')
  }
  const useNavRef4 =()=>{
    navRef.current.classList.remove('active')
    navRef1.current.classList.remove('active')
    navRef2.current.classList.remove('active')
    navRef3.current.classList.remove('active')
    navRef4.current.classList.add('active')
  }
  var flag = false
  const setColor=()=>{
    if(flag===false){
      moonGet.current.style.display='none'
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
    }else{
      sunGet.current.style.display = 'none'
      moonGet.current.style.display='block'
      flag=false
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
  
  
  useEffect(()=>{
    console.log(navRef)
    navRef.current.classList.add('active')
    
  },[])
  
  return (
    <header className="header">
      <div className="topHeader">
        <p className="topHeaderP"><span>P</span>ORTFOLIO</p>
        <a href="#1" className="topHeaderA" onClick={setColor}>

          <svg className="moonget" ref={moonGet} fill="#fff" version="1.1" id="Capa_1" width="8rem" height="8rem" viewBox="0 0 45.74 45.74"><g><g><g><g><g><path d="M12.2,15.267c0-3.322,0.896-6.43,2.448-9.113c0.376-0.649-0.191-1.451-0.918-1.265       C5.35,7.041-0.711,14.961,0.067,24.179c0.736,8.701,7.768,15.803,16.463,16.617c6.033,0.565,11.517-1.811,15.221-5.848       c0.5-0.546,0.073-1.432-0.666-1.401c-0.196,0.009-0.395,0.013-0.594,0.013C20.389,33.56,12.2,25.371,12.2,15.267z" /></g></g><g><path d="M23.144,5.6l0.917,2.633l2.788,0.061c0.354,0.008,0.498,0.456,0.218,0.669l-2.221,1.687l0.805,2.669      c0.104,0.338-0.279,0.614-0.568,0.414l-2.292-1.59l-2.29,1.59c-0.29,0.201-0.669-0.076-0.569-0.414l0.805-2.669l-2.221-1.687      c-0.28-0.213-0.134-0.661,0.218-0.669l2.788-0.061L22.44,5.6C22.556,5.267,23.027,5.267,23.144,5.6z" /></g><g><path d="M40.26,26.44l0.881,2.53l2.679,0.057c0.389,0.009,0.549,0.502,0.24,0.737l-2.134,1.621l0.772,2.564      c0.111,0.371-0.309,0.677-0.627,0.454l-2.201-1.527l-2.2,1.527c-0.318,0.223-0.739-0.083-0.626-0.454l0.772-2.564l-2.133-1.621      c-0.31-0.234-0.149-0.729,0.238-0.737l2.679-0.057l0.884-2.53C39.612,26.074,40.131,26.074,40.26,26.44z" /></g><g><path d="M39.926,8.098l1.325,3.799l4.021,0.086c0.452,0.01,0.639,0.584,0.278,0.858l-3.204,2.434l1.162,3.853      c0.131,0.433-0.356,0.788-0.729,0.529l-3.306-2.294l-3.305,2.294c-0.372,0.259-0.86-0.097-0.729-0.529l1.161-3.853l-3.205-2.434      c-0.358-0.273-0.172-0.849,0.279-0.858l4.022-0.086l1.324-3.799C39.173,7.672,39.776,7.672,39.926,8.098z" /></g></g></g></g></svg>
          <svg className="sunget" ref={sunGet} width="8rem" height="8rem" viewBox="0 0 64 64"><defs></defs><title>sun</title><g id="sun">

            <path style={{fill:'#ff927d'}} d="M37.69,5.1h0a6.33,6.33,0,0,1,11,4.56h0a6.33,6.33,0,0,0,6.64,6.64h0a6.33,6.33,0,0,1,4.56,11h0a6.32,6.32,0,0,0,0,9.38h0a6.33,6.33,0,0,1-4.56,11h0a6.33,6.33,0,0,0-6.64,6.64h0a6.33,6.33,0,0,1-11,4.56h0a6.32,6.32,0,0,0-9.38,0h0a6.33,6.33,0,0,1-11-4.56h0a6.33,6.33,0,0,0-6.64-6.64h0a6.33,6.33,0,0,1-4.56-11h0a6.32,6.32,0,0,0,0-9.38h0a6.33,6.33,0,0,1,4.56-11h0A6.33,6.33,0,0,0,17.3,9.66h0a6.33,6.33,0,0,1,11-4.56h0A6.32,6.32,0,0,0,37.69,5.1Z" />
            <circle style={{fill:'#fff35f',stroke:'#54596e',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'2px'}} cx="33" cy="32" r="22" />
            <path className="cls-3" style={{opacity:0.15}} d="M33,48A22,22,0,0,1,11.21,29,22.78,22.78,0,0,0,11,32a22,22,0,0,0,44,0,22.78,22.78,0,0,0-.21-3A22,22,0,0,1,33,48Z" />
            <circle style={{fill:'#54596e'}} cx="22" cy="23" r="2" />
            <circle style={{fill:'#54596e'}} cx="44" cy="23" r="2" />
            <path style={{fill:'#54596e'}} d="M40,31.18c0-1.57-14-1.57-14,0v0C26,33.86,29.13,36,33,36s7-2.14,7-4.79Z" />
            <ellipse style={{fill:'#ff927d'}} cx="33" cy="33" rx="3" ry="1" /></g></svg>
            
        </a>
      </div>

      <div className="mainHeading">
        <div className="mainh">
          <h2>Hello, I'm</h2>
          <h1 className="title-common typing-demo">
            <span>H</span>
            <span>A</span>
            <span>M</span>
            <span>Z</span>
            <span>A</span>
            <span>T</span>
            <span>A</span>
            <span>H</span>
            <span>I</span>
            <span>R</span>
          </h1>
          <h2>Full Stack-Developer</h2>
        </div>
        <div className="mainBtn">
          <a className="wrapper" href={require("../../img/Hamzatahircv.pdf")} download>
            <button className="main-btn">
              Download CV
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </a>
          <a className="wrapper" href="#about">
            <button className="main-btn">
              About Me
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </a>
        </div>
      </div>

      <nav className="nav12">
        <div className="navigation">
          <ul>
            <li className="list" ref={navRef} onClick={useNavRef}>
              <a href="#">
                <span className="icon">
                  <svg style={{fill: 'var(--blue)'}} height="3rem" width="3rem" version="1.1" id="Layer_1" viewBox="0 0 512 512">
                    <g>
                      <g>
                        <path d="M498.665,213.084l-51.215-40.182V20.539c0-8.103-5.836-14.67-13.937-14.67h-58.682c-8.101,0-15.404,6.568-15.404,14.67    v83.3l-93.778-73.864c-5.314-4.168-12.605-4.169-17.924-0.003L13.622,213.303C5.141,219.95,0,229.945,0,240.722v17.845    c0,19.212,16.363,34.842,35.576,34.842h23.106v198.052c0,8.102,7.303,14.67,15.404,14.67h365.295    c8.101,0,13.937-6.568,13.937-14.67V293.41h24.573c19.213,0,34.109-15.63,34.109-34.842v-18.07    C512,229.725,507.14,219.733,498.665,213.084z M388.768,35.209h29.341v114.672l-29.341-23.021V35.209z M305.146,476.791h-99.759    V316.883h99.759V476.791z M423.977,476.791h-89.49V302.212c0-8.102-5.102-14.67-13.203-14.67h-129.1    c-8.101,0-16.138,6.568-16.138,14.67v174.579H88.023V266.605l168.188-131.864l167.766,131.627V476.791z M482.659,258.567    c0,3.034-1.736,5.501-4.768,5.501h-24.573v-4.838c0-4.505-1.703-8.761-5.248-11.543L265.819,104.554    c-5.315-4.168-12.697-4.171-18.015-0.003L64.622,247.919c-3.547,2.782-5.94,7.037-5.94,11.546v4.604H35.576    c-3.032,0-6.235-2.468-6.235-5.501v-17.845c0-1.702,1.134-3.279,2.475-4.329L256.773,60.162L480.828,236.17    c1.338,1.049,1.831,2.628,1.831,4.328V258.567z" />
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="text">Home</span>
              </a>
            </li>
            <li className="list" ref={navRef1} onClick={useNavRef1}>
              <a href="#about">
                <span className="icon">
                  <svg style={{fill: 'var(--blue)'}} height="3rem" width="3rem" viewBox="0 0 32 32"><title />

                    <g>

                      <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z" />

                      <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z" />

                    </g>

                  </svg>
                </span>
                <span className="text">About</span>
              </a>
            </li>
            <li className="list" ref={navRef2} onClick={useNavRef2}>
              <a href="#skill">
                <span className="icon">
                  <svg width="4rem" height="4rem" viewBox="0 0 128.00 128.00" fill="none">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path fillRule="evenodd" clipRule="evenodd" style={{fill: 'var(--blue)'}}
                        d="M37.0409 66.6549L60.4468 75.4433C62.2696 76.1278 64.2795 76.1239 66.0997 75.4325L88.962 66.7484L88.9618 83.4477C88.962 83.4635 88.9621 83.4792 88.9621 83.495C88.9621 88.6399 77.3391 92.8106 63.0015 92.8106C48.6638 92.8106 37.0409 88.6399 37.0409 83.495C37.0409 83.4898 37.0408 83.4845 37.0408 83.4792C37.0408 83.4687 37.0407 83.4582 37.0409 83.4477V66.6549Z"
                      ></path>
                      <path
                        d="M110.065 79.2054C110.846 77.7714 111.729 75.9086 112.477 74.2526C113.059 72.9632 114.716 72.6791 115.428 73.9011C116.677 76.0409 117.5 78.594 117.909 80.2952C118.039 80.8355 117.925 81.4215 117.509 81.7908C115.748 83.3571 113.028 82.9374 110.916 82.1365C109.783 81.7069 109.485 80.2694 110.065 79.2054Z"
                        fill="white"></path>
                      <path fillRule="evenodd" clipRule="evenodd" style={{fill: 'var(--blue)'}}
                        d="M114.04 74.1257C113.817 74.1564 113.543 74.3211 113.388 74.664C112.637 76.3276 111.742 78.2169 110.943 79.6836C110.774 79.994 110.737 80.3575 110.815 80.6544C110.89 80.938 111.052 81.1184 111.271 81.2014C112.259 81.5763 113.345 81.8434 114.352 81.8514C115.352 81.8593 116.204 81.6137 116.845 81.0435C116.917 80.9798 117.004 80.8086 116.937 80.5293C116.54 78.8819 115.746 76.4307 114.565 74.405C114.422 74.1595 114.233 74.0991 114.04 74.1257ZM113.767 72.1445C114.726 72.0122 115.723 72.4207 116.292 73.3972L115.428 73.9011M113.767 72.1445C112.838 72.2726 111.993 72.8947 111.565 73.8412L113.767 72.1445ZM116.292 73.3972C117.607 75.6511 118.459 78.3061 118.881 80.0611C119.074 80.8625 118.933 81.8632 118.174 82.5381C117.054 83.5342 115.664 83.8619 114.336 83.8513C113.015 83.8408 111.685 83.4976 110.561 83.0715C108.685 82.3599 108.416 80.1426 109.186 78.7271C109.95 77.3259 110.821 75.4898 111.565 73.8412"
                      ></path>
                      <path fillRule="evenodd" clipRule="evenodd" style={{fill: 'var(--blue)'}}
                        d="M112.252 71.6091C112.679 71.2594 113.309 71.3224 113.659 71.7498C114.002 72.169 114.178 72.785 114.289 73.2976C114.41 73.863 114.494 74.524 114.552 75.1886C114.668 76.521 114.688 77.963 114.671 78.8885C114.661 79.4407 114.205 79.8802 113.653 79.8702C113.101 79.8602 112.661 79.4044 112.672 78.8522C112.687 77.9757 112.668 76.6066 112.56 75.3621C112.505 74.7382 112.431 74.1694 112.334 73.7189C112.285 73.4938 112.235 73.3157 112.186 73.1838C112.14 73.0593 112.109 73.0142 112.109 73.0139C112.109 73.0138 112.11 73.0147 112.111 73.0163C111.761 72.5889 111.824 71.9589 112.252 71.6091Z"
                      ></path>
                      <path fillRule="evenodd" clipRule="evenodd" style={{fill: 'var(--blue)'}}
                        d="M113.475 52.3058C114.303 52.3058 114.975 52.9774 114.975 53.8058V70.4171C114.975 71.2456 114.303 71.9171 113.475 71.9171C112.646 71.9171 111.975 71.2456 111.975 70.4171V53.8058C111.975 52.9774 112.646 52.3058 113.475 52.3058Z"
                      ></path>
                      <path style={{fill: 'var(--blue)'}}
                        d="M117.603 71.0069C117.603 73.2869 115.755 75.1352 113.475 75.1352C111.195 75.1352 109.347 73.2869 109.347 71.0069C109.347 68.727 111.195 66.8787 113.475 66.8787C115.755 66.8787 117.603 68.727 117.603 71.0069Z"
                      ></path>
                      <path style={{fill: 'var(--blue)'}}
                        d="M60.1547 33.0997L11.6849 52.4133C10.7891 52.7703 10.8019 54.0427 11.7046 54.3817L60.3131 72.6331C62.2367 73.3554 64.3578 73.3513 66.2786 72.6217L114.302 54.3803C115.2 54.0393 115.212 52.774 114.322 52.4149L66.4363 33.1122C64.422 32.3003 62.1722 32.2958 60.1547 33.0997Z"
                      ></path>
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M100.016 55.5271C100.205 56.0459 99.938 56.62 99.4192 56.8093L65.2136 69.2924C64.6947 69.4817 64.1207 69.2146 63.9313 68.6958C63.742 68.177 64.0091 67.6029 64.5279 67.4136L98.7335 54.9305C99.2524 54.7412 99.8264 55.0083 100.016 55.5271Z"
                        fill="white"></path>
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M19.5669 53.2122C19.7571 52.6937 20.3317 52.4275 20.8502 52.6177L32.2819 56.8112C32.8004 57.0014 33.0665 57.5759 32.8763 58.0944C32.6861 58.6129 32.1116 58.8791 31.5931 58.6889L20.1614 54.4954C19.6429 54.3052 19.3767 53.7307 19.5669 53.2122Z"
                        fill="white"></path></g></svg>
                </span>
                <span className="text">Skills</span>
              </a>
            </li>
            <li className="list" ref={navRef3} onClick={useNavRef3}>
              <a href="#services">
                <span className="icon">
                  <svg style={{fill: 'var(--blue)'}} height="3rem" width="3rem" viewBox="0 0 1024 1024"><path d="M848.896 722.603c33.93 0 61.44-27.51 61.44-61.44v-92.16c0-33.93-27.51-61.44-61.44-61.44H174.08c-33.93 0-61.44 27.51-61.44 61.44v92.16c0 33.93 27.51 61.44 61.44 61.44h674.816zm0 40.96H174.08c-56.551 0-102.4-45.849-102.4-102.4v-92.16c0-56.551 45.849-102.4 102.4-102.4h674.816c56.551 0 102.4 45.849 102.4 102.4v92.16c0 56.551-45.849 102.4-102.4 102.4zm-588.288 40.544v62.648c0 24.112-19.291 43.581-42.998 43.581h-6.164c-23.707 0-42.998-19.469-42.998-43.581V803.84c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v62.915c0 46.65 37.544 84.541 83.958 84.541h6.164c46.413 0 83.958-37.892 83.958-84.541v-62.648c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm593.92 0v62.648c0 24.112-19.291 43.581-42.998 43.581h-6.164c-23.707 0-42.998-19.469-42.998-43.581V803.84c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v62.915c0 46.65 37.544 84.541 83.958 84.541h6.164c46.413 0 83.958-37.892 83.958-84.541v-62.648c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z" /><path d="M308.224 615.083c0 31.109-25.211 56.32-56.32 56.32s-56.32-25.211-56.32-56.32 25.211-56.32 56.32-56.32 56.32 25.211 56.32 56.32zm519.168 0c0 31.109-25.211 56.32-56.32 56.32s-56.32-25.211-56.32-56.32 25.211-56.32 56.32-56.32 56.32 25.211 56.32 56.32zm-418.304 20.48h204.8c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48h-204.8c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm7.005-436.828v-65.618c0-11.309 9.171-20.48 20.48-20.48h149.832c11.309 0 20.48 9.171 20.48 20.48v65.618c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-65.618c0-33.931-27.509-61.44-61.44-61.44H436.573c-33.931 0-61.44 27.509-61.44 61.44v65.618c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z" /><path d="M780.288 295.25c0-33.93-27.51-61.44-61.44-61.44h-414.72c-33.93 0-61.44 27.51-61.44 61.44v170.67h537.6V295.25zm-578.56 211.63V295.25c0-56.551 45.849-102.4 102.4-102.4h414.72c56.551 0 102.4 45.849 102.4 102.4v211.63h-619.52z" /></svg>
                </span>
                <span className="text">Services</span>
              </a>
            </li>
            <li className="list" ref={navRef4} onClick={useNavRef4}>
              <a href="#contact">
                <span className="icon">
                  <svg style={{fill: 'var(--blue)'}} version="1.1" id="Layer_1" width="3rem" height="3rem" viewBox="924 796 200 200" enableBackground="new 924 796 200 200"><path d="M1108.21,823.04H939.79c-8.527,0-15.439,6.911-15.439,15.438v115.043c0,8.526,6.912,15.438,15.439,15.438h168.42  c8.527,0,15.439-6.912,15.439-15.438V838.479C1123.649,829.951,1116.737,823.04,1108.21,823.04z M984.06,856.633  c11.085,0,20.074,10.611,20.074,23.705c0,13.093-8.989,23.706-20.074,23.706s-20.07-10.613-20.07-23.706  C963.989,867.244,972.975,856.633,984.06,856.633z M1018.334,931.807c-1.532,2.031-3.924,3.222-6.464,3.222h-56.312  c-2.541,0-4.931-1.194-6.461-3.22c-1.527-2.03-2.019-4.661-1.319-7.1c2.606-9.092,8.585-16.749,16.483-21.573  c1.527-0.933,3.482-0.751,4.811,0.447c4.159,3.756,9.347,5.999,14.987,5.999c5.532,0,10.627-2.16,14.744-5.787  c1.344-1.183,3.308-1.337,4.821-0.383c7.674,4.838,13.469,12.377,16.024,21.297C1020.35,927.149,1019.861,929.778,1018.334,931.807z   M1094.053,934.597h-48.992c-3.58,0-6.481-2.901-6.481-6.482c0-3.579,2.901-6.48,6.481-6.48h48.992c3.578,0,6.48,2.901,6.48,6.48  C1100.533,931.695,1097.631,934.597,1094.053,934.597z M1094.053,902.221h-48.992c-3.58,0-6.481-2.901-6.481-6.481  c0-3.579,2.901-6.48,6.481-6.48h48.992c3.578,0,6.48,2.901,6.48,6.48C1100.533,899.319,1097.631,902.221,1094.053,902.221z   M1094.053,869.845h-48.992c-3.58,0-6.481-2.901-6.481-6.479c0-3.581,2.901-6.482,6.481-6.482h48.992c3.578,0,6.48,2.901,6.48,6.482  C1100.533,866.943,1097.631,869.845,1094.053,869.845z" />                                    </svg>

                </span>
                <span className="text">Contact</span>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
      </nav>
      <div className="leftNav">
        <a href="https://github.com/ProgrammingWithHT" target="__blank">
          <svg width="4.5rem" height="4.5rem" viewBox="0 0 24 24" className="svgIcons">
            <rect width="24" height="24" fill="none" />
            <path className="gitColor"
              d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
          </svg>
        </a>
        <a href="#">
          <svg width="4.5rem" height="4.5rem" viewBox="0 0 48 48" fill="none" className="svgIcons">
            <circle cx="24" cy="24" r="20" fill="#0077B5" />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z"
              fill="white" />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z"
              fill="white" />
          </svg>
        </a>

        <a href="https://www.youtube.com/channel/UC0qwt_aYOOvCfoO8lHpNc9A" target="__blank">
          <svg width="4.5rem" height="4.5rem" viewBox="0 0 48 48" fill="none"
            className="svgIcons">
            <circle cx="24" cy="24" r="20" fill="#FF0000" />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M35.3005 16.3781C35.6996 16.7772 35.9872 17.2739 36.1346 17.8187C36.9835 21.2357 36.7873 26.6324 36.1511 30.1813C36.0037 30.7261 35.7161 31.2228 35.317 31.6219C34.9179 32.021 34.4212 32.3086 33.8764 32.456C31.8819 33 23.8544 33 23.8544 33C23.8544 33 15.8269 33 13.8324 32.456C13.2876 32.3086 12.7909 32.021 12.3918 31.6219C11.9927 31.2228 11.7051 30.7261 11.5577 30.1813C10.7038 26.7791 10.9379 21.3791 11.5412 17.8352C11.6886 17.2903 11.9762 16.7936 12.3753 16.3945C12.7744 15.9954 13.2711 15.7079 13.8159 15.5604C15.8104 15.0165 23.8379 15 23.8379 15C23.8379 15 31.8654 15 33.8599 15.544C34.4047 15.6914 34.9014 15.979 35.3005 16.3781ZM27.9423 24L21.283 27.8571V20.1428L27.9423 24Z"
              fill="white" />
          </svg>
        </a>

        <a href="#">
          <svg width="4.5rem" height="4.5rem" viewBox="0 0 48 48" fill="none"
            className="svgIcons">
            <circle cx="24" cy="24" r="20" fill="#C13584" />
            <path
              d="M24 14.1622C27.2041 14.1622 27.5837 14.1744 28.849 14.2321C30.019 14.2855 30.6544 14.481 31.0773 14.6453C31.6374 14.863 32.0371 15.123 32.457 15.5429C32.877 15.9629 33.137 16.3626 33.3547 16.9227C33.519 17.3456 33.7145 17.981 33.7679 19.1509C33.8256 20.4163 33.8378 20.7958 33.8378 23.9999C33.8378 27.2041 33.8256 27.5836 33.7679 28.849C33.7145 30.019 33.519 30.6543 33.3547 31.0772C33.137 31.6373 32.877 32.0371 32.4571 32.457C32.0371 32.8769 31.6374 33.1369 31.0773 33.3546C30.6544 33.519 30.019 33.7144 28.849 33.7678C27.5839 33.8255 27.2044 33.8378 24 33.8378C20.7956 33.8378 20.4162 33.8255 19.151 33.7678C17.981 33.7144 17.3456 33.519 16.9227 33.3546C16.3626 33.1369 15.9629 32.8769 15.543 32.457C15.1231 32.0371 14.863 31.6373 14.6453 31.0772C14.481 30.6543 14.2855 30.019 14.2321 28.849C14.1744 27.5836 14.1622 27.2041 14.1622 23.9999C14.1622 20.7958 14.1744 20.4163 14.2321 19.1509C14.2855 17.981 14.481 17.3456 14.6453 16.9227C14.863 16.3626 15.123 15.9629 15.543 15.543C15.9629 15.123 16.3626 14.863 16.9227 14.6453C17.3456 14.481 17.981 14.2855 19.151 14.2321C20.4163 14.1744 20.7959 14.1622 24 14.1622ZM24 12C20.741 12 20.3323 12.0138 19.0524 12.0722C17.7752 12.1305 16.9028 12.3333 16.1395 12.63C15.3504 12.9366 14.6812 13.3469 14.0141 14.0141C13.3469 14.6812 12.9366 15.3504 12.63 16.1395C12.3333 16.9028 12.1305 17.7751 12.0722 19.0524C12.0138 20.3323 12 20.741 12 23.9999C12 27.259 12.0138 27.6676 12.0722 28.9475C12.1305 30.2248 12.3333 31.0971 12.63 31.8604C12.9366 32.6495 13.3469 33.3187 14.0141 33.9859C14.6812 34.653 15.3504 35.0633 16.1395 35.3699C16.9028 35.6666 17.7752 35.8694 19.0524 35.9277C20.3323 35.9861 20.741 35.9999 24 35.9999C27.259 35.9999 27.6677 35.9861 28.9476 35.9277C30.2248 35.8694 31.0972 35.6666 31.8605 35.3699C32.6496 35.0633 33.3188 34.653 33.9859 33.9859C34.653 33.3187 35.0634 32.6495 35.37 31.8604C35.6667 31.0971 35.8695 30.2248 35.9278 28.9475C35.9862 27.6676 36 27.259 36 23.9999C36 20.741 35.9862 20.3323 35.9278 19.0524C35.8695 17.7751 35.6667 16.9028 35.37 16.1395C35.0634 15.3504 34.653 14.6812 33.9859 14.0141C33.3188 13.3469 32.6496 12.9366 31.8605 12.63C31.0972 12.3333 30.2248 12.1305 28.9476 12.0722C27.6677 12.0138 27.259 12 24 12Z"
              fill="white" />
            <path
              d="M24.0059 17.8433C20.6026 17.8433 17.8438 20.6021 17.8438 24.0054C17.8438 27.4087 20.6026 30.1675 24.0059 30.1675C27.4092 30.1675 30.1681 27.4087 30.1681 24.0054C30.1681 20.6021 27.4092 17.8433 24.0059 17.8433ZM24.0059 28.0054C21.7968 28.0054 20.0059 26.2145 20.0059 24.0054C20.0059 21.7963 21.7968 20.0054 24.0059 20.0054C26.2151 20.0054 28.0059 21.7963 28.0059 24.0054C28.0059 26.2145 26.2151 28.0054 24.0059 28.0054Z"
              fill="white" />
            <path
              d="M31.8507 17.5963C31.8507 18.3915 31.206 19.0363 30.4107 19.0363C29.6154 19.0363 28.9707 18.3915 28.9707 17.5963C28.9707 16.801 29.6154 16.1562 30.4107 16.1562C31.206 16.1562 31.8507 16.801 31.8507 17.5963Z"
              fill="white" />
          </svg>
        </a>
      </div>
      <div className="right-nav">
        <a href="#">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="2" />
            <path d="M8 13.5L12 9.5L16 13.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  )
}

export default Home