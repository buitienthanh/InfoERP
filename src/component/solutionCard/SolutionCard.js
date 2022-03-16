import React from 'react';
import Item from './item/Item';
import './SolutionCard.css'
import { useTranslation } from 'react-i18next';
import ImgCom from '../imgCom/ImgCom';
import ButtonModal from '../buttonModal/ButtonModal';


export default function SolutionCard(props) {
    const title = props.value.title;
    const subTitle = props.value.subTitle;
    const content = props.value.content;
    const lastLine = props.value.lastLine;
    const imgSrc = props.value.imgSrc;
    const {t, } = useTranslation();

    const contentList = content.map((v, i) => {        
        return (
            <div key={i}>
                <Item content={t(v)} />
            </div>
        )
    })
    return (
        <div className='solCard' id={props.id}>
            <div style={{ padding: '20px 25px 15px 25px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div>
                    <div>
                        <ImgCom src={imgSrc} alt='' className='solImgCard' />
                    </div>
                    <div>
                        <label className='solTitleCard'>{t(title)}</label>
                    </div>
                    <div>
                        <label className='solSubTitleCard'>{t(subTitle)}</label>
                    </div>
                </div>
                <div className='solLineSeparate' />
                <div>
                    {contentList}
                </div>
                <div style={{marginTop: 'auto'}}>
                    {/* <div className='divSolLastLine'>
                        <label className='solLastLine'>{t(lastLine)}</label>
                    </div> */}
                    {/* <div>
                        <ButtonModal name={'solution.registerBtn'} id={'btnCard'}/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}