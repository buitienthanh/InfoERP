import React from 'react'
import './CustomerItem.css'
import { useTranslation } from 'react-i18next';

export default function CustomerItem(props) {
    const number = props.number;
    const content = props.content;
    const {t, } = useTranslation();

    return (
        <div className='custNumDiv'>
            <div>
                <label className='custNumberLabel'>{number}</label>
            </div>
            <div>
                <label className='custContentLabel'>{t(content)}</label>
            </div>
        </div>
    )
}