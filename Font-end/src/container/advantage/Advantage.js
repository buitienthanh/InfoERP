import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AdvantageItem from '../../component/advantageItem/AdvantageItem';
import webImgWeb from '../../img/advantage/tien_ich_quan_ly.png';
import appResImgWeb from '../../img/advantage/ung_dung_van_hanh.png';
import appManImgWeb from '../../img/advantage/phan_mem_quan_ly.png';
import TransitionLine from '../../component/transitionLine/TransitionLine';
import AdvantageItemWebRight from '../../component/advantageItem/AdvantageItemWebRight';
import AdvantageItemWebLeft from '../../component/advantageItem/AdvantageItemWebLeft';
import { useTranslation } from "react-i18next";
import ButtonModal from '../../component/buttonModal/ButtonModal';
import './Advantage.css';

export default function Advantage(props) {
    const { t, } = useTranslation();

    const web = { 
        imageUrl: "https://static.wixstatic.com/media/925c60_d262931d92c84d3cbaa617a52d387e30~mv2.png/v1/fill/w_551,h_433,al_c,usm_0.66_1.00_0.01,enc_auto/Banner-05.png",//webImgWeb,
        subTitle: '',
        titleUp: 'advantage.webTitle1',
        titleDown: 'advantage.webTitle2',
        content: 'advantage.webDetail'
        }
    const appMan = { 
        imageUrl: "https://static.wixstatic.com/media/925c60_c0ef765e9d8b4ba7896858481e8daab3~mv2.png/v1/fill/w_570,h_504,al_c,usm_0.66_1.00_0.01,enc_auto/Banner-01.png",
        subTitle: 'advantage.appManSubTitle',
        titleUp: 'advantage.appManTitle1', 
        titleDown: 'advantage.appManTitle2', 
        content: 'advantage.appManDetail' 
    }
    const appRes = { 
        imageUrl: "https://static.wixstatic.com/media/925c60_68fb5dcbdd9749579558564521767fd7~mv2.png/v1/fill/w_554,h_390,al_c,usm_0.66_1.00_0.01,enc_auto/Banner-06.png",
        subTitle: 'advantage.appResSubTitle',
        titleUp: 'advantage.appResTitle1',
        titleDown: 'advantage.appResTitle2', 
        content: 'advantage.appResDetail' 
    }

    return (
        <div style={{ marginTop: 100, textAlign: 'center' }} ref={props.refer}>
            <TransitionLine />
            <div>
                <Container>
                    <Row>
                        <Col lg={12} id='advLabelWeb'>
                            <div>
                                <h2 className='labelTitle'>{t("advantage.title")}</h2>
                            </div>
                            <div>
                                <h4>{t("advantage.subTitle")}</h4>
                            </div>
                        </Col>
                        <Col className='advLabelMobile' sm={12}>
                            <div>
                                <label className='labelTitle'>{t('advantage.mobileTitle1')}</label>
                            </div>
                        </Col>
                        <Col className='advLabelMobile' sm={12}>
                            <div>
                                <label className='labelTitle'>{t('advantage.mobileTitle2')}</label>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='mobile'>
                    <AdvantageItem value={web} id={'itemWeb'} />
                    <AdvantageItem value={appMan} id={'itemMan'} />
                    <AdvantageItem value={appRes} id={'itemRes'} />
                </div>
                <div className='web'>
                    <div style={{ marginBottom: 50 }}>
                        <AdvantageItemWebRight value={web} imgRight={web.imageUrl} />
                    </div>
                    <AdvantageItemWebLeft value={appMan} imgLeft={appMan.imageUrl} />
                    <AdvantageItemWebRight value={appRes} imgRight={appRes.imageUrl} />
                </div>
                <div style={{marginTop: 57}}>
                    <ButtonModal id={'btnAdv'} name={'advantage.registerBtn'} />
                </div>
            </div>
        </div>
    )
}