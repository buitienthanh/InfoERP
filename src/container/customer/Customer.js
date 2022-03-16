import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import customerIcon from '../../img/customer/customerIcon.png';
import CustomerItem from '../../component/customerItem/CustomerItem';
import CJ from '../../img/customer/CJ.png'
import Alpha from '../../img/customer/Alpha.png'
import PSA from '../../img/customer/PSA.png'
import CustomerImage from '../../component/customerImage/CustomerImage';

import './Customer.css'
import { useTranslation } from 'react-i18next';
import ImgCom from '../../component/imgCom/ImgCom';
import ButtonModal from '../../component/buttonModal/ButtonModal';

export default function Customer(props) {
    const { t, } = useTranslation();

    return (
        <div style={{ btextAlign: 'center', paddingTop: 100 }} ref={props.refer}>
            <Container>
                <Row>
                    <Col lg={6} sm={12} style={{ margin: 'auto' }}>
                        <div style={{ marginBottom: 20 }} className='custTitleDiv'>
                            <div>
                                <label className='labelTitle'>{t('customer.title1')}</label>
                            </div>
                            <div>
                                <label className='labelTitle'>{t('customer.title2')}</label>
                            </div>
                        </div>
                        <div className='web custItemDiv'>
                            <CustomerItem number='30+' content='customer.customer' />
                            <CustomerItem number='100+' content='customer.building' />
                            <CustomerItem number='5000+' content='customer.user' />
                        </div>
                        <div className='web'>
                            <ButtonModal name='customer.registerBtn' id={'btnCust'} />
                        </div>
                    </Col>
                    <Col lg={6} sm={12} style={{ display: 'flex' }} id='custImg'>
                        <ImgCom src={customerIcon} style={{ maxWidth: 578, margin: 'auto' }} alt='' />
                    </Col>
                    <Col className='mobile'>
                        <div className='custItemDiv'>
                            <CustomerItem number='30+' content='customer.customer' />
                            <CustomerItem number='100+' content='customer.building' />
                            <CustomerItem number='5000+' content='customer.user' />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container id='custRep'>
                <Row>
                    <Col lg={4} sm={12}>
                        <CustomerImage imgSrc={CJ} id={'custLeft'}/>
                    </Col>
                    <Col lg={4} sm={12}>
                        <CustomerImage imgSrc={PSA} />
                    </Col>
                    <Col lg={4} sm={12}>
                        <CustomerImage imgSrc={Alpha} id={'custRight'}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}