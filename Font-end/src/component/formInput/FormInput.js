import React from 'react';
import './FormInput.css'
import { useTranslation } from 'react-i18next';
import validate from '../../util/validateUtil';

export default function FormInput(props) {
    const { t, } = useTranslation();
    let error = props.error;
    let errorName = props.errorName;

    const onValueChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        let data = { name: name, value: value };
        let error = { name: errorName, value: null };
        if (validate.isEmpty(value)) {
            error = { name: errorName, value: 'empty' };
        } else {
            if (name === 'phone' && !validate.isPhone(value)) {
                error = { name: errorName, value: 'invalid' }
            } else if (name === 'email' && !validate.isEmail(value)) {
                error = { name: errorName, value: 'invalid' }
            } else {
                error = { name: errorName, value: null };
            }
        }
        props.onChange(error);
        props.onChange(data);
    }

    return (
        <div style={{ display: 'flex' }}>
            <div className='layoutInput'>
                <div>
                    <label className='regFormLabel'>
                        {t(props.name)}:
                    </label>
                </div>
                <div style={{ borderRadius: 6, border: error !== null ? '1px solid #DC2626' : '1px solid transparent' }}>
                    <input className='regFormInput' type="text" name={props.type} value={props.value} onChange={onValueChange} autoComplete="off" placeholder={props.placeholder}/>
                </div>
                <div style={{ visibility: error !== null ? 'visible' : 'hidden' }}>
                    <span className='errorMes'>*{error === 'invalid' ? t('error.invalid') : t('error.empty')}</span>
                </div>
            </div>
        </div>
    )
}