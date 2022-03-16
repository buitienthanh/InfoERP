import React from 'react';
import vector from '../../../img/solution/vector.svg'
import './Item.css'
import ImgCom from '../../imgCom/ImgCom';

export default function Item(props) {
    const content = props.content;
    return (
        <div className='solItemCard'>
            <div style={{marginRight: 15}}>
                <ImgCom src={vector} style={{width:'12px'}} alt=''/>
            </div>
            <div className='solItemLabel'>
                <label>{content}</label>
            </div>
        </div>
    )
}