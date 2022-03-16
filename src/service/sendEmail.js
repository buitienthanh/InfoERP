import config from '../config/config';

export default function sendEmail(props) {
    
    return new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    email: config.email,
                    msgType: 4,
                    title: "Customer's Info",
                    content: `Name: ${props.name}, phone: ${props.phone}, email: ${props.email}, area: ${props.area}, Number of apartment units: ${props.numberRoom}`
                }
            )
        }
    
        fetch(config.api.send_email, requestOptions)
            .then(response => resolve(response.json())).catch(error => reject(error));
    })
}