import React from 'react';

import './Register.css'
import RegisterFormClass from '../../component/registerForm/RegisterFormClass';
import html1 from '../../util/html/securityHtml';
import html2 from '../../util/html/companyRule';
import html3 from '../../util/html/regulationHtml';

export default function Register(props) {
    const onClick = props.onClickRegulation;
    return (
        <div>
            <RegisterFormClass isModal={false}/>
            <div id='divRule'>
                {/* <div className='divRuleItem'>
                    <div className='bulletPoint' />
                    <div>
                        <label onClick={() => onClick(html1)}>Chính sách bảo mật</label>
                    </div>
                </div>
                <div className='separateRule' />
                <div className='divRuleItem'>
                    <div className='bulletPoint' />
                    <div>
                        <label onClick={() => onClick(html2)}>Quy định về chính sách thanh toán</label>
                    </div>
                </div>
                <div className='separateRule' />
                <div className='divRuleItem'>
                    <div className='bulletPoint' />
                    <div>
                        <label onClick={() => onClick(html3)}>Quy chế hoạt động ứng dụng cung cấp dịch vụ InfoCity</label>
                    </div>
                </div> */}
            </div>
            <div style={{ border: '1px solid #CBDCEE', maxWidth: 1168, margin: 'auto' }} />
        </div>
    )
}