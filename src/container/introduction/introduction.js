import React from 'react';
import { Container, Row, Accordion, Col } from 'react-bootstrap';
import CollapsibleCard from '../../component/collapsibleCard/collapsibleCard';
import apartmentIcon from '../../img/introduction/apart.png';
import buildingIcon from '../../img/introduction/complex.png';
import coworkingIcon from '../../img/introduction/coWork.png';
import miniIcon from '../../img/introduction/mini.png';
import dormIcon from '../../img/introduction/dorm.png';
import introBackground from '../../img/background/introBackground.png';
import './introduction.css'
import IntroItem from '../../component/introItem/IntroItem';
import { useTranslation } from 'react-i18next';

export default function Introduction(props) {
    const apartment = { key: '0',
    //  color: '#42B5EB',
      icon: "https://static.wixstatic.com/media/925c60_26f35476c8604616a92c92341642d4b6~mv2.png/v1/fill/w_220,h_220,al_c,usm_0.66_1.00_0.01,enc_auto/Banner-07.png", title: 'intro.apartment', detail: 'intro.apartmentDetail',buttonContent:'Yêu cầu báo giá' }
    const building = { key: '1',
    //  color: '#FFAE74',
      icon: "https://static.wixstatic.com/media/925c60_0b29d3a6ec3f435a9507c4d5d0391f1c~mv2.png/v1/fill/w_220,h_220,al_c,usm_0.66_1.00_0.01,enc_auto/Banner-09.png", title: 'intro.complex', detail: 'intro.complexDetail',buttonContent:'Đăng ký' }
    const coWorking = { key: '2', color: '#FFBB55', icon: coworkingIcon, title: 'intro.cowork', detail: 'intro.coworkDetail' }
    const miniApartment = { key: '3', color: '#10D0A2', icon: miniIcon, title: 'intro.mini', detail: 'intro.miniDetail' }
    const dormitory = { key: '4', color: '#899ED6', icon: dormIcon, title: 'intro.dorm', detail: 'intro.dormDetail' }
    const {t, } = useTranslation();

    return (
        <div ref={props.refer}>
            <div id='introBackground'/>
            <img src={introBackground} id='introImgBack' alt=''/>
            <Container id='introDiv' style={{ maxWidth: 1200 }}>
                <Accordion defaultActiveKey="0">
                    <Row>
                        <Col lg={4} sm={12}>
                            <div id='introLabelDiv'>
                                <div id='companyDiv'>
                                    <div>
                                        <label id='companyLabel'>InfoERP</label>
                                    </div>
                                    <div>
                                        <label id='titleIntroLabel'>{t('intro.software')}</label>
                                    </div>
                                    <div>
                                        <label id='titleIntroLabel'>{t('intro.for')}</label>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={12}>
                            <CollapsibleCard className='collapsibleCard' value={apartment} />
                            <IntroItem value={apartment} />
                        </Col>
                        <Col lg={4} sm={12}>
                            <CollapsibleCard className='collapsibleCard' value={building} />
                            <IntroItem value={building} />
                        </Col>
                    </Row>
                    {/* <Row id='tabBelow'>
                        <Col lg={4} sm={12}>
                            <CollapsibleCard className='collapsibleCard' value={coWorking} />
                            <IntroItem value={coWorking} />
                        </Col>
                        <Col lg={4} sm={12}>
                            <CollapsibleCard className='collapsibleCard' value={miniApartment} />
                            <IntroItem value={miniApartment} />
                        </Col>
                        <Col lg={4} sm={12}>
                            <CollapsibleCard className='collapsibleCard' value={dormitory} />
                            <IntroItem value={dormitory} />
                        </Col>
                    </Row> */}
                </Accordion>
            </Container>
        </div>
    )
}