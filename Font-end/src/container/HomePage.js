import React, { useRef, useState } from 'react';
import Menu from './menu/Menu';
import MainPage from './mainPage/MainPage';
import Introduction from './introduction/introduction';
import Advantage from './advantage/Advantage';
import IntroVideo from './introVideo/IntroVideo';
import Solution from './solution/Solution';
import Customer from './customer/Customer';
import Register from './register/Register';
import About from './about/About';
import Rule from './rule/Rule';
import { withTranslation } from 'react-i18next';

import './HomePage.css';

function HomePage({ t }) {
    const arr = [{ name: 'menu.intro' }, { name: 'menu.advantage' }, { name: 'menu.solution' }, { name: 'menu.customer' }]
    const refIntro = useRef(null);
    const refIntroVideo = useRef(null);
    const refAdv = useRef(null);
    const refSol = useRef(null);
    const refCust = useRef(null);
    const refReg = useRef(null);
    const refAbout = useRef(null);
    const refMenu = useRef(null);
    const ref = [refIntro,refIntroVideo,refAdv,refSol,refCust,refReg,refAbout,refMenu];

    const executeScroll = (ref) => {
        // onClickBack();
        ref.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest"})
    };

    const [regulation, setRegulation] = useState(null)

    const onClickRegulation = (value) => {
        document.getElementById('rulePage').style.display = 'block';
        document.getElementById('homePage').style.display = 'none';

        setRegulation(value);
        refMenu.current.scrollIntoView({ behavior: 'smooth',block:'nearest' });
    }

    const onClickBack = () => {
        document.getElementById('rulePage').style.display = 'none';
        document.getElementById('homePage').style.display = 'block';
    }

    return (
        <div>
            <div id='homePage'>
                {/* <div style={{backgroundImage:'url(/static/media/introBackground.915696c5.png)'}}> */}
                <Menu executeScroll={executeScroll} refer={ref} arr={arr} t={t} />
                {/* </div>    */}
              
                <div id='colorBackDiv'>
                    <MainPage />
                </div>
                <div className='siteLayout'>
                    <div>
                        <Introduction refer={refIntro} />
                        <IntroVideo refer = {refIntroVideo} />
                        <Advantage refer={refAdv} />
                        <Solution refer={refSol} />
                    </div>
                    <div id='divCust'>
                        <div>
                            <Customer refer={refCust} />
                        </div>
                        <div>
                            <Register refer={refReg} onClickRegulation={onClickRegulation} />
                            <About refer={refAbout} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div id='rulePage' ref={refMenu}>
                <div style={{ background: '#0E2A4F' }} >
                    <Menu executeScroll={executeScroll} refer={ref} arr={arr} t={t} />
                </div>
                <div>
                    <Rule regulation={regulation} onClickBack={onClickBack} />
                </div>
                <div id='divBottom'>
                    <Register refer={refReg} onClickRegulation={onClickRegulation} />
                    <About refer={refAbout} />
                </div>
            </div> */}
        </div>
    )
}

export default withTranslation()(HomePage);