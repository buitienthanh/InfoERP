const dev = {
    video_intro: {
        url: 'https://www.youtube.com/watch?v=iTEMvKlue3w',
        id: 'iTEMvKlue3w'
    },

    api: {
        // getRoom: 'http://1.55.215.214:4000/room/getRoom?aptId=',
        // getGuestByIdCard: 'http://1.55.215.214:4000/qrCode/getGuestByIdCard?idCard=',
        // getGuestByVisitId: 'http://1.55.215.214:4000/qrCode/getGuestByVisitId?visitId=',
        send_email: 'http://localhost:9100/api/mail/send-mail',
        insert_quest: 'http://localhost:9100/api/users/registered-users',
        // update_quest: 'http://1.55.215.214:4000/qrCode/updateGuest',
        // save_quest_regis: 'http://1.55.215.214:4000/qrCode/saveGuestRegis',
        // check_resident: 'http://1.55.215.214:4000/qrCode/checkResident?aptId='
    },

    email: 'sonht.test@gmail.com',

    facebook: {
        pageId: '112556081085822', // get from facebook page about
        appId: '842127353072981' // create business app by facebook developers and setup messenger
    }
}

export default dev;