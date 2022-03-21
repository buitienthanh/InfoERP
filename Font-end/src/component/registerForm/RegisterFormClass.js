import React, { Component } from 'react';
import FormInput from '../formInput/FormInput';
import { Container, Col, Row,Button } from 'react-bootstrap';
import imgBack from '../../img/register/registerImage.png'
import ImgCom from '../imgCom/ImgCom';
import { withTranslation } from 'react-i18next';
import './RegisterForm.css'
import Popup from '../popup/popup';
import validate from '../../util/validateUtil';
import sendEmail from '../../service/sendEmail';
import saveGuest from '../../service/saveGuest'
import LoadingButton from '../../component/loadingButton/LoadingButton'


const initialState = {
    name: '',
    phone: '',
    email: '',
    area: '',
    tax: '',
    numberRoom: '',
    errorName: null,
    errorPhone: null,
    errorEmail: null,
    errorArea: null,
    errorRoom: null,
    errorTax:null,
    isFail: false,
    show: false
}


class RegisterFormClass extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.changeValue = this.changeValue.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    changeValue(params) {
        this.setState({
            [params.name]: params.value
        });
    }

    onSave = () => {
        let isShow = !validate.isEmpty(this.state.name)
            && !validate.isEmpty(this.state.phone)
            && !validate.isEmpty(this.state.email)
            // && !validate.isEmpty(this.state.area)
            // && !validate.isEmpty(this.state.numberRoom)
            // && validate.isPhone(this.state.phone)
            // && validate.isEmail(this.state.email)
            && !validate.isEmpty(this.state.tax);
        this.setState({
            errorName: validate.isEmpty(this.state.name) ? 'empty' : null,
            errorPhone: validate.isEmpty(this.state.phone) ? 'empty' : (!validate.isPhone(this.state.phone) ? 'invalid' : null),
            errorEmail: validate.isEmpty(this.state.email) ? 'empty' : (!validate.isEmail(this.state.email) ? 'invalid' : null),
            // errorArea: validate.isEmpty(this.state.area) ? 'empty' : null,
            // errorRoom: validate.isEmpty(this.state.numberRoom) ? 'empty' : null,
            errorTax: validate.isEmpty(this.state.tax) ? 'empty' : null,
        })

        if (isShow){
            this.onSendEmail();
            this.onSaveRegisteredUsers();
        }     
    }

    onSendEmail() {
        sendEmail({ name: this.state.name, phone: this.state.phone, email: this.state.email, tax: this.state.tax}).then(result => {
            this.setState({
                isFail: false,
                show: true
            })
        }).catch(error => {
            this.setState({
                isFail: true,
                show: true
            })
        })
    }

    onSaveRegisteredUsers() {
        saveGuest.insertGuest({ name: this.state.name, phone: this.state.phone, email: this.state.email, tax: this.state.tax }).then(result => {
            
        }).catch(error => {
          
        })
    }

    onClose() {
        if (this.props.isModal && !this.state.isFail) {
            this.props.onCloseModal();
        }

        this.setState(initialState);
    }

    render() {
        const { t } = this.props;

        return (
            <div className='regLayoutDiv'>
                <div id={this.props.id} className='registerDiv'>
                    <ImgCom className='regImgBack' alt='' src={imgBack} />
                    <div id='registerForm'>
                        <div style={{ textAlign: 'center' }} className='mobile'>
                            <label className='regTitle'>{t('register.title')}</label>
                        </div>
                        <div className='regTitle web'>
                            <div>
                                <label>{t('register.webTitle1')}</label>
                            </div>
                            <div>
                                <label>{t('register.webTitle2')}</label>
                            </div>
                        </div>
                        <div style={{ maxWidth: 1167, margin: 'auto' }}>
                            <div>
                                <form>
                                    <FormInput name={'register.form.name'} type={'name'} value={this.state.name} onChange={this.changeValue} errorName={'errorName'} error={this.state.errorName} placeholder={t('placeholder.name')}/>
                                    <FormInput name={'register.form.tax'} type={'tax'} value={this.state.tax} onChange={this.changeValue} errorName={'errorTax'} error={this.state.errorTax}  placeholder={t('placeholder.tax')}/>
                                    <FormInput name={'register.form.phone'} type={'phone'} value={this.state.phone} onChange={this.changeValue} errorName={'errorPhone'} error={this.state.errorPhone}  placeholder={t('placeholder.phone')}/>
                                    <FormInput name={'register.form.email'} type={'email'} value={this.state.email} onChange={this.changeValue} errorName={'errorEmail'} error={this.state.errorEmail}  placeholder={t('placeholder.email')}/>
                                    {/* <Container>
                                        <Row>
                                            <Col lg={6} sm={12}>
                                                <div className='webInputLeft'>
                                                    <FormInput name={'register.form.area'} type={'area'} value={this.state.area} onChange={this.changeValue} errorName={'errorArea'} error={this.state.errorArea}  placeholder={t('placeholder.area')}/>
                                                </div>
                                            </Col>
                                            <Col lg={6} sm={12}>
                                                <div className='webInputRight'>
                                                    <FormInput name={'register.form.room'} type={'numberRoom'} value={this.state.numberRoom} onChange={this.changeValue} errorName={'errorRoom'} error={this.state.errorRoom}  placeholder={t('placeholder.numberRoom')}/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container> */}
                                    <div style={{ marginTop: 10,display:'flex',justifyContent:'center' }}>
                                        <LoadingButton onSave = {this.onSave}/>
                                        {/* <div id='btnRegister' className='registerButton' onClick={this.onSave}>
                                            <div className='btnLayout'>
                                                <label className='registerLabel'>{t('register.registerBtn')}</label>
                                            </div>
                                        </div> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Popup onClose={this.onClose} show={this.state.show} isFail={this.state.isFail} />
            </div>
        )
    }
}

export default withTranslation()(RegisterFormClass);