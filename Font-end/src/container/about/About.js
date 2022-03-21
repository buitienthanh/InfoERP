import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import infocityLogo from '../../img/about/infocityLogo.png';
import AboutPhone from '../../component/aboutPhone/AboutPhone';
import vietFlag from '../../img/about/vietFlag.svg';
import './About.css'
import { useTranslation } from 'react-i18next';
import ImgCom from '../../component/imgCom/ImgCom';
import imgGov from '../../img/about/gov.png'

export default function About() {
    const { t, } = useTranslation();
    return (
        <div id='aboutDiv'>
            <div style={{ display: 'flex' }}>
                <div>
                    <div>
                        <ImgCom src={"https://static.wixstatic.com/media/3e964e_1e28b8ea15eb4512adb644723b487765~mv2.jpg/v1/crop/x_78,y_0,w_745,h_900/fill/w_96,h_116,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4e9aeef83aaaf2f4abbb.jpg"} alt='' style={{ width: 62.03, marginRight: 10 }} />
                    </div>
                </div>
                <div className='aboutLine' />
                <div>
                    <Container style={{ maxWidth: 800 }}>
                        {/* <Row style={{ maxWidth: 500 }}>
                            <Col>
                                <AboutPhone flag={vietFlag} phoneNumber={'0338 758 520'} />
                            </Col>
                        </Row> */}
                        <Row>
                            <Col className='aboutInfo'>
                                <div>
                                    <label>{t('about.address')}</label>
                                </div>
                                <div>
                                    <label>{t('about.paper')}</label>
                                </div>
                                <div>
                                    <label>{t('about.issuedBy')}</label>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div id='govDiv'>
                <a href='http://online.gov.vn/Home/WebDetails/85528'>
                    <img style={{ height: 70, width: 200 }} alt='' title='' src={imgGov} />
                </a>
            </div>
        </div>
    )
}