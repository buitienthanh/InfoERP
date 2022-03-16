import React from 'react';
import TransitionLine from '../../component/transitionLine/TransitionLine';
import { useTranslation } from 'react-i18next';
import './IntroVideo.css'
import ButtonModal from '../../component/buttonModal/ButtonModal';
import YouTube from 'react-youtube'
import config from '../../config/config';

export default function IntroVideo(props) {
    const { t, } = useTranslation();

    return (
        <div id='videoDiv' ref={props.refer}>
            <TransitionLine />
            <div>
                <h2 className='labelTitle'>{t('introVideo.title')}</h2>
            </div>
            <div>
                <h4>{t('introVideo.subTitle')}</h4>
            </div>
            <div style={{ margin: 'auto', marginTop: 50, maxWidth: 719 }}>
                <div id='videoIntro'>
                    <YouTube className='youtubeVideo' videoId={config.video_intro.id} />
                </div>
            </div>
            <ButtonModal id={'btnVideo'} name={'introVideo.registerBtn'} />
        </div>
    )
}