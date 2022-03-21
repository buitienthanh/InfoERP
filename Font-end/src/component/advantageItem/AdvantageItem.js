import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './AdvantageItem.css'
import { useTranslation } from 'react-i18next';
import ImgCom from '../imgCom/ImgCom';

export default function AdvantageItem(props) {
    const imageUrl = props.value.imageUrl;
    const titleUp = props.value.titleUp;
    const titleDown = props.value.titleDown;
    const content = props.value.content;
    const subTitle = props.value.subTitle;
    const { t, } = useTranslation();

    return (
        <div>
            <Container id={props.id}>
                <Row style={{ marginBottom: 40 }}>
                    <Col lg={6} sm={12}>
                        <ImgCom className='advAppImage' src={imageUrl} alt='' />
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className='advTotalContent'>
                            <div style={{marginBottom: 5}}>
                                <label className='advSubTitleLabel'>{t(subTitle)}</label>
                            </div>
                            <div>
                                <label className='advTitleLabel'>{t(titleUp)}</label>
                            </div>
                            <div>
                                <label className='advTitleLabel'>{t(titleDown)}</label>
                            </div>
                            <label className='advContentLabel'>{t(content)}</label>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}