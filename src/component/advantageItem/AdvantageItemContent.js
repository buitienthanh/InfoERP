import React from 'react'
import { useTranslation } from 'react-i18next';


export default function AdvantageItemContent(props) {
    const subTitle = props.value.subTitle;
    const detail = props.value.content;
    const titleUp = props.value.titleUp;
    const titleDown = props.value.titleDown;
    const { t, } = useTranslation();

    return (
        <div>
            {/* <div className='advSubWeb'>
                <label>{t(subTitle)}</label>
            </div> */}
            <div>
                <div className='advTitleWeb'><label>{t(titleUp)}</label></div>
                {/* <div className='advTitleWeb'><label>{t(titleDown)}</label></div> */}
            </div>
            <div className='advSubDetail'>
                <label>{t(detail)}</label>
            </div>
        </div>
    )
}