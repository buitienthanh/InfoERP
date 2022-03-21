import React, { useState } from 'react';
import './ButtonModal.css';
import { useTranslation } from 'react-i18next';
import RegisterModal from '../registerModal/RegisterModal';


export default function ButtonModal(props) {
    const { t, } = useTranslation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return (
        <div>
            <div id={props.id} className='registerButton' onClick={() => setShow(true)}>
                <div className='btnLayout'>
                    <label className='registerLabel'>{t(props.name)}</label>
                </div>
            </div>
            <RegisterModal showModal={show} onClose={handleClose} />
        </div>
    )
}