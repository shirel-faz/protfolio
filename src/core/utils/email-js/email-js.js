import emailjs from '@emailjs/browser';
import getConfig from "next/config";

export const sedEmail = (templateParams, templateId ) => {
    const { publicRuntimeConfig : {REACT_APP_SERVICE_ID , REACT_APP_PUBLIC_KEY } } = getConfig();

    emailjs.send(REACT_APP_SERVICE_ID || '', templateId, templateParams, REACT_APP_PUBLIC_KEY || '')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}