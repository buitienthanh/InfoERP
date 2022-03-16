import React from 'react';
import './AboutPhone.css';
import ImgCom from '../imgCom/ImgCom';

export default function AboutPhone(props) {
    const flag = props.flag;
    const phoneNumber = props.phoneNumber;

    return (
        <div style={{display: 'flex'}}>
            <div>
                <ImgCom src={flag} alt='' style={{width: 26.38}}/>
            </div>
            <div className='phoneNumberAbout'>
                <label className='phoneNumberLabel'>{phoneNumber}</label>
            </div>
        </div>
    )
}